import React from "react";
import {
  CheckoutItemContaier,
  ImageContainer,
  RemoveButton,
} from "./Checkout-Item.styles.jsx";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;

  const { clearItemFromCart, addItemToCart, removeItemToCart } =
    useContext(CartContext);

  const clearItemHandler = () => {
    clearItemFromCart(cartItem);
  };

  const addItemHandler = () => {
    addItemToCart(cartItem);
  };

  const removeItemHandler = () => {
    removeItemToCart(cartItem);
  };

  return (
    <CheckoutItemContaier>
      <ImageContainer>
        <img src={imageUrl} alt="image" />
      </ImageContainer>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={removeItemHandler}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={addItemHandler}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <RemoveButton onClick={clearItemHandler}>&#10005;</RemoveButton>
    </CheckoutItemContaier>
  );
};

export default CheckoutItem;
