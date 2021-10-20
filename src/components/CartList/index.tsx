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
}

function CartList({ isCartOpen }: CartListProps) {
  if (!isCartOpen) return null;
  return (
    <Container>
      <h1>Cart</h1>
      <Products>
        <ItemRow>
          <ProductInfo>
            <RoundedImage src="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg" />
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
            <RoundedImage src="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg" />
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
            <RoundedImage src="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg" />
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
            <RoundedImage src="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg" />
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
      <PrimaryButton>Proceed to checkout</PrimaryButton>
    </Container>
  );
}

export default CartList;
