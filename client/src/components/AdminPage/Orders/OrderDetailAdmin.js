import React, { useState } from "react";
import { Button, Col, Row } from "react-bootstrap";

import "./style.css";

function OrderDetailAdmin() {
  const [color, setColor] = useState("#80CED7");

  const description ="description"
  const props = {
    name: "name",
    price: "3000",
    checkout_url : "#"
  }
    

  return (
    <div className="flex">
        <h1>Order ID: ID</h1>
        <h2>Adult: adluts</h2>
        <h2>children: children</h2>
        <h2>confirmation_code: confirmation_code</h2>
        <h2>Date check_in: date</h2>
        <h3>check_out</h3>
    </div>
  );
}

export default OrderDetailAdmin;
