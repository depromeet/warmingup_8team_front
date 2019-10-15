export interface Props {
  bold?: boolean,
  borderRadius?: number,
  fontSize?: number,
  height?: number,
  width?: number,
  onSuccess: (result: object) => void,
  onFailure: (error: any) => void,
}

export interface Style {
  bold?: boolean,
  borderRadius?: number,
  fontSize?: number,
  height?: number,
  width?: number,
}

export declare const Kakao: any;
