import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { RootState } from './interface';
import user from './user';

const createRootReducer = (history: any) => combineReducers<RootState>({
  router: connectRouter(history),
  user,
})
export default createRootReducer;

