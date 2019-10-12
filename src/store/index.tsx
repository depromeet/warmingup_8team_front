import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import  { composeWithDevTools } from 'redux-devtools-extension';

const env: string = process.env.NODE_ENV || 'development';
const history = createHistory();
const middlewares: Array<any> = [
  thunk,
  routerMiddleware(history),
];

if (env === 'development') {
  const { logger } = require('redux-logger');
  middlewares.push(logger);
}

const reducer = combineReducers({
  routing: routerReducer,
});
const store = (initialState?: Object) => {
  const storeMiddleware = applyMiddleware(...middlewares);
  return createStore(
    reducer,
    env === 'development' ? composeWithDevTools(storeMiddleware) : storeMiddleware,
  )
}

export { history };
export default store();
