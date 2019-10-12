import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import  { composeWithDevTools } from 'redux-devtools-extension';
import { routerMiddleware } from 'connected-react-router'
import { createBrowserHistory } from 'history'
import createRootReducer from './reducers'

const env: string = process.env.NODE_ENV || 'development';
export const history = createBrowserHistory();
const middlewares: Array<any> = [
  thunk,
  routerMiddleware(history),
];

if (env === 'development') {
  const { logger } = require('redux-logger');
  middlewares.push(logger);
}

const store = (initialState?: Object) => {
  const storeMiddleware = applyMiddleware(...middlewares);
  return createStore(
    createRootReducer(history),
    env === 'development' ? composeWithDevTools(storeMiddleware) : storeMiddleware,
  )
}

export default store();
