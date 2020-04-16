// @flow

import type {TUser} from "../../models/User";

/** --------- Action types ---------- **/
export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS';

/** --------- Actions --------------- **/
export const loginUserSuccess = (user: TUser) => ({
  type: LOGIN_USER_SUCCESS,
  user
});
