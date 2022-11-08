import React, { useState, useEffect } from "react";
import Link from "next/link";
import { BsBagCheckFill } from "react-icons/bs";
import { runConfetti } from "../lib/utils";

import { useStateContext } from "../context/stateContext";

const Success = () => {
  const { settotalPrice, setCartItems, settotalQuantities } = useStateContext();
  useEffect(() => {
    localStorage.clear();
    settotalPrice(0);
    setCartItems([]);
    settotalQuantities(0);
    runConfetti();
  }, []);

  return (
    <div className="success-wrapper">
      <div className="success">
        <p className="icon">
          <BsBagCheckFill />
        </p>
        <h2>Thank you for your order!!</h2>
        <p className="email-msg">Check your email inbox for the receipt</p>
        <p className="description">
          If you have any question, please email
          <a className="email" href="mailto:hritik1511@gmail.com">
            hritik1511@gmail.com
          </a>
        </p>
        <Link href="/">
          <button type="button" width="300px" className="btn">
            Continue Shopping
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Success;
