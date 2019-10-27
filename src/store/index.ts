import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import  { composeWithDevTools } from 'redux-devtools-extension';
import { routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import { createRootReducer, rootSaga } from './reducers';

const env: string = process.env.NODE_ENV || 'development';
export const history = createBrowserHistory();
const sagaMiddleware = createSagaMiddleware()
const middlewares: Array<any> = [
  thunk,
  routerMiddleware(history),
  sagaMiddleware,
];

if (env === 'development') {
  const { logger } = require('redux-logger');
  middlewares.push(logger);
}

const store = (initialState?: Object) => {
  const storeMiddleware = applyMiddleware(...middlewares);
  const Store = createStore(
    createRootReducer(history),
    env === 'development' ? composeWithDevTools(storeMiddleware) : storeMiddleware,
  );
  sagaMiddleware.run(rootSaga);
  return Store;
};

export default store();
