import {
  CardElement,
  useStripe,
  useElements,
  CartElement,
} from "@stripe/react-stripe-js";
import { useState } from "react";
import { useSelector } from "react-redux";

import Button, { Button_type_classes } from "../button/Button";
import React from "react";
import { PaymentFormContainer, FormContainer } from "./PaymentForm.styles";
const PaymentForm = () => {
  const stripe = useStripe();

  const elements = useElements();
  const [isProcessingPayment, setIsProcessingPayyment] = useState(false);

  const paymentHandler = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const response = await fetch("/.netlify/functions/create-payment-intent", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount: 10000 }),
    }).then((res) => res.json());

    const {
      paymentIntent: { client_secret },
    } = response.paymentIntent.client_secret;

    console.log(client_secret);

    const paymentResult = await stripe.confirmCardPayment(client_secret, {
      payment_method: {
        cart: elements.getElement(CardElement),
        billing_details: {
          name: "userName",
        },
      },
    });
    setIsProcessingPayyment(true);
    if (paymentResult.error) {
      alert(paymentResult.error);
    } else {
      if (paymentResult.paymentIntent.status === "succeeded") {
        alert("Payment Successful");
      }
    }
  };

  return (
    <PaymentFormContainer>
      <FormContainer onSubmit={paymentHandler}>
        <h2>Credit card payment:</h2>
        <CardElement />
        <Button
          disabled={isProcessingPayment}
          buttonType={Button_type_classes.inverted}
        >
          pay now
        </Button>
      </FormContainer>
    </PaymentFormContainer>
  );
};

export default PaymentForm;
