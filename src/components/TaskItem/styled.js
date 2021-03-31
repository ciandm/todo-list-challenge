import styled from 'styled-components';
import { Body, SmallCaps } from '../../theme/typography';

export const TaskItem = styled.div`
  cursor: pointer;
  display: grid;
  gap: 0.8rem;
  grid-template-columns: 4.8rem 1fr 4.8rem;
  padding: 2.4rem 1.6rem;

  &:not(:last-child) {
    border-bottom: 1px solid
      ${({ theme }) =>
        theme.darkMode ? theme.colors.haiti : theme.colors.linkWater};
  }

  &:hover {
    background-color: ${({ theme }) =>
      theme.darkMode ? theme.colors.bunting : theme.colors.iceCold};
  }
`;

export const TaskGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TaskTitle = styled.p`
  ${Body};
  color: ${({ theme }) =>
    theme.darkMode ? theme.colors.white : theme.colors.bayOfMany};
  padding-bottom: 2px;
`;

export const TaskDate = styled.span`
  ${SmallCaps};
  color: ${({ theme }) => theme.colors.moodyBlue};
`;
