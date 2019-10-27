import { State as userState } from './user/interface';

export type RootState = {
  router: any,
  user: userState,
};