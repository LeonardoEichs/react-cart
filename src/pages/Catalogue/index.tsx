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
  BuyLink,
  LikeLink,
} from "./styles";

function Catalogue() {
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [products, setProducts] = useState<IProduct[]>([]);
  const [likedProducts, setLikedProducts] = useState<IProduct[]>([]);
  const [cartProducts, setCartProducts] = useState<IProduct[]>([]);

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
                  <BuyLink
                    onClick={() => {
                      if (cartProducts.find((p) => p.id === product.id)) {
                        const copyCartProducts = [...cartProducts];
                        const removeIndex = cartProducts
                          .map((p) => p.id)
                          .indexOf(product.id);
                        copyCartProducts.splice(removeIndex, 1);
                        setCartProducts(copyCartProducts);
                      } else {
                        setCartProducts([...cartProducts, product]);
                      }
                    }}
                    className={
                      cartProducts.find((p) => p.id === product.id)
                        ? "onCart"
                        : ""
                    }
                  >
                    Buy
                  </BuyLink>
                  <LikeLink
                    onClick={() => {
                      if (likedProducts.find((lp) => lp.id === product.id)) {
                        const copyLikedProducts = [...likedProducts];
                        const removeIndex = likedProducts
                          .map((lp) => lp.id)
                          .indexOf(product.id);
                        copyLikedProducts.splice(removeIndex, 1);
                        setLikedProducts(copyLikedProducts);
                      } else {
                        setLikedProducts([...likedProducts, product]);
                      }
                    }}
                    className={
                      likedProducts.find((lp) => lp.id === product.id)
                        ? "liked"
                        : ""
                    }
                  >
                    Like
                  </LikeLink>
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
