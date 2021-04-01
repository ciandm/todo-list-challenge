import styled, { css } from 'styled-components';
import { Body } from '../../../theme/typography';

export const Wrapper = styled.button`
  align-items: center;
  cursor: pointer;
  display: flex;
  &:hover svg {
    fill: ${({ theme }) => theme.colors.white};
  }
`;

export const HiddenCheckbox = styled.input.attrs({
  hidden: true,
  type: 'checkbox',
})`
  border: 0;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  pointer-events: none;
  white-space: nowrap;
  width: 1px;
`;

export const Checkbox = styled.div`
  align-items: center;
  display: flex;
  background-color: ${({ theme, checked }) =>
    checked
      ? theme.colors.moodyBlue
      : theme.darkMode
      ? theme.colors.bayOfMany
      : theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.moodyBlue};
  border-radius: 4px;
  height: 16px;
  justify-content: center;
  transition: all 150ms;
  width: 16px;

  ${Wrapper}:focus > & svg {
    fill: ${({ theme }) => theme.colors.white};
  }

  & svg {
    height: 1.2rem;
    fill: none;
    width: 1.2rem;
    z-index: 1000;
  }

  ${({ checked }) =>
    checked &&
    css`
      & svg {
        fill: ${({ theme }) => theme.colors.white};
      }
    `}
`;

export const Label = styled.label`
  ${Body};
  color: ${({ theme }) =>
    theme.darkMode ? theme.colors.white : theme.colors.bayOfMany};
  cursor: inherit;
  margin-left: 1.2rem;
  text-transform: capitalize;
`;
