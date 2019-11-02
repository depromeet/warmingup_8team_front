import { takeEvery } from 'redux-saga/effects';
import { axios } from 'utils';
import { State, UserState, Action } from './interface';

const LOGIN_SUCCESS: string = 'user/LOGIN_SUCCESS';
const LOGIN_FAILURE: string = 'user/LOGIN_FAILURE';
const LOGOUT: string = 'user/LOGOUT';
const FETCH_USER: string = 'user/FETCH_USER';
const UPDATE_CHATROOM: string = 'chatroom/UPDATE';

const initialState: State = {
  isLoggedIn: false,
  isLoading: false,
  profile: {
    id: null,
    email: null,
    gender: null,
    name: null,
    profile_url: null,
    thumbnail_url: null,
  },

  chatroom: {
    id: null,
    name: null,
    thumbnail: null,
    url: null

  }
};

export const login = (data: UserState) => {
  const { chatroom, ...profile } = data;
  return {
    type: LOGIN_SUCCESS,
    data: { chatroom, profile },
  };
};

export const updateChatroom = (data: any) => {
  return {
    type: UPDATE_CHATROOM,
    data: { chatroom: data }
  }
};

export const logout = () => {
  return { type: LOGOUT }
};

export async function* fetchUser() {
  const res = await axios.post('/login');
  console.log(11, res);
};

export function* userSaga() {
  yield takeEvery(FETCH_USER, fetchUser);
};

export default function userReducer(
  state: State = initialState,
  action: Action,
): State {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return Object.assign({}, state, {
        isLoggedIn: true,
        isLoading: false,
        profile: action.data.profile,
        chatroom: action.data.chatroom,
      });
    case LOGOUT:
      return Object.assign({}, state, {
        isLoggedIn: false,
        isLoading: false,
        profile: {
          id: null,
          email: null,
          gender: null,
          name: null,
          profile_url: null,
          thumbnail_url: null,
        }
      });
    case UPDATE_CHATROOM:
      debugger;
      return Object.assign({}, state, {
        state,
        chatroom: action.data
      })
    default:
      return state;
  }
};
