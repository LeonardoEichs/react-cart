import styled from "styled-components";

interface ImgContainerProps {
  src: string;
  height: number;
  width: number;
}

export const ImgContainer = styled.div<ImgContainerProps>`
  height: ${(props) => props.height}px;
  width: ${(props) => props.width}px;
  background-clip: padding-box;
  background-size: cover;
  background-position: center center;
  background-image: url(${(props) => props.src});
`;

export const RoundImageContainer = styled(ImgContainer)`
  border-radius: 50%;
  height: ${(props) => props.height}px;
  width: ${(props) => props.width}px;
  background-size: contain;
  background-repeat: no-repeat;
`;
