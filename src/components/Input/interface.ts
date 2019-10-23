export interface Props {
  placeholder?: string,
  disabled?: boolean,
  readonly?: boolean,
  value?: (string | number),
  type?: string,
  onChange?(value: (string | number)): any,
}