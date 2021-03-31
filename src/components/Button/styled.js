import styled from 'styled-components';

export const Button = styled.button.attrs(({ type }) => ({
  type,
}))`
  background-color: ${({ theme }) => theme.colors.moodyBlue};
  border-radius: 1.2rem;
  font-weight: 500;
  padding: 1.2rem 2.4rem;
`;

export const PrimaryButton = styled(Button)`
  color: ${({ theme }) => theme.colors.white};

  & svg {
    fill: ${({ theme }) => theme.colors.white};
    margin-left: 1.2rem;
  }

  &:hover,
  &:focus {
    background-color: hsl(232, 56%, 55%);
  }

  &:active {
    background-color: hsl(232, 56%, 50%);
  }
`;

export const SecondaryButton = styled(Button)`
  color: ${({ theme }) => theme.colors.moodyBlue};

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.colors.periwinkleGray};
  }

  &:active {
    background-color: ${({ theme }) => theme.colors.linkWater};
  }
`;
