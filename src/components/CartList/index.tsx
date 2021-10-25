import { IProduct } from "ts/interfaces";

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

interface CartListProps {
  isCartOpen: boolean;
  cartProducts: IProduct[];
}

function CartList({ isCartOpen, cartProducts }: CartListProps) {
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
              <DefaultButton>-</DefaultButton>
              <h4>9999</h4>
              <DefaultButton>+</DefaultButton>
            </ProductCount>
          </ItemRow>
        ))}
      </Products>

      {cartProducts.length > 0 && (
        <h1 style={{ width: "97%", textAlign: "right", paddingBottom: "1rem" }}>
          Total: {cartProducts.map((p) => p.price).reduce((a, b) => a + b)}
        </h1>
      )}
      {cartProducts.length > 0 && (
        <PrimaryButton>Proceed to checkout</PrimaryButton>
      )}
    </Container>
  );
}

export default CartList;
