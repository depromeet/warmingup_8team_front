

export interface ChatroomState {
    id: number | null,
    name: string | null,
    thumbnail: string | null,
    url: string | null
}

export interface State {
  messages: Array<any>,
};

interface setMessageAction {
  type: string,
  data: ChatroomState,
};


export type Action = setMessageAction;