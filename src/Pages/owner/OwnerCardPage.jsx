/** @format */

import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

function CardPage() {
  const navigate = useNavigate();

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

  const { id } = useParams();
  const cardId = Number(id);

  const filteredProduct = products?.filter((product) => cardId === product.id);
  return (
    <>
      {filteredProduct?.map((product) => (
        <div>
          <h2>{product.name}</h2>
          <h2>{product.cost}</h2>
        </div>
      ))}
    </>
  );
}

export default CardPage;
