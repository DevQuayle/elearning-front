// @flow

import {loginUserSuccess} from "./actions";
import User from "../../models/User";

export const loginUser = ($login: string, $password: string): function => {
    return async dispatch => {
        const userData = await User.login($login, $password);
        if (userData) {
            localStorage.setItem('token', userData.token);
            delete(userData.token);
            localStorage.setItem('user', JSON.stringify(userData));
            dispatch(loginUserSuccess(userData));
        } else {
            localStorage.removeItem('token');
        }
    }
}
