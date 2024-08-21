/** @format */

import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Cart() {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("token_owner")) {
      navigate("/");
    }
  }, [navigate]);
  return (
    <div>
      <h1>Cart page</h1>
    </div>
  );
}

export default Cart;
