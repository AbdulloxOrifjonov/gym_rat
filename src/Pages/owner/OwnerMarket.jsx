import React, { useEffect } from "react";
import ProductCard from "../../components/Card";
import CartQuantity from "../../components/Cart/CartQuantity";
import { useNavigate } from "react-router-dom";

function Market() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col">
      <CartQuantity />
      <h1>Market</h1>
      <ProductCard />
    </div>
  );
}

export default Market;
