export interface Props {
  title: string,
  messages: Array<any>,
  onSend: Function,
  input: string,
  onChange: Function,
  onKeyDown: Function,
  userId: number | null,
};
