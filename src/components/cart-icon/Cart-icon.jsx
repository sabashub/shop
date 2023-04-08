import React from "react";
import shoppingIcon from "../../assets/shopping-bag.svg";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import {
  CartIconContainer,
  ItemCount,
  ShoppingIcon,
} from "./Cart-icon.styles.jsx";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);
  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);
  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <ShoppingIcon src={shoppingIcon} />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
