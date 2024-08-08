/** @format */

import React from "react";
import { useParams } from "react-router-dom";

function CardPage({ products }) {
  console.log(products);
  const cardId = useParams();
  const filteredCard = products?.filter((prod) => cardId.id === prod.id);

  console.log(cardId);
  console.log(filteredCard);

  return (
    <div>
      {filteredCard?.map((card) => (
        <h2>{card.name}</h2>
      ))}
    </div>
  );
}

export default CardPage;
