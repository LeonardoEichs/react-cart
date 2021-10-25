import { ICartProduct } from "ts/interfaces";

import { RoundedImage } from "components/Image";
import { DefaultButton, PrimaryButton } from "components/Button";
import {
  Container,
  Products,
  ItemRow,
  ProductText,
  ProductInfo,
  ProductCount,
} from "./styles";
import React from "react";

interface CartListProps {
  isCartOpen: boolean;
  cartProducts: ICartProduct[];
  setCartProducts: React.Dispatch<React.SetStateAction<ICartProduct[]>>;
}

function CartList({
  isCartOpen,
  cartProducts,
  setCartProducts,
}: CartListProps) {
  if (!isCartOpen) return null;
  return (
    <Container>
      <h1>Cart</h1>
      <Products>
        {cartProducts.map((product) => (
          <ItemRow key={product.id}>
            <ProductInfo>
              <RoundedImage src={product.image} />
              <ProductText>
                <h2>{product.title}</h2>
                <h3>${product.price}</h3>
              </ProductText>
            </ProductInfo>
            <ProductCount>
              <DefaultButton
                onClick={() => {
                  const copyCartProducts = [...cartProducts];
                  const removeIndex = cartProducts
                    .map((p) => p.id)
                    .indexOf(product.id);
                  const newAmount = cartProducts[removeIndex].amount - 1;
                  if (newAmount <= 0) {
                    copyCartProducts.splice(removeIndex, 1);
                  } else {
                    const newProduct = {
                      ...cartProducts[removeIndex],
                      amount: newAmount,
                    };
                    copyCartProducts.splice(removeIndex, 1, newProduct);
                  }
                  setCartProducts(copyCartProducts);
                }}
              >
                -
              </DefaultButton>
              <h4>{product.amount}</h4>
              <DefaultButton
                onClick={() => {
                  const copyCartProducts = [...cartProducts];
                  const removeIndex = cartProducts
                    .map((p) => p.id)
                    .indexOf(product.id);
                  const newProduct = {
                    ...cartProducts[removeIndex],
                    amount: cartProducts[removeIndex].amount + 1,
                  };
                  copyCartProducts.splice(removeIndex, 1, newProduct);
                  setCartProducts(copyCartProducts);
                }}
              >
                +
              </DefaultButton>
            </ProductCount>
          </ItemRow>
        ))}
      </Products>

      {cartProducts.length > 0 && (
        <h1 style={{ width: "97%", textAlign: "right", paddingBottom: "1rem" }}>
          Total: $
          {cartProducts
            .reduce((acc, p) => p.price * p.amount + acc, 0)
            .toFixed(2)}
        </h1>
      )}
      {cartProducts.length > 0 && (
        <PrimaryButton>Proceed to checkout</PrimaryButton>
      )}
    </Container>
  );
}

export default CartList;
