export interface Props {
  bold?: boolean,
  borderRadius?: number,
  fontSize?: number,
  height?: number,
  width?: number,
  onSuccess: (result: object) => void,
  onFailure: (error: any) => void,
  kakaoKey?: string,
}

export interface Style {
  bold?: boolean,
  borderRadius?: number,
  fontSize?: number,
  height?: number,
  width?: number,
}

declare global {
  interface Window {
    Kakao: any;
  }
}