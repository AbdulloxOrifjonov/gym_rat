import React from "react";
import { useParams } from "react-router-dom";

function CardPage({ products }) {
  const productId = useParams();
  console.log(productId);


  const filteredProduct = products?.filter(
    (product) => productId === product.id
  );
  return <>
    {filteredProduct?.map((product) => (
      <div>
        <h2>{product.name}</h2>
        <h2>{product.cost}</h2>
      </div>
    ))}
  </>
}

export default CardPage;
