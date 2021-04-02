import styled from 'styled-components';
import { Body, SmallCaps } from '../../theme/typography';

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
  ${Body};
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
    opacity: 0.4;
  }

  &:hover,
  &:focus {
    border: 1px solid ${({ theme }) => theme.colors.moodyBlue};
    outline: none;
  }

  &[type='date']::-webkit-calendar-picker-indicator {
    filter: ${({ theme }) => (theme.darkMode ? 'invert(100%)' : '')};
  }

  &[type='text'] {
    appearance: none;
  }
`;

export const Error = styled.span`
  color: ${({ theme }) => theme.colors.burntSienna};
  font-size: 1.6rem;
  padding-top: 1.2rem;
`;
