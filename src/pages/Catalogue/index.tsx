import Header from "components/Header";
import CartList from "components/CartList";
import { DefaultImage } from "components/Image";

import { useState } from "react";

import {
  Container,
  ItemsList,
  ItemCard,
  ProductInfo,
  CardInfo,
  Buttons,
} from "./styles";

function Catalogue() {
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  return (
    <Container>
      <Header isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen} />
      <CartList isCartOpen={isCartOpen} />
      {!isCartOpen && (
        <ItemsList>
          <ItemCard>
            <DefaultImage
              src="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"
              width={"100%"}
              height={"300px"}
              style={{
                backgroundColor: "var(--white)",
                borderBottom: "1px solid var(--gray-100)",
              }}
            />
            <CardInfo>
              <ProductInfo>
                <h2>Product name</h2>
                <h3>$ 99,99</h3>
              </ProductInfo>
              <Buttons>
                <h3>Add to Cart</h3>
                <h3>Like</h3>
              </Buttons>
            </CardInfo>
          </ItemCard>
        </ItemsList>
      )}
    </Container>
  );
}

export default Catalogue;
