import React from "react";
import Image from "components/Image";
import { DefaultButton } from "components/Button";
import {
  Container,
  Products,
  ItemRow,
  ProductText,
  ProductInfo,
  ProductCount,
} from "./styles";

interface CartListProps {
  isCartOpen: boolean;
}

function CartList({ isCartOpen }: CartListProps) {
  if (!isCartOpen) return null;
  return (
    <Container>
      <h1>Cart</h1>
      <Products>
        <ItemRow>
          <ProductInfo>
            <Image
              rounded
              src="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"
            />
            <ProductText>
              <h2>Product nameProduct nameProduct name</h2>
              <h3>$ 99,99</h3>
            </ProductText>
          </ProductInfo>
          <ProductCount>
            <DefaultButton>-</DefaultButton>
            <h4>9999</h4>
            <DefaultButton>+</DefaultButton>
          </ProductCount>
        </ItemRow>
        <ItemRow>
          <ProductInfo>
            <Image
              rounded
              src="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"
            />
            <ProductText>
              <h2>Product nameProduct nameProduct name</h2>
              <h3>$ 99,99</h3>
            </ProductText>
          </ProductInfo>
          <ProductCount>
            <DefaultButton>-</DefaultButton>
            <h4>9999</h4>
            <DefaultButton>+</DefaultButton>
          </ProductCount>
        </ItemRow>
        <ItemRow>
          <ProductInfo>
            <Image
              rounded
              src="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"
            />
            <ProductText>
              <h2>Product nameProduct nameProduct name</h2>
              <h3>$ 99,99</h3>
            </ProductText>
          </ProductInfo>
          <ProductCount>
            <DefaultButton>-</DefaultButton>
            <h4>9999</h4>
            <DefaultButton>+</DefaultButton>
          </ProductCount>
        </ItemRow>
        <ItemRow>
          <ProductInfo>
            <Image
              rounded
              src="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"
            />
            <ProductText>
              <h2>Product nameProduct nameProduct name</h2>
              <h3>$ 99,99</h3>
            </ProductText>
          </ProductInfo>
          <ProductCount>
            <DefaultButton>-</DefaultButton>
            <h4>9999</h4>
            <DefaultButton>+</DefaultButton>
          </ProductCount>
        </ItemRow>
      </Products>
    </Container>
  );
}

export default CartList;
