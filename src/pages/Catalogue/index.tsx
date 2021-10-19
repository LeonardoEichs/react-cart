import Header from "components/Header";
import CartList from "components/CartList";

import { ReactNode } from "react";

import { Container } from "./styles";

interface CatalogueProps {
  children: ReactNode;
}

function Catalogue({ children }: CatalogueProps) {
  return (
    <Container>
      <Header />
      <CartList />
      {children}
    </Container>
  );
}

export default Catalogue;
