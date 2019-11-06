import { takeEvery } from 'redux-saga/effects';
import { axios } from 'utils';
import { State, UserState, Action } from './interface';

const LOGIN_SUCCESS: string = 'user/LOGIN_SUCCESS';
const LOGIN_FAILURE: string = 'user/LOGIN_FAILURE';
const LOGOUT: string = 'user/LOGOUT';
const FETCH_USER: string = 'user/FETCH_USER';
const UPDATE_CHATROOM: string = 'chatroom/UPDATE';
const UPDATE_QUESTION: string = 'question/UPDATE';
const DELETE_QUESTION_SAMPLE: string = 'question_sample/UPDATE';

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
  },

  question_sample: [
  ],

  questions: [
  ]
};

export const login = (data: UserState) => {
  const { chatroom, question_sample, ...profile } = data;
  return {
    type: LOGIN_SUCCESS,
    data: { chatroom, question_sample, profile },
  };
};

export const updateChatroom = (data: any) => {
  return {
    type: UPDATE_CHATROOM,
    data: { chatroom: data }
  }
};

export const updateQuestion = (data: any) => {
  return {
    type: UPDATE_QUESTION,
    data: { questions: data }
  }
};

export const deleteQuestionSample = (data: any) => {
  return {
    type: DELETE_QUESTION_SAMPLE,
    data: { question_sample: data }
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
        question_sample: action.data.question_sample,
        questions: action.data.questions || [],
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
      return Object.assign({}, state, {
        state,
        chatroom: action.data
      });
    case UPDATE_QUESTION:
      return Object.assign({}, state, {
        state,
        questions: [...state.questions, action.data]
      });
    case DELETE_QUESTION_SAMPLE:
      const newState = state.question_sample.filter( val => val !== action.data );

      return Object.assign({}, state, {
        state,
        question_sample: newState
      });
    default:
      return state;
  }
};
