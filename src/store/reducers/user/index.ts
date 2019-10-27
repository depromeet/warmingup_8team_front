import { takeEvery } from 'redux-saga/effects';
import { axios } from 'utils';
import { State, UserState, Action } from './interface';


const LOGIN_SUCCESS: string = 'user/LOGIN_SUCCESS';
const LOGIN_FAILURE: string = 'user/LOGIN_FAILURE';
const LOGOUT: string = 'user/LOGOUT';
const FETCH_USER: string = 'user/FETCH_USER';

function hasCSRFToken():boolean {
  console.log(11, document.cookie);
  if (!document.cookie) {
    return false;
  }
  const xsrfCookies = document.cookie.split(';')
    .map(c => c.trim())
    .filter(c => c.startsWith('csrf='));
  console.log(22, xsrfCookies, document.cookie);
  if (xsrfCookies.length === 0) {
    return false;
  }

  const token = decodeURIComponent(xsrfCookies[0].split('=')[1]);
  console.log(33, token);
  if (token.length === 0) {
    return false;
  }

  return true;
}

const initialState: State = {
  isLoggedIn: hasCSRFToken(),
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
  // localStorage.setItem('profile', JSON.stringify(profile));
  return {
    type: LOGIN_SUCCESS,
    data: profile,
  }
};

export const logout = () => {
  document.cookie = 'csrf=;';
  return { type: LOGOUT }
};

async function* fetchUser() {
  const res = await axios.post('/login');
  console.log(res);
};

export function* userSaga() {
  yield takeEvery(FETCH_USER, fetchUser);
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
