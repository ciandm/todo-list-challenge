import styled from 'styled-components';

export const Wrapper = styled.div`
  align-items: center;
  background-color: ${({ theme }) =>
    theme.darkMode ? theme.colors.bunting : theme.colors.purpleGray};
  display: flex;
  height: 100vh;
  justify-content: center;
  padding: 0 1.6rem;
  width: 100vw;

  @media ${({ theme }) => theme.mediaQueries.tablet} {
    padding: 0;
  }
`;

export const Form = styled.form`
  display: grid;
  gap: 3.2rem;
  grid-template-columns: 1fr;
  max-width: 40rem;
  width: 100%;
`;

export const FormGroup = styled.div`
  gap: 2.4rem;
  display: grid;
`;

export const ButtonGroup = styled.div`
  display: grid;
  gap: 1.6rem;
`;
