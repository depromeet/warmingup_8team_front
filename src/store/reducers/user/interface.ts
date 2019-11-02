import { ChatroomState } from "../chat/interface";

export interface UserState {
  chatroom?: ChatroomState,
  id: number | null,
  email: string | null,
  gender: boolean | null,
  name: string | null,
  profile_url: string | null,
  thumbnail_url: string | null,
};

export interface State {
  readonly isLoggedIn: boolean,
  readonly isLoading: boolean,
  readonly profile: UserState,
  readonly chatroom: ChatroomState
};

interface loginAction {
  type: string,
  data: UserState,
};


interface logoutAction {
  type: string,
  data?: any,
};

export type Action = loginAction | logoutAction;