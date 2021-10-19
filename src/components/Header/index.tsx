import { Container, Icon } from "./styles";

interface HeaderProps {
  isCartOpen: boolean;
  setIsCartOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function Header({ isCartOpen, setIsCartOpen }: HeaderProps) {
  return (
    <Container>
      <h1>markt</h1>
      <Icon
        checked={isCartOpen}
        onClick={() => setIsCartOpen((prevState: boolean) => !prevState)}
        className="fa fa-shopping-cart"
      />
    </Container>
  );
}

export default Header;
