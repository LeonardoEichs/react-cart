import styled from "styled-components";

export const StyledButton = styled.button`
  background-color: transparent;
  background-image: none;
  border: none;
  border-radius: 0.25rem;
  padding: 0.4rem 1rem;
  cursor: pointer;
  width: 95%;

  &:hover {
    transform: scale(1.1);
  }
`;

export const PrimaryButtonStyle = styled(StyledButton)`
  color: var(--white);
  background-color: var(--black-50);
`;
