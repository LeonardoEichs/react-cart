import { RoundImageContainer } from "components/Image/styles";

import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 1rem 1rem;
  overflow-y: auto;
  h1 {
    float: right;
    font-weight: 800;
    font-size: 1.25rem;
  }
`;
export const ItemRow = styled.div`
  border-radius: 0.25rem;
  padding: 0.5rem 0.25rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export const Products = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  ${ItemRow}:nth-child(even) {
    background-color: var(--gray-100);
  }
`;
export const ProductText = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 60%;

  & > h2,
  h3 {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
  & > h2 {
    font-size: 0.75rem;
  }
`;
export const ProductInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  max-width: 60%;

  & > ${RoundImageContainer} {
    margin-right: 1rem;
  }
`;
export const ProductCount = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 1rem;
  h4 {
    padding: 0 1rem;
  }
  button {
    padding: 0.5rem;
  }
`;
