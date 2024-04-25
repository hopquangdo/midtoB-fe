import authApi from "../../services/apis/authApi";
import { loginFailed, loginStart, loginSuccess, logoutStart, logoutSuccess, logoutFailed } from "./authSlice";

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
export const registerUser = async(user,dispatch) => {
    dispatch();
    try {
        const response = await authApi.register(user);
    } catch(err){
        return err;
    }
}
export const logOut = async(dispatch) => {
    dispatch(logoutStart());
    try {
        await authApi.logout();
        dispatch(logoutSuccess());
    } catch(err) {
        dispatch(logoutSuccess());
        console.log("Loi",err);
    }
}