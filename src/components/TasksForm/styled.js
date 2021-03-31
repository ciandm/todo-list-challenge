import styled from 'styled-components';

export const FormWrapper = styled.div`
  max-height: ${({ formShown }) => (formShown ? '400px' : '0')};
  transition: max-height 0.35s ease;
  overflow: hidden;
`;

export const Form = styled.form`
  background-color: ${({ theme }) =>
    theme.darkMode ? theme.colors.bunting : theme.colors.periwinkleGray};
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
