export interface Props {
  disabled?: boolean,
  bold?: boolean,
  borderRadius?: number,
  fontSize?: number,
  height?: number,
  width?: number,
  margin?: string,
  text: string,
  color?: string,
  background?: string,
  cursor?: string,
  path?: string,
  onClick?: () => void,
}

export interface Style {
  bold?: boolean,
  borderRadius?: number,
  fontSize?: number,
  height?: number,
  width?: number,
  margin?: string,
  color?: string,
  background?: string,
  cursor?: string,
}
