import styled, { css } from 'styled-components';
import { TaskItem } from '../styled';

export const Check = styled.button`
  align-items: center;
  display: flex;
  justify-content: center;
  height: 4.8rem;
  position: relative;
  width: 4.8rem;
  z-index: 100;

  &::before {
    background-color: ${({ checked, theme }) =>
      checked ? theme.colors.mountainMeadow : 'transparent'};
    border: 1px solid
      ${({ checked, theme }) =>
        checked ? theme.colors.mountainMeadow : theme.colors.linkWater};
    border-radius: 4.8rem;
    content: '';
    display: block;
    height: 3.6rem;
    position: absolute;
    width: 3.6rem;
  }

  ${TaskItem}:hover > &::before,
  &:hover::before,
  &:focus::before {
    border: 1px solid ${({ theme }) => theme.colors.mountainMeadow};
  }

  &:hover svg,
  &:focus svg,
  ${TaskItem}:hover > & svg {
    fill: ${({ checked, theme }) =>
      checked ? '' : theme.colors.mountainMeadow};
  }

  & svg {
    height: 2.4rem;
    fill: none;
    width: 2.4rem;
    z-index: 100;
  }

  ${({ checked }) =>
    checked &&
    css`
      & svg {
        fill: ${({ theme }) =>
          theme.darkMode ? theme.colors.bunting : theme.colors.white};
      }
    `}
`;
