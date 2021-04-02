import styled from 'styled-components';
import { SmallCaps } from '../../../theme/typography';

export const Footer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Stats = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding-bottom: 16px;
  width: 100%;

  @media ${({ theme }) => theme.mediaQueries.tablet} {
    justify-content: center;
  }
`;

export const Stat = styled.p`
  ${SmallCaps};
  color: ${({ theme }) => theme.colors.moodyBlue};

  & + & {
    margin-left: 4.8rem;
  }
`;

export const RemoveCompleted = styled.button`
  ${SmallCaps};
  color: ${({ theme }) => theme.colors.moodyBlue};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : '')};
  opacity: ${({ disabled }) => (disabled ? '0.5' : 1)};
  text-decoration: underline;

  &:hover:not(:disabled),
  &:focus:not(:disabled) {
    color: ${({ theme }) =>
      theme.darkMode ? theme.colors.white : theme.colors.haiti};
  }
`;
