import styled from 'styled-components';
import { StyleProps } from './interface';

export const Wrapper = styled.div`
  width: 425px;
  height: 230px;
  border-radius: 24px;
  box-shadow: 0 2px 16px 0 rgba(0, 0, 0, 0.1);
  background-color: #d8d8d8;
  background-image: url(${(props: StyleProps) => props.url});
  background-size: cover;
`;