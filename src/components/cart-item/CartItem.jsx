import React from "react";
import {
  CartItemContainer,
  Image,
  ItemDetails,
  Name,
} from "./CartItem.styles.jsx";

const CartItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <CartItemContainer>
      <Image src={imageUrl} />
      <ItemDetails>
        <Name className="name">{name}</Name>
        <span className="price">
          {quantity} x ${price}
        </span>
      </ItemDetails>
    </CartItemContainer>
  );
};

export default CartItem;
