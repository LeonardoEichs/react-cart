import styled from "styled-components";

interface IconProps {
  checked: boolean;
}

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid var(--gray-500);
  padding: 0.5rem 1.25rem;

  & > h1 {
    font-weight: 800;
  }

  & > i {
    font-size: 1.75rem;
  }
`;

export const Icon = styled.i<IconProps>`
  background-color: ${(props) => (props.checked ? "var(--gray-200)" : "none")};
  padding: 0.5rem 0.75rem;
  border-radius: 20rem;
`;
