import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CartQuantity from "../../components/Cart/CartQuantity";
import { Button } from "flowbite-react";

function OwnerAddProduct() {
  const [listProducts, setListProduct] = useState(null);
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("token_owner")) {
      navigate("/");
    } else {
      const getListProduct = async () => {
        try {
          const response = await axios.get("https://gymrat.uz/api/v1/gym/all", {
            headers: {
              Authorization: `${localStorage.getItem("token_owner")}`,
              "Content-Type": "application/json",
            },
          });
          setListProduct(response.data.data);
        } catch (error) {
          console.log(error.response.data);
        }
      };
      getListProduct();
    }
  }, [navigate]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item._id === product._id);
      if (existingProduct) {
        return prevCart.map((item) =>
          item._id === product._id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  return (
    <div>
      <div className="flex">
        <CartQuantity cart={cart} />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-w gap-4">
        {listProducts ? (
          listProducts?.map((listProduct) => (
            <div key={listProduct._id}>
              <div className="flex flex-col gap-4 p-4 bg-white rounded-xl shadow-md">
                <div className="flex items-center">
                  <img
                    src={`https://gymrat.uz${listProduct.logo}`}
                    alt={listProduct.name}
                    className="w-16 h-16 object-cover rounded-full"
                  />
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold">
                      {listProduct.name}
                    </h3>
                    <p className="text-gray-500">{listProduct.address}</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button onClick={() => addToCart(listProduct)}>
                    ADD
                  </Button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div>
            <h1 className="text-3xl">Loading . . .</h1>
          </div>
        )}
      </div>
    </div>
  );
}

export default OwnerAddProduct;
