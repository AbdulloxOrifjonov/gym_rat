import axios from "axios";
import { Label, Select, Tabs, TextInput } from "flowbite-react";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { HiUserCircle } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

const OwnerBarProductCategories = () => {
  const [categoryName, setCategoryName] = useState(null);
  const { register } = useForm();
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("token_owner")) {
      navigate("/");
    } else {
      const getCategoryName = async () => {
        try {
          const response = await axios.get("https://gymrat.uz/api/v1/gym/all", {
            headers: {
              Authorization: `${localStorage.getItem("token_owner")}`,
              "Content-Type": "application/json",
            },
          });
          setCategoryName(response.data.data);
        } catch (error) {
          console.log(error.response.data);
        }
      };
      getCategoryName();
    }
  }, [navigate]);

  return (
    <Tabs>
      <Tabs.Item active title="Add Product Cotegories" icon={HiUserCircle}>
        <form action="#">
          <div className="mb-2 block">
            <Label
              htmlFor="Add product category"
              value="Add product category"
            />
          </div>
          <TextInput type="text" placeholder="cotegory" {...register("cotegory")} />
        </form>
      </Tabs.Item>
    </Tabs>
  );
};

export default OwnerBarProductCategories;
