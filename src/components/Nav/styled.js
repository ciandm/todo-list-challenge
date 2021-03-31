import styled from 'styled-components';
import { H1 } from '../../theme/typography';

export const Nav = styled.nav`
  background-color: ${({ theme }) =>
    theme.darkMode ? theme.colors.bayOfMany : theme.colors.white};
  box-shadow: ${({ theme }) =>
    theme.darkMode
      ? ''
      : '0px 6px 16px rgba(99, 113, 211, 0.04), 0px 12px 12px rgba(99, 113, 211, 0.08);'};
`;

export const Wrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 2.4rem 1.6rem;

  @media ${({ theme }) => theme.mediaQueries.desktop} {
    margin: 0 auto;
    max-width: 103.2rem;
  }
`;

export const Title = styled.h1`
  ${H1};
  color: ${({ theme }) =>
    theme.darkMode ? theme.colors.white : theme.colors.moodyBlue};
`;

export const ButtonGroup = styled.div`
  display: grid;
  gap: 0.8rem;
  grid-template-columns: 1fr 1fr;
`;
