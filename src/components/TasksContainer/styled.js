import styled from 'styled-components';

export const Container = styled.main`
  display: grid;
  gap: 3.2rem;
  grid-template-rows: max-content max-content;
  margin: 0 auto;
  max-width: 60rem;
  padding: 3.2rem 1.6rem;
  width: 100%;

  @media ${({ theme }) => theme.mediaQueries.tablet} {
    padding: 4.8rem 0;
  }

  @media ${({ theme }) => theme.mediaQueries.desktop} {
    padding: 6rem 0;
  }
`;

export const TasksWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
