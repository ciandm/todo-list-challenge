import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${({ theme }) =>
    theme.darkMode ? theme.colors.bayOfMany : theme.colors.white};
  border-radius: 4px;
  box-shadow: ${({ theme }) =>
    theme.darkMode
      ? ''
      : '0px 6px 16px rgba(99, 113, 211, 0.04), 0px 12px 12px rgba(99, 113, 211, 0.08);'};
`;

export const Tasks = styled.div`
  display: grid;
  grid-template-columns: 1fr;
`;
