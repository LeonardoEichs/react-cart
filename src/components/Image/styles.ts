import styled from "styled-components";

interface ImgContainerProps {
  src: string;
  height: number;
  width: number;
}

export const DefaultImageStyle = styled.div<ImgContainerProps>`
  height: ${({ height }) => (height ? height : "60px")};
  width: ${({ width }) => (width ? width : "60px")};
  background-image: url(${(props) => props.src});
  background-size: contain;
  background-repeat: no-repeat;
  background-clip: padding-box;
  background-position: center center;
`;

export const ImgContainer = styled(DefaultImageStyle)``;

export const RoundImageContainer = styled(DefaultImageStyle)`
  border-radius: 50%;
`;
