/** @format */

import { Button } from "flowbite-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import CardPage from "../Pages/common/CardPage";

export default function ProductCard() {
  // eslint-disable-next-line
  const [checkAddingCart, setCheckAddingCart] = useState({
    check: false,
    checkedId: null,
  });
  const [checkedProducts, setCheckedProducts] = useState([]);

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

  const handleAddToCart = (product) => {
    setCheckAddingCart({ check: true, checkedId: product.id });
    setCheckedProducts((prev) => {
      if (!prev.some((p) => p.id === product.id)) {
        return [...prev, product];
      }
      return prev;
    });
  };

  return (
    <div className="flex gap-2 flex-wrap justify-center">
      {/* <CardPage product={products} />; */}
      {products.map((product) => (
        <Link key={product.id} to={`/owner/product/${product.id}`}>
          <div className="card h-[250px] w-60 p-3 rounded-lg flex flex-col justify-between">
            <img
              className="h-[100px] w-fit bg-center self-center"
              src={product.img}
              alt={product.name}
            />
            <div>
              <h3>{product.name}</h3>
              <p>{product.description}</p>
            </div>
            <Button
              onClick={(e) => {
                e.preventDefault(); // Prevents the Link from navigating on button click
                handleAddToCart(product);
              }}
            >
              {checkedProducts.some((p) => p.id === product.id) ? "Go to cart" : "Add to cart"}
            </Button>
          </div>
        </Link>
      ))}
    </div>
  );
}