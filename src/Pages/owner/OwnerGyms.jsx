/** @format */

import axios from "axios";
import { Tabs, FileInput, Label, Button, Card } from "flowbite-react";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { HiUserCircle } from "react-icons/hi";
import { Link, useNavigate } from "react-router-dom";

function OwnerGyms() {
  const [img, setImg] = useState(null); // Faylni saqlash uchun `null` dan boshlash
  const [gyms, setGyms] = useState(null);
  // const [selectedEmployees, setSelectedEmployees] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("token_owner")) {
      navigate("/");
    } else {
      const getGyms = async () => {
        try {
          const response = await axios.get("https://gymrat.uz/api/v1/gym/all", {
            headers: {
              Authorization: `${localStorage.getItem("token_owner")}`,
              "Content-Type": "application/json",
            },
          });
          setGyms(response.data.data);
        } catch (error) {
          console.log(error.response.data);
        }
      };
      getGyms();
    }
  }, [navigate, img]);

  const { register, handleSubmit } = useForm();

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
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: localStorage.getItem("token_owner"),
        },
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    }

    // reset(); // Agar siz react-hook-form'dan reset() funksiyasini ishlatmoqchi bo'lsangiz, uni aktivlash uchun react-hook-form dan import qiling.
  };

  const aboutGym = (gym_id) => {
    alert(true);
    localStorage.setItem("gym_id", gym_id);
    console.log(gym_id);
    console.log(localStorage.getItem("gym_id"));
    navigate("/owner/about/gym");
  };

  return (
    <Tabs aria-label="Tabs with underline" variant="underline">
      <Tabs.Item active title="Gyms" icon={HiUserCircle}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {gyms ? (
            gyms.map((gym) => (
              <Card onClick={() => aboutGym(gym._id)} key={gym._id} className="max-w-sm">
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
                  <Link className="text-red-700 ">Delete</Link>

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
      <Tabs.Item active title="Add Gyms" icon={HiUserCircle}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-2 block">
            <Label htmlFor="address" value="Address" />
          </div>
          <input
            id="address"
            type="text"
            className="block w-full p-2.5 border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
            {...register("address")}
          />
          <div className="mb-2 block">
            <Label htmlFor="timeZone" value="Time Zone" />
          </div>
          <input
            id="timeZone"
            type="text"
            className="block w-full p-2.5 border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
            {...register("timeZone")}
          />
          <div className="mb-2 block">
            <Label htmlFor="employerId" value="Employer Id:" />
          </div>
          <input
            id="employerId"
            value={localStorage.getItem("id_owner")}
            type="text"
            className="block w-full p-2.5 border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
            {...register("employerId")}
          />
          <div className="mb-2 block">
            <Label htmlFor="name" value="Name" />
          </div>
          <input
            id="name"
            type="text"
            className="block w-full p-2.5 border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
            {...register("name")}
          />
          <div className="mb-2 block">
            <Label htmlFor="phone" value="Phone" />
          </div>
          <input
            id="phone"
            type="text"
            className="block w-full p-2.5 border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
            {...register("phone")}
          />
          <div className="mb-2 block">
            <Label htmlFor="country" value="Country" />
          </div>
          <input
            id="country"
            type="text"
            className="block w-full p-2.5 border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
            {...register("country")}
          />
          <div className="mb-2 block">
            <Label htmlFor="city" value="City" />
          </div>
          <input
            id="city"
            type="text"
            className="block w-full p-2.5 border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
            {...register("city")}
          />
          <div className="mb-2 block">
            <Label htmlFor="logo" value="Logo" />
          </div>
          <FileInput
            id="logo"
            className="block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
            ref={register("logo").ref} // FileInput uchun ref qo'shildi
            onChange={(e) => setImg(e.target.files[0])} // Faylni tanlaymiz
          />
          <Button type="submit">Submit</Button>
        </form>
      </Tabs.Item>
    </Tabs>
  );
}

export default OwnerGyms;
