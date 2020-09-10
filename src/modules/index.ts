import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import LoginViewReducer from 'containers/LoginView/reducers';
import ListViewReducer from 'containers/ListView/reducers';

export default (history: any) =>
  combineReducers({
    router: connectRouter(history),
    loginViewReducer: LoginViewReducer,
    listViewReducer: ListViewReducer,
  });
