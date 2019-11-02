export interface Props {
  id?: number,
  user_id?: number,
  sender?: boolean,
  text?: string,
  name: string,
  thumbnail_url?: string,
  created_at?: string,
};

export interface StyleProps {
  sender?: boolean,
};
