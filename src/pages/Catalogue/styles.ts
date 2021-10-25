import styled from "styled-components";

interface ILink {
  onClick?: () => void;
  [key: string]: any;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
export const ItemsList = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  padding: 1em;
  grid-row-gap: 1rem;
`;
export const ItemCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  border-radius: 0.5rem;
  width: 100%;

  & > *:not(:last-child) {
    padding: 0 0 1rem;
  }
`;
export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  padding: 1rem 0 2rem;
  width: 70%;
  & > p {
    padding-bottom: 0.75rem;
  }
`;

export const CardInfo = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0 2rem;
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: right;
  text-align: right;
  justify-content: center;
  padding: 1rem 0 2rem;
`;

export const BuyLink = styled.h3<ILink>`
  cursor: pointer;

  &.onCart {
    color: var(--third);
  }

  &:hover {
    transform: scale(1.1);
  }
`;

export const LikeLink = styled.h4<ILink>`
  cursor: pointer;

  &.liked {
    color: var(--like);
  }

  &:hover {
    transform: scale(1.1);
  }
`;
