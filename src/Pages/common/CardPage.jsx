/** @format */

import React from "react";
import { useParams } from "react-router-dom";

function CardPage() {
  const products = [
    {
      name: "iPhone 14 pro",
      cost: 800,
      img: "http://bozor.lc:8080/api/files/v1/product-images/download?image=2024/08/06/zOQ5JgI_10.jpeg",
      description: "Bu mahsulotni tavsiya qilamiz!!!",
      id: 0,
      checked: false,
    },
    {
      name: "iPhone 13 pro",
      cost: 700,
      img: "http://bozor.lc:8080/api/files/v1/product-images/download?image=2024/08/06/zOQ5JgI_10.jpeg",
      description: "Bu mahsulotni tavsiya qilamiz!!!",
      id: 1,
      checked: false,
    },
    {
      name: "iPhone 12 pro",
      cost: 500,
      img: "http://bozor.lc:8080/api/files/v1/product-images/download?image=2024/08/06/zOQ5JgI_10.jpeg",
      description: "Bu mahsulotni tavsiya qilamiz!!!",
      id: 2,
      checked: false,
    },
    {
      name: "Protein 1",
      cost: 100,
      img: "https://images.uzum.uz/cq280pgsarnfdo9a8200/original.jpg",
      description: "Bu mahsulotni tavsiya qilamiz!!!",
      id: 3,
      checked: false,
    },
    {
      name: "Protein 2",
      cost: 120,
      img: "https://images.uzum.uz/cq280pgsarnfdo9a8200/original.jpg",
      description: "Bu mahsulotni tavsiya qilamiz!!!",
      id: 4,
      checked: false,
    },
  ];

  const cardId = useParams();
  // eslint-disable-next-line
  const filteredCard = products?.filter((prod) => cardId.id == prod.id);

  console.dir(filteredCard);

  console.log(filteredCard);
  console.log(products);
  console.log(cardId);

  return (
    <div>
      {filteredCard?.map((card) => (
        <h2>{card.name}</h2>
      ))}
    </div>
  );
}

export default CardPage;
