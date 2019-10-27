import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { all } from 'redux-saga/effects';
import { RootState } from './interface';
import user, { userSaga } from './user';

export const createRootReducer = (history: any) => combineReducers<RootState>({
  router: connectRouter(history),
  user,
});

export function* rootSaga() {
  yield all([
    userSaga(),
  ]);
}; 
