import styled from 'styled-components';
import { Body } from '../../../../theme/typography';

export const Copy = styled.p`
  ${Body};
  color: ${({ theme }) => theme.colors.moodyBlue};
  text-align: center;

  & strong {
    font-weight: 700;
  }

  & + & {
    margin-top: 2px;
  }
`;
