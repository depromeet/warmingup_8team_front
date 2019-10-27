import { State, UserState, Action } from './interface';

const LOGIN_SUCCESS: string = 'user/LOGIN_SUCCESS';
const LOGIN_FAILURE: string = 'user/LOGIN_FAILURE';
const LOGOUT: string = 'user/LOGOUT';


function hasProfileStorage(): boolean {
  const profile = localStorage.getItem('profile');
  if (profile) {
    const userId = JSON.parse(profile).id;
    if (userId) {
      return true;
    }
  }
  return false;
}

const initialState: State = {
  isLoggedIn: hasProfileStorage(),
  isLoading: false,
  profile: {
    id: null,
    email: null,
    gender: null,
    name: null,
    profile_url: null,
    thumbnail_url: null,
  },
};

export const login = (data: UserState) => {
  const { chatroom, ...profile } = data;
  localStorage.setItem('profile', JSON.stringify(profile));
  return {
    type: LOGIN_SUCCESS,
    data: profile,
  }
};

export const logout = () => {
  localStorage.removeItem('profile');
  return { type: LOGOUT }
};

export default function userReducer (
  state: State = initialState,
  action: Action,
): State {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return Object.assign({}, state, {
        isLoggedIn: true,
        isLoading: false,
        profile: action.data
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
      }});
    default:
      return state;
  }
};
