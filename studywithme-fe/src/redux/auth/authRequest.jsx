import authApi from "../../services/apis/authApi";
import { loginFailed, loginStart, loginSuccess, logoutStart, logoutSuccess, logoutFailed } from "./authSlice";

export const loginUser = async(user, dispatch) => {
    dispatch(loginStart());
    console.log("vao den day roi")
    try {
        const authResponse = await authApi.login(user);
        dispatch(loginSuccess(authResponse.data));
        return authResponse;
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
export const logOut = async(acessToken, dispatch, navigate) => {
    dispatch(logoutStart());
    try {
        await authApi.logout(acessToken);
        dispatch(logoutSuccess());
        navigate("/");
    } catch(err) {
        dispatch(logoutSuccess());
        console.log("Loi",err);
        navigate("/");
    }
}