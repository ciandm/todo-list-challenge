import styled from 'styled-components';
import { Body } from '../../../theme/typography';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5.6rem 1.6rem;
`;

export const Image = styled.img`
  height: 20rem;
  margin-bottom: 2.4rem;
`;

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
