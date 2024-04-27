import authApi from "../../services/apis/authApi";
import {loginStart, loginFailed, loginSuccess, logOut } from "./userSlice";

export const loginUser = async(user, dispatch) => {
    dispatch(loginStart());
    try {
        const response = await authApi.login(user);
        dispatch(loginSuccess(response.data));
        console.log(response);
        return response;
    } catch (err) {
        dispatch(loginFailed());
        console.log(err);
        return err;
    }
}
export const registerUser = async(user, dispatch) => {
    dispatch(loginStart());
    try {
        const response = await authApi.login(user);
        dispatch(loginSuccess(response.data));
        console.log(response);
        return response;
    } catch (err) {
        dispatch(loginFailed());
        console.log(err);
        return err;
    }
}
export const logoutUser = async(dispatch) => {
    dispatch(logOut());
    try {
        await authApi.logout();
    } catch(err) {
        console.log("Loi",err);
    }
}