import { Background, Container, NotFoundText } from "./styles";
import NotFoundLogo from "assets/404.svg";

const NotFoundPage = () => {
  return (
    <Background>
      <Container>
        <img src={NotFoundLogo} alt="Not Found Logo" />
        <NotFoundText>
          <h1>404</h1>
          <h2>Not Found</h2>
        </NotFoundText>
      </Container>
    </Background>
  );
};

export default NotFoundPage;
