import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid var(--gray-200);
  padding: 0.5rem 1.25rem;

  & > h1 {
    font-weight: 800;
  }

  & > i {
    font-size: 1.75rem;
  }
`;
