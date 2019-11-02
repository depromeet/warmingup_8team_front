import { State as userState } from './user/interface';
import { State as chatState } from './chat/interface';

export type RootState = {
  router: any,
  user: userState,
  chat: chatState,
};