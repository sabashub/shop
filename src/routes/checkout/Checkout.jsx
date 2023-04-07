import React from "react";
import { CartContext } from "../../context/CartContext";
import { useContext } from "react";
import "./Checkout.scss";
import CheckoutItem from "../../components/checkout-item/Checkout-Item";
const Checkout = () => {
  const { cartItems, cartTotal } = useContext(CartContext);

  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>

      {cartItems?.map((item) => {
        return <CheckoutItem key={item.id} cartItem={item} />;
      })}
      <div className="total">Total: ${cartTotal}</div>
    </div>
  );
};

export default Checkout;
