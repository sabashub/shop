import React from "react";
import { CartContext } from "../../context/CartContext";
import { useContext } from "react";
import {
  CheckoutContainer,
  CheckoutHeader,
  Total,
} from "./Checkout.styles.jsx";
import CheckoutItem from "../../components/checkout-item/Checkout-Item";
import PaymentForm from "../../components/payment-form/PaymentForm";

const Checkout = () => {
  const { cartItems, cartTotal } = useContext(CartContext);

  return (
    <CheckoutContainer>
      <CheckoutHeader>
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
      </CheckoutHeader>

      {cartItems?.map((item) => {
        return <CheckoutItem key={item.id} cartItem={item} />;
      })}
      <Total>Total: ${cartTotal}</Total>
      <PaymentForm />
    </CheckoutContainer>
  );
};

export default Checkout;
