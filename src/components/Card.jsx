import { Button } from "flowbite-react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function ProductCard() {
  const navigate = useNavigate();

  return (
    <div className="flex gap-4">
      <Link>
        <div className="card h-[250px] w-60 p-3 rounded-lg flex flex-col justify-between ">
          <img
            className="h-[100px] w-fit bg-center self-center"
            src="https://images.uzum.uz/cq280pgsarnfdo9a8200/original.jpg"
            alt="Protein"
          />
          <div>
            <h3>Protein en zuri</h3>
            <p>Buqa bogin kesa ich shuni toy</p>
          </div>
          <Button onClick={() => navigate("/owner/cart")}>Add to Cart</Button>
        </div>
       </Link>
      <div className="card h-[250px] w-60 p-3 rounded-lg flex flex-col justify-between ">
        <img
          className="h-[100px] w-fit bg-center self-center"
          src="http://bozor.lc:8080/api/files/v1/product-images/download?image=2024/08/06/zOQ5JgI_10.jpeg"
          alt="Protein"
        />
        <div>
          <h3>Protein en zuri</h3>
          <p>Buqa bogin kesa ich shuni toy</p>
        </div>
        <Button onClick={() => navigate("/owner/cart")}>Add to Cart</Button>
      </div>
    </div>
  );
}
