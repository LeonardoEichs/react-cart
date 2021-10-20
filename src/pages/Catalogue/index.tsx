import Header from "components/Header";
import CartList from "components/CartList";
import { DefaultImage } from "components/Image";

import { IProduct, IFetchProduct } from "ts/interfaces";

import { useState, useEffect } from "react";

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
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    (async () => {
      const fetchData = await fetch("https://fakestoreapi.com/products");
      const dataJSON = await fetchData.json();
      setProducts(
        dataJSON.map((product: IFetchProduct) => {
          return { ...product, rating: product.rating.rate };
        })
      );
    })();
  }, []);

  return (
    <Container>
      <Header isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen} />
      <CartList isCartOpen={isCartOpen} />
      {!isCartOpen && (
        <ItemsList>
          {products.map((product) => (
            <ItemCard>
              <DefaultImage
                src={product.image}
                width={"100%"}
                height={"300px"}
                style={{
                  backgroundColor: "var(--white)",
                  borderBottom: "1px solid var(--gray-100)",
                }}
              />
              <CardInfo>
                <ProductInfo>
                  <p>{product.title}</p>
                  <h3>$ {product.price}</h3>
                </ProductInfo>
                <Buttons>
                  <h3>Buy</h3>
                  <h4>Like</h4>
                </Buttons>
              </CardInfo>
            </ItemCard>
          ))}
        </ItemsList>
      )}
    </Container>
  );
}

export default Catalogue;
