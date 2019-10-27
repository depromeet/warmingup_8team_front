export type State = {
  readonly isLoggedIn: boolean,
  readonly isLoading: boolean,
  readonly token: string | null
};


interface logoutAction {
  type: string
};

export type Action = | logoutAction;