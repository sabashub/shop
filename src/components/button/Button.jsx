import React from "react";
import {
  BaseButton,
  GoogleSignInButton,
  InvertedButton,
} from "./Button.styles.jsx";

export const Button_type_classes = {
  base: BaseButton,
  google: "google-sign-in",
  inverted: "inverted",
};

const getButton = (buttonType = Button_type_classes.base) =>
  ({
    [Button_type_classes.base]: BaseButton,
    [Button_type_classes.google]: GoogleSignInButton,
    [Button_type_classes.inverted]: InvertedButton,
  }[buttonType]);

const Button = ({ children, buttonType, isLoading, ...otherProps }) => {
  const CustomButton = getButton(buttonType);
  return (
    <CustomButton disabled={isLoading} {...otherProps}>
      {children}
    </CustomButton>
  );
};

export default Button;
