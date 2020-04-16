import React, {ReactElement} from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import GuestLayout from "./layouts/Guest";
import {useSelector} from "react-redux";
import HeadmasterLayout from "./layouts/Headmaster";

const App = (): ReactElement => {
    const {isLogged, user} = useSelector(({auth}) => auth);
    let role = false
    if (user.role){
        role = user.role.key || false;
    }
    return (
        <BrowserRouter>
            <Switch>
                {/*<Redirect from="/" to="/admin/dashboard"/>*/}

                {isLogged && role === 'headmaster' && <Route path="/" render={props => <HeadmasterLayout {...props} />}/>}

                {!isLogged && <Route path="/" render={props => <GuestLayout {...props} />}/>}

            </Switch>
        </BrowserRouter>
    )
}


export default App;
