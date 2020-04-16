// @flow
import API from '../../API';
import {LOGIN} from "./queries";

export type TUser = {
    _id: string,
    name: string,
    surname: string,
    email: string,
    role: {
        key: string,
        name: string,
        permissions: [string]
    },
};


export default class User {

    static login = async (email: string, password: string): Promise<any> => {
        const response = await API.post('', {
            query: LOGIN,
            variables: {email, password}
        });
        const authData = response.data.data.login;

        if(authData && authData.token){
            return authData;
        }else{
            return false;
        }
    }


}
