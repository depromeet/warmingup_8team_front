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

interface Profile {
  nickname: string,
  profile_image_url: string,
  thumbnail_image_url: string,
}

export interface KakaoProfile {
  age_range: string,
  age_range_needs_agreement: boolean,
  birthday: string,
  birthday_needs_agreement: boolean,
  email: string,
  email_needs_agreement: boolean,
  gender: string,
  gender_needs_agreement: boolean,
  has_age_range: boolean,
  has_birthday: boolean,
  has_email: boolean,
  has_gender: boolean,
  is_email_valid: boolean,
  is_email_verified: boolean, 
  profile: Profile,
  profile_needs_agreement: boolean,
};

export interface KakaoResponse {
  access_token: string,
  expires_in: number,
  refresh_token: string,
  refresh_token_expires_in: number,
  scope: string,
  token_type: string,
};

export interface KakaoResult {
  response: KakaoResponse,
  profile: KakaoProfile,
}

declare global {
  interface Window {
    Kakao: any;
  }
}