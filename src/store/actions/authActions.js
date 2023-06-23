import { login, register } from "../../API/auth.firebase";
import {
    loginAction,
    loginSuccess,
    loginError,
    registerAction,
    registerSuccess,
    registerError
} from "../reducers/authSlice";

export const authLogin = (credentials) => (dispatch) => {
    try {
        dispatch(loginAction());
        const response = login(credentials);
        console.log(response);
        response.then(user => dispatch(loginSuccess(user)));
    } catch (e) {
        dispatch(loginError(e.message));
    }
}

export const authRegister = (credentials) => (dispatch) => {
    try {
        dispatch(registerAction());
        const response = register(credentials);
        response.then(user => dispatch(registerSuccess(user)));
    } catch (e) {
        dispatch(registerError(e.message));
    }
}