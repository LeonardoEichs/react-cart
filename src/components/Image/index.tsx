import { ImgContainer, RoundImageContainer } from "./styles";

interface ImageProps {
  src: string;
  rounded?: boolean;
  [key: string]: any;
}

function Image({ src, rounded, ...rest }: ImageProps) {
  if (rounded)
    return <RoundImageContainer src={src} height={60} width={60} {...rest} />;
  return <ImgContainer src={src} height={50} width={50} {...rest} />;
}

export default Image;
