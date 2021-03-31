import styled from 'styled-components';

export const Form = styled.form`
  background-color: ${({ theme }) =>
    theme.darkMode ? theme.colors.bunting : theme.colors.perwinkleGray};
  display: grid;
  gap: 2.4rem;
  grid-template-columns: 1fr;
  padding: 3.2rem 1.6rem;
`;

export const ButtonGroup = styled.div`
  align-items: center;
  display: flex;

  & button + button {
    margin-left: 1.2rem;
  }
`;
