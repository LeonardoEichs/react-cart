import { ReactNode } from "react";

import { StyledButton, PrimaryButtonStyle } from "./styles";

type Props = {
  target?: string;
  href?: string;
  to?: string;
  children: ReactNode;
  disabled?: boolean;
  isLoading?: boolean;
  onClick?: any;
  className?: string;
  size?: "small";
  [key: string]: any;
};

const ButtonWrapping = (Component: any, props: Props) => {
  const { children, disabled, isLoading, ...rest } = props;
  const button = (
    <Component disabled={disabled || isLoading} {...rest}>
      {children}
    </Component>
  );
  return button;
};

export const DefaultButton = (props: Props) =>
  ButtonWrapping(StyledButton, props);

export const PrimaryButton = (props: Props) =>
  ButtonWrapping(PrimaryButtonStyle, props);
