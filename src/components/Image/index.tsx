import React from "react";
import { ImgContainer, RoundImageContainer } from "./styles";

interface ImageProps {
  src: string;
  rounded?: boolean;
  [key: string]: any;
}

const WrapperImage = (Component: any, props: ImageProps) => {
  return <Component {...props} />;
};

export const DefaultImage = (props: ImageProps) =>
  WrapperImage(ImgContainer, props);
export const RoundedImage = (props: ImageProps) =>
  WrapperImage(RoundImageContainer, props);
