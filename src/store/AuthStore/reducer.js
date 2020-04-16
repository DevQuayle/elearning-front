// @flow


import type {TUser} from "../../models/User";
import {LOGIN_USER_SUCCESS} from "./actions";
import {updateObject} from "../../utils/utils";

type stateType = {
    user: TUser,
    isLogged: boolean
};

const userData: string = localStorage.getItem('user') || "";
const user = userData ? JSON.parse(userData) : {};
const token = !!localStorage.getItem('token');

const initialState: stateType = {
    user: user || {},
    isLogged: token || false
};

const authReducer = (state: stateType = initialState, action: any) => {
    switch (action.type) {
        case LOGIN_USER_SUCCESS:
            return updateObject(state, {user: action.user, isLogged: true});
        default:
            return state;
    }
};

export default authReducer;
