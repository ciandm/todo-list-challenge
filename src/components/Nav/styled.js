import styled from 'styled-components';

export const Nav = styled.nav`
  background-color: ${({ theme }) =>
    theme.darkMode ? theme.colors.BayOfMany : theme.colors.white};
  box-shadow: ${({ theme }) =>
    theme.darkMode
      ? ''
      : 'box-shadow: 0px 6px 16px rgba(99, 113, 211, 0.04), 0px 12px 12px rgba(99, 113, 211, 0.08);'};
  padding: 2.4rem 1.6rem;
`;
