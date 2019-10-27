import { State, Action } from './interface';

const LOGIN_LOADING: string = 'user/LOGIN_LOADING';
const LOGIN_SUCCESS: string = 'user/LOGIN_SUCCESS';
const LOGIN_FAILURE: string = 'user/LOGIN_FAILURE';
const LOGOUT: string = 'user/LOGOUT';

const initialState: State = {
  isLoggedIn: false,
  isLoading: false,
  token: localStorage.getItem('token'),
};

export const Login = () => ({
  type: LOGIN_LOADING,
});

export const logout = () => ({ type: LOGOUT });

export default function userReducer (
  state: State = initialState,
  action: Action,
): State {
  switch (action.type) {
    case LOGIN_LOADING:
      return state;
    case LOGOUT:
      return state;
    default:
      return state;
  }
};
