import styled from "styled-components";

export const Background = styled.div`
  height: 100vh;
  background: var(--black-50);
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;

  & > img {
    margin: -6rem 0 -3rem;
    width: 100%;
    height: auto;
    max-height: 50%;
  }
`;

export const NotFoundText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 8rem;
    color: var(--primary-500);
  }

  h2 {
    font-size: 2rem;
    color: var(--primary-500);
  }
`;
