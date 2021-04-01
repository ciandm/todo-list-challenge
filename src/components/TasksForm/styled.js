import styled from 'styled-components';

export const FormWrapper = styled.div`
  max-height: ${({ formShown }) => (formShown ? '400px' : '0')};
  transition: max-height 0.35s ease-in-out;
  overflow: hidden;
  position: relative;
  &::before {
    background: ${({ theme }) =>
      theme.darkMode
        ? `linear-gradient(
      180deg,
      hsla(232, 40%, 10%, 0) 0%,
      hsla(232, 40%, 10%, 50%)
    )`
        : `linear-gradient(
      180deg,
      hsla(232, 56%, 61%, 0) 0%,
      hsla(232, 56%, 61%, 05%)
    )`};
    bottom: 0;
    content: '';
    display: block;
    height: 2rem;
    left: 0;
    position: absolute;
    width: 100%;
  }
`;

export const Form = styled.form`
  background-color: ${({ theme }) =>
    theme.darkMode ? theme.colors.bunting : theme.colors.periwinkleGray};
  display: flex;
  flex-direction: column;
  padding: 3.2rem 1.6rem;

  @media ${({ theme }) => theme.mediaQueries.tablet} {
    padding: 3.2rem 2.4rem;
  }
`;

export const FormGroup = styled.div`
  display: grid;
  gap: 2.4rem;
  grid-template-columns: 1fr;
  padding-bottom: 2.4rem;

  @media ${({ theme }) => theme.mediaQueries.tablet} {
    grid-template-columns: 1fr 18rem;
    padding-bottom: 3.2rem;
  }
`;

export const ButtonGroup = styled.div`
  align-items: center;
  display: flex;

  & button + button {
    margin-left: 1.2rem;
  }
`;
