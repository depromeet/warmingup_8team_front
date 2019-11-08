export interface Props {
  title?: string | undefined | null,
  messages: Array<any>,
  onSend: Function,
  input: string,
  onChange: Function,
  onKeyDown: Function,
  userId: number | null,
  chatContent: any,
  chatKey: string,
}
