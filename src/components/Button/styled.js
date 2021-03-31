import styled from 'styled-components';
import { Body } from '../../theme/typography';

export const Button = styled.button.attrs(({ type }) => ({
  type,
}))`
  ${Body};
  border-radius: 1.2rem;
  font-weight: 500;
  padding: 1.2rem 2.4rem;
`;

export const PrimaryButton = styled(Button)`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.moodyBlue};
  color: ${({ theme }) => theme.colors.white};
  display: flex;

  & svg {
    fill: ${({ theme }) => theme.colors.white};
    height: 1.6rem;
    margin-left: 1.2rem;
    width: 1.6rem;
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
  background-color: transparent;
  border: 1px solid transparent;
  color: ${({ theme }) => theme.colors.moodyBlue};

  &:hover,
  &:focus {
    border: 1px solid ${({ theme }) => theme.colors.moodyBlue};
  }

  &:active {
    border: 1px solid ${({ theme }) => theme.colors.moodyBlue};
    background-color: ${({ theme }) => theme.colors.linkWater};
  }
`;
