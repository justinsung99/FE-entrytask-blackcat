import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'connected-react-router/immutable';
import thunk from 'redux-thunk';
import { createBrowserHistory } from 'history';
import { composeWithDevTools } from 'redux-devtools-extension';

import createRootReducer from './modules';

export const history = createBrowserHistory();

const initialState = {};
const enhancers: any = [];
const middleware = [thunk, routerMiddleware(history)];

const composedEnhancers = composeWithDevTools(applyMiddleware(...middleware), ...enhancers);

const store = createStore(createRootReducer(history), initialState, composedEnhancers);

export default store;
