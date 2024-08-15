import React from "react";
import ProductCard from "../../components/Card";
import CartQuantity from "../../components/Cart/CartQuantity";

function Market() {
  return (
    <div className="flex flex-col">
      <CartQuantity/>
      <h1>Market</h1>
      <ProductCard />
    </div>
  );
}

export default Market;
