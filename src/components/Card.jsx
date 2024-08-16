import { Button } from "flowbite-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import CardPage from "../Pages/common/CardPage";
import Cart from "../Pages/common/Cart";

export default function ProductCard() {
  const [checkedProducts, setCheckedProducts] = useState([]);
  const navigate = useNavigate(); // Hook to navigate programmatically

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
    {
      name: "Protein 3",
      cost: 160,
      img: "https://images.uzum.uz/cq280pgsarnfdo9a8200/original.jpg",
      description: "Bu mahsulotni tavsiya qilamiz!!!",
      id: 5,
      checked: false,
    },
  ];

  const handleButtonClick = (product) => {
    if (checkedProducts.some((p) => p.id === product.id)) {
      // If product is already in the cart, navigate to the cart page
      navigate("/owner/cart");
    } else {
      // Otherwise, add the product to the cart
      setCheckedProducts((prev) => [...prev, product]);
    }
  };

  return (
    <div className="flex gap-2 flex-wrap justify-center">
      {products.map((product) => (
        <div key={product.id} className="card h-[250px] w-[200px] p-3 rounded-lg flex flex-col justify-between">
          <Link to={`/owner/product/${product.id}`}>
            <img
              className="h-[100px] w-fit bg-center self-center"
              src={product.img}
              alt={product.name}
            />
            <div>
              <h3>{product.name}</h3>
              <p>{product.cost}$</p>
            </div>
          </Link>
          <Button
            onClick={(e) => {
              e.preventDefault(); // Prevent Link navigation when adding to cart
              handleButtonClick(product);
            }}
          >
            {checkedProducts.some((p) => p.id === product.id)
              ? "Go to cart"
              : "Add to cart"}
          </Button>
        </div>
      ))}
      <CardPage products={products} />
      <div className="hidden"><Cart  products={checkedProducts}/></div>
    </div>
  );
}
