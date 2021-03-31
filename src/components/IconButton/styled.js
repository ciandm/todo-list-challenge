import styled from 'styled-components';

export const Button = styled.button`
  align-items: center;
  background-color: transparent;
  border-radius: 1.2rem;
  display: flex;
  justify-content: center;
  padding: 1.2rem;
  transition: background-color 0.25s ease-in-out;

  & svg {
    height: 2.4rem;
    width: 2.4rem;
  }
`;

export const DangerButton = styled(Button)`
  &:hover {
    background-color: ${({ theme }) => theme.colors.mandysPink};
  }

  & svg {
    fill: ${({ theme }) => theme.colors.burntSienna};
  }
`;

export const RegularButton = styled(Button)`
  &:hover {
    background-color: ${({ theme }) =>
      theme.darkMode ? theme.colors.bunting : theme.colors.linkWater};
  }

  & svg {
    fill: ${({ theme }) =>
      theme.darkMode ? theme.colors.white : theme.colors.moodyBlue};
  }
`;
