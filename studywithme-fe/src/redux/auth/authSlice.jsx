import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
    name: "auth",
    initialState: {
        login: {
            isLoggedIn: false,
            isAdmin: false,
            currentUser: {
                userId: "",
                firstName: "",
                lastName: "",
                avatar: ""
            },
            isFetching: false,
            error: false
        },
        logout: {
            isLoading: false,
            error: false,
        },
        singup: {
            isLoading: false,
            error: false
        },
        login: {
            isLoggedIn: false,
            isAdmin: false,
            currentUser: {
                userId: "",
                firstName: "",
                lastName: "",
                avatar: ""
            },
            isFetching: false,
            error: false
        },
    },
    reducers: {
        loginStart: (state) => {
            state.login.isFetching = true;
            state.login.error = false; // Reset error state
        },
        loginSuccess: (state, action) => {
            state.login.isFetching = false;
            state.login.isLoggedIn = true;
            console.log("day la gam")
            state.login.currentUser = {
                userId: action.payload.userId,
                firstName: action.payload.profile.firstName,
                lastName: action.payload.profile.lastName,
                avatar: action.payload.profile.avatar
            };
            localStorage.setItem('accessToken', action.payload.token.accessToken);
            localStorage.setItem('refreshToken', action.payload.token.refreshToken);
            console.log(state.login.currentUser);
            state.login.isAdmin = action.payload.roles.includes("ADMIN");
            state.login.error = false;
        },
        loginFailed: (state) => {
            state.login.isFetching = false;
            state.login.error = true;
        },

        logoutStart: (state) => {
            state.logout.isLoading = true;
            state.logout.error = false; 
        },
        logoutSuccess: (state) => {
            state.logout.isLoading = false;
            state.login.isLoggedIn = false;
            state.login.isAdmin = false;
            state.login.currentUser = {
                userId: "",
                firstName: "",
                lastName: "",
                avatar: ""
            };
            state.logout.error = false;
            localStorage.removeItem('accessToken');
            localStorage.removeItem('refreshToken');
        },
        logoutFailed: (state) => {
            state.logout.isLoading = false;
            state.logout.error = true;
        },
    }
});

export const { loginStart, loginFailed, loginSuccess, logoutStart, logoutSuccess, logoutFailed } = authSlice.actions;
export default authSlice.reducer;
