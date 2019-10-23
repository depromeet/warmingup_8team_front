import styled from 'styled-components';
import { StyleProps } from './interface';

export const Image = styled.div`
  position: relative;
  width: 24px;
  height: 24px;
  background-image: url(${(props: StyleProps) => props.url});
  background-size: cover;
  background-color: rgb(255, 255, 255);
  box-shadow: none;
  border-radius: 50%;
`;