import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: "user",
    initialState: {
        auth: {
            isLoggedIn: false,
            isAdmin: false,
            currentUser: {
                userId: "",
                userName: "",
                firstName: "",
                lastName: "",
                avatar: ""
            },
        },
        status: {
            isFetching: false,
            error: false
        }
    },
    reducers: {
        loginStart: (state) => {
            state.status.isFetching = true; 
            state.status.error = false; 
        },
        loginSuccess: (state, action) => {
            state.status.isFetching = false;
            state.auth.isLoggedIn = true;
            state.auth.currentUser = {
                userId: action.payload.userId,
                firstName: action.payload.profile.firstName,
                lastName: action.payload.profile.lastName,
                avatar: action.payload.profile.avatar
            };
            localStorage.setItem('accessToken', action.payload.token.accessToken);
            localStorage.setItem('refreshToken', action.payload.token.refreshToken);
            state.auth.isAdmin =  action.payload?.roles.includes("ADMIN");
            state.status.error = false;
        },
        loginFailed: (state) => {
            state.status.isFetching = false;
            state.status.error = true;
        },
        
        
        logOut: (state) => {
            state.status.isFetching = false; 
            state.auth.isLoggedIn = false;
            state.auth.isAdmin = false;
            state.auth.currentUser = {
                userId: "",
                firstName: "",
                lastName: "",
                avatar: ""
            };
            state.auth.error = false;
            localStorage.removeItem('accessToken');
            localStorage.removeItem('refreshToken');
        },
    }
});

export const { loginStart, loginFailed, loginSuccess, logOut } = userSlice.actions; 
export default userSlice.reducer;
