import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import authReducer from './AuthStore/reducer';
import ReduxThunk from 'redux-thunk';

const rootReducer = combineReducers({
  auth: authReducer,
});


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(rootReducer,
  composeEnhancers(applyMiddleware(ReduxThunk)),
);

