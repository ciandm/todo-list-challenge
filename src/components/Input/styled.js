import styled from 'styled-components';
import { SmallCaps } from '../../theme/typography';

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  ${SmallCaps};
  color: ${({ theme }) =>
    theme.darkMode ? theme.colors.white : theme.colors.bayOfMany};
  padding-bottom: 1.2rem;
`;

export const Input = styled.input.attrs(({ type }) => ({
  type: type || 'text',
}))`
  background-color: ${({ theme }) =>
    theme.darkMode ? theme.colors.haiti : theme.colors.white};
  border: 1px solid
    ${({ theme }) =>
      theme.darkMode ? theme.colors.haiti : theme.colors.linkWater};
  border-radius: 1.2rem;
  color: ${({ theme }) =>
    theme.darkMode ? theme.colors.white : theme.colors.bayOfMany};
  font-family: inherit;
  padding: 1.2rem 1.6rem;

  &::placeholder {
    color: ${({ theme }) =>
      theme.darkMode ? theme.colors.linkWater : theme.colors.moodyBlue};
    opacity: ${({ theme }) => (theme.darkMode ? '0.5' : '0.7')};
  }

  &:hover,
  &:focus {
    border: 1px solid ${({ theme }) => theme.colors.moodyBlue};
    outline: none;
  }
`;
