import { State, Action, ChatroomState } from './interface';

const SET_MESSAGE: string = 'chat/SET_MESSAGE';
const SET_MESSAGE_LIST: string = 'chat/SET_MESSAGE_LIST';

const initalState: State = {
  messages: [],
};

export const setMessage = (data: any) => {
  return {
    type: SET_MESSAGE,
    data,
  };
};

export const setMessageList = (data: any) => {
  return {
    type: SET_MESSAGE_LIST,
    data,
  };
};

export default function chatReducer(
  state: State = initalState,
  action: Action,
): State {
  switch (action.type) {
    case SET_MESSAGE:
      let newMessages = [...state.messages];
      newMessages.push(action.data);
      return Object.assign({}, state, {
        messages: newMessages,
      });
    case SET_MESSAGE_LIST:
      return Object.assign({}, state, {
        messages: action.data
      });
    default:
      return state;
  }
};
