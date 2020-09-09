import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import LoginViewReducer from 'containers/LoginView/reducers';

export default (history: any) =>
  combineReducers({
    router: connectRouter(history),
    loginViewReducer: LoginViewReducer,
  });
