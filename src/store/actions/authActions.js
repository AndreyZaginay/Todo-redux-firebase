import { login, register } from "../../API/auth.firebase";
import {
    loginAction,
    loginSuccess,
    loginError,
    registerAction,
    registerSuccess,
    registerError,
    logoutAction
} from "../reducers/authSlice";

export const authLogin = (credentials) => async (dispatch) => {
    // dispatch(loginAction());
    // login(credentials)
    //     .then(user => dispatch(loginSuccess(user)))
    //     .catch(error => dispatch(loginError(error.message)))
    try {
        dispatch(loginAction());
        const user = await login(credentials);
        dispatch(loginSuccess(user));
    } catch (error) {
        dispatch(loginError(error.message));
    }
}

export const authRegister = (credentials) => async (dispatch) => {
    try {
        dispatch(registerAction());
        const userId = await register(credentials);
        dispatch(registerSuccess({ id: userId, ...credentials }));
    } catch (error) {
        dispatch(registerError(error.message));
    }
}

export const authLogout = () => (dispatch) => {
   try {
        dispatch(logoutAction());
        dispatch(loginSuccess());
   } catch (error) {
        dispatch(loginError(error.message));
   }
}