import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
    name: "auth",
    initialState: {
        login: {
            isLoggedIn: false,
            isAdmin: false,
            auth: {
                userId: "",
                firstName: "",
                lastName: "",
                avatar: "",
                tokens: {
                    accessToken: "",
                    refreshToken: "",
                }
            },
            isFetching: false,
            error: false
        },
        logout: {
            isLoading: false,
            error: false,
        }
    },
    reducers: {
        loginStart: (state) => {
            state.login.isFetching = true;
        },
        loginSuccess: (state, action) => {
            state.login.isFetching = false;
            state.login.isLoggedIn = true;
            state.login.auth = action.payload;
            state.login.isAdmin = state.login.auth.roles && state.login.auth.roles.includes("ADMIN");
            state.login.isAdmin = false;
            state.login.error = false;
        },
        loginFailed: (state) => {
            state.login.isFetching = false;
            state.login.error = true;
        },

        logoutStart: (state) => {
            state.logout.isLoading = true;
        },
        logoutSuccess: (state) => {
            state.logout.isLoading = false;
            state.login.isLoggedIn = false;
            state.login.isAdmin = false;
            state.login.auth = {}; 
            state.logout.error = false;
        },
        logoutFailed: (state) => {
            state.login.isAdmin = false;
            state.login.auth = {}; 
            state.logout.isLoading = false;
            state.logout.error = true;
        },
    }
});
export const { loginStart, loginFailed, loginSuccess,logoutStart,logoutSuccess,logoutFailed } = authSlice.actions;
export default authSlice.reducer;
