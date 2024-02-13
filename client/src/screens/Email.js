import React, { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import CheckoutSteps from "../components/CheckoutSteps";
import { Store } from "../Store";

export default function Email() {
  const navigate = useNavigate();
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const {
    cart: { shippingAddress },
  } = state;

  const [customerEmail, setCustomerEmail] = useState("");

  useEffect(() => {
    if (!shippingAddress.address) {
      navigate("/shipping");
    }
  }, [shippingAddress, navigate]);

  const submitHandler = (e) => {
    e.preventDefault();
    const items = state.cart.cartItems;
    const total = state.cart.cartItems.reduce(
      (acc, item) => acc + item.quantity * item.price,
      0
    );
    const order = { items, total, customerEmail };
    sendOrderToEmail(order);
    navigate("/placeorder");
  };

  const sendOrderToEmail = (order) => {
    // Perform an HTTP request to your backend to send the order to email
    fetch("/submitOrder", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((response) => {
        if (response.ok) {
          console.log("Order submitted successfully.");
        } else {
          console.error("Failed to submit order.");
        }
      })
      .catch((error) => {
        console.error("Error submitting order:", error);
      });
  };

  return (
    <div>
      <CheckoutSteps step1 step2 step3 step4></CheckoutSteps>
      <div className="container small-container">
        <Helmet>
          <title>Email for sending your Orders</title>
        </Helmet>
        <h1 className="my-3">Enter your Email to send your Order</h1>
        <Form onSubmit={submitHandler}>
          <div className="mb-3">
            <Form.Label>Email:</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter your email"
              value={customerEmail}
              onChange={(e) => setCustomerEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <Button type="submit">Continue</Button>
          </div>
        </Form>
      </div>
    </div>
  );
}
