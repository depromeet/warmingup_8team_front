import styled from 'styled-components';
import { device } from 'utils/device';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media ${device.tablet} {
    width: 680px;
  }

  @media ${device.laptop} {
    width: 800px;
  }

  @media ${device.desktop} {
    width: 1400px;
  }
`;
