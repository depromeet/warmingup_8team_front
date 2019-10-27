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

export interface KakaoResponse {
  access_token: string,
  expires_in: number,
  refresh_token: string,
  refresh_token_expires_in: number,
  scope: string,
  token_type: string,
};

declare global {
  interface Window {
    Kakao: any;
  }
}