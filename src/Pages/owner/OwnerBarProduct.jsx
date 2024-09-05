/** @format */

import axios from "axios";
import { Button, Card, FileInput, Label, Select, Tabs } from "flowbite-react";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import { HiUserCircle } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

const OwnerBarProduct = () => {
  const [products, setProducts] = useState(null);
  // eslint-disable-next-line
  const [employees, setEmployees] = useState([]);
  // eslint-disable-next-line
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  // eslint-disable-next-line
  const [selectedEmployees, setSelectedEmployees] = useState([]);
  // eslint-disable-next-line
  const [img, setImg] = useState(null);
  const navigate = useNavigate();
  // eslint-disable-next-line
  const { register, handleSubmit, reset } = useForm();
  useEffect(() => {
    if (!localStorage.getItem("token_owner")) {
      navigate("/");
    } else {
      const getProducts = async () => {
        try {
          const response = await axios.get("https://gymrat.uz/api/v1/gym/all", {
            headers: {
              Authorization: `${localStorage.getItem("token_owner")}`,
              "Content-Type": "application/json",
            },
          });
          setProducts(response.data.data);
        } catch (error) {
          console.log(error.response.data);
        }
      };
      const getStaffs = async () => {
        try {
          const response = await axios.get(
            `https://gymrat.uz/api/v1/employee/pagination?page=${currentPage}&pageSize=10`,
            {
              headers: {
                Authorization: `${localStorage.getItem("token_owner")}`,
              },
            },
          );
          console.log(response);
          setEmployees(response.data.data);

          const pages = response.data.employersCount;
          setTotalPages(pages > 0 ? pages : 1);
        } catch (error) {
          console.error("Error fetching employees:", error);
          setTotalPages(1);
        }
      };

      getProducts();
      getStaffs();
    }
  }, [navigate, currentPage, img]);
  const handleDelete = async (gym_id) => {
    try {
      const response = await axios.delete(`https://gymrat.uz/api/v1/gym/${gym_id}`, {
        headers: { Authorization: localStorage.getItem("token_owner") },
      });
      console.log(response);

      setProducts(products.filter((gym) => gym._id !== gym_id));
    } catch (error) {
      console.log("Error deleting product:", error);
    }
  };
  // eslint-disable-next-line
  const onPageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };
  // eslint-disable-next-line
  const handleEdit = async (gym_id) => {
    try {
    } catch (error) {
      console.log("Error editing product:", error);
    }
  };
  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("employerId", data.employerId);
    formData.append("name", data.name);
    formData.append("phone", data.phone);
    formData.append("country", data.country);
    formData.append("city", data.city);
    formData.append("address", data.address);
    formData.append("timeZone", data.timeZone);
    if (img) {
      formData.append("logo", img);
    }
    try {
      const response = await axios.post("https://gymrat.uz/api/v1/gym", formData, {
        headers: { Authorization: localStorage.getItem("token_owner") },
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    }

    setSelectedEmployees([]);
  };

  const aboutProduct = (gym_id) => {
    alert(true);
    localStorage.setItem("gym_id", gym_id);
    console.log(gym_id);
    console.log(localStorage.getItem("gym_id"));
    navigate("/owner/about/gym");
  };
  return (
    <Tabs>
      <Tabs.Item active title="Products" icon={HiUserCircle}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {products ? (
            products.map((gym) => (
              <Card onClick={() => aboutProduct(gym._id)} key={gym._id} className="max-w-sm">
                <img
                  src={gym.logo || "https://via.placeholder.com/150"}
                  alt={`${gym.name} logo`}
                  className="rounded-t-lg"
                />
                <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                  {gym.name}
                </h5>
                <p className="text-gray-700 dark:text-gray-400">{gym.address}</p>
                <p className="text-gray-700 dark:text-gray-400">
                  {gym.city}, {gym.country}
                </p>
                <p className="text-gray-700 dark:text-gray-400">Time Zone: {gym.timeZone}</p>
                <div className="flex justify-between mt-4">
                  {/* <Link className="text-blue-600 dark:text-blue-400">Edit</Link> */}
                  <Button color="failure" onClick={() => handleDelete(gym._id)}>
                    Delete
                  </Button>

                  {/* <Button color="failure" onClick={() => handleDelete(gym._id)}>
                    Delete
                  </Button> */}
                </div>
              </Card>
            ))
          ) : (
            <div className="w-full pl-5 pb-5 pt-4">
              <h1 className="text-[30px] text-black">Loading . . .</h1>
            </div>
          )}
        </div>
      </Tabs.Item>
      <Tabs.Item title="Add Quantity" icon={HiUserCircle}>
        <div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Select id="gymIds" {...register("gymIds")} required>
              {products?.map((gym) => (
                <option key={gym._id} value={gym._id}>
                  {gym.name}
                </option>
              ))}
            </Select>
            <div className="mt-4 mb-2 block">
              <Label htmlFor="cost" value="Cost" />
            </div>
            <input
              id="cost"
              type="number"
              className="block w-full p-2.5 border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
            />
            <div className="mt-4 mb-2 block">
              <Label htmlFor="quantity" value="Quantity" />
            </div>
            <input
              id="quantity"
              type="number"
              className="block w-full p-2.5 border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
            />
          </form>
        </div>
      </Tabs.Item>

      <Tabs.Item title="Add Product" icon={HiUserCircle}>
        <div>
          <form>
            <div className="mt-4 mb-2 block">
              <Label htmlFor="title" value="Title" />
            </div>
            <input
              id="title"
              type="text"
              className="block w-full p-2.5 border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
            />
            <div className="mt-4 mb-2 block">
              <Label htmlFor="description" value="Description" />
            </div>
            <input
              id="description"
              type="text"
              className="block w-full p-2.5 border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
            />
            <div className="mt-4 mb-2 block">
              <Label htmlFor="image" value="Image" />
            </div>
            <FileInput
              id="image"
              className="block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
            />
            <div className="mt-4 mb-2 block">
              <Label htmlFor="category" value="Category" />
            </div>
            <input
              id="category"
              type="text"
              className="block w-full p-2.5 border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
            />
            <div className="mt-4 mb-2 block">
              <Label htmlFor="price" value="Price" />
            </div>
            <input
              id="price"
              type="number"
              className="block w-full p-2.5 border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
            />
            <div className="mt-4 mb-2 block">
              <Label htmlFor="cost" value="Cost" />
            </div>
            <input
              id="cost"
              type="number"
              className="block w-full p-2.5 border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
            />
            <div className="mt-4 mb-2 block">
              <Label htmlFor="quantity" value="Quantity" />
            </div>
            <input
              id="quantity"
              type="number"
              className="block w-full p-2.5 border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
            />
            <Button className="mt-3">Submit</Button>
          </form>
        </div>
      </Tabs.Item>

      <Tabs.Item title="Edit Product" icon={HiUserCircle}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {products ? (
            products.map((gym) => (
              <Card onClick={() => aboutProduct(gym._id)} key={gym._id} className="max-w-sm">
                <img
                  src={gym.logo || "https://via.placeholder.com/150"}
                  alt={`${gym.name} logo`}
                  className="rounded-t-lg"
                />
                <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                  {gym.name}
                </h5>
                <p className="text-gray-700 dark:text-gray-400">{gym.address}</p>
                <p className="text-gray-700 dark:text-gray-400">
                  {gym.city}, {gym.country}
                </p>
                <p className="text-gray-700 dark:text-gray-400">Time Zone: {gym.timeZone}</p>
                <div className="flex justify-between mt-4">
                  {/* <Link className="text-blue-600 dark:text-blue-400">Edit</Link> */}
                  <Button>Edit</Button>
                  {/* <Button color="failure" onClick={() => handleDelete(gym._id)}>
                    Delete
                  </Button> */}
                </div>
              </Card>
            ))
          ) : (
            <div className="w-full pl-5 pb-5 pt-4">
              <h1 className="text-[30px] text-black">Loading . . .</h1>
            </div>
          )}
        </div>
      </Tabs.Item>

      <Tabs.Item title="Delete Product" icon={HiUserCircle}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {products ? (
            products.map((gym) => (
              <Card key={gym._id} className="max-w-sm">
                <img
                  onClick={() => aboutProduct(gym._id)}
                  src={gym.logo || "https://via.placeholder.com/150"}
                  alt={`${gym.name} logo`}
                  className="rounded-t-lg"
                />
                <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                  {gym.name}
                </h5>
                <p className="text-gray-700 dark:text-gray-400">{gym.address}</p>
                <p className="text-gray-700 dark:text-gray-400">
                  {gym.city}, {gym.country}
                </p>
                <p className="text-gray-700 dark:text-gray-400">Time Zone: {gym.timeZone}</p>
                <div className="flex justify-between mt-4">
                  <Button color="failure" onClick={() => handleDelete(gym._id)}>
                    Delete
                  </Button>
                </div>
              </Card>
            ))
          ) : (
            <div className="w-full pl-5 pb-5 pt-4">
              <h1 className="text-[30px] text-black">Loading . . .</h1>
            </div>
          )}
        </div>
      </Tabs.Item>
    </Tabs>
  );
};

export default OwnerBarProduct;
