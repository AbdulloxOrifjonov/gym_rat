import React from "react";
import ProductCard from "../../components/Card";
import IconCart from "../../icons/IconCart";

function Market() {
  return (
    <div>
      <div className="relative">
        <IconCart/>
        {/* <p className="absolute top-[-15px] left-0">0</p> */}
      </div>
      <h1>Market</h1>
      <ProductCard />
    </div>
  );
}

export default Market;
