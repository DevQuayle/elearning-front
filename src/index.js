import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {I18nextProvider} from "react-i18next";
import i18n from "./i18n";
import {Provider} from 'react-redux';
import {store} from './store/Store';
import {ToastProvider} from 'react-toast-notifications';
import {Alert, AlertTitle} from '@material-ui/lab';

const MyCustomToast = ({ appearance, children, onDismiss}) => (
    <Alert onClose={onDismiss} style={{minWidth:300, marginBottom:5}} severity={appearance}>
         <AlertTitle>Błąd!</AlertTitle>
         {children}
     </Alert>
 );


ReactDOM.render(
    // <React.StrictMode>
        <Provider store={store}>
            <I18nextProvider i18n={i18n}>
                <ToastProvider components={{ Toast: MyCustomToast }}>
                    <App/>
                </ToastProvider>
            </I18nextProvider>
        </Provider>
    // </React.StrictMode>
,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
