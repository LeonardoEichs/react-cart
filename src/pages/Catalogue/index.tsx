import Header from "components/Header";
import CartList from "components/CartList";

import { ReactNode, useState } from "react";

import { Container } from "./styles";

interface CatalogueProps {
  children: ReactNode;
}

function Catalogue({ children }: CatalogueProps) {
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  return (
    <Container>
      <Header isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen} />
      <CartList isCartOpen={isCartOpen} />
      {children}
    </Container>
  );
}

export default Catalogue;
