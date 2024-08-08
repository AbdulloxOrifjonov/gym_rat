import React from "react";
import IconCart from "../../icons/IconCart";
import { Link } from "react-router-dom";

function CartQuantity() {
  return (
    <Link className="relative self-end mr-5 mt-3">
      <IconCart />
      <h3 className="font-semibold">Cart</h3>
      <span className="absolute top-[-15px] right-0 font-semibold">0</span>
    </Link>
  );
}

export default CartQuantity;
