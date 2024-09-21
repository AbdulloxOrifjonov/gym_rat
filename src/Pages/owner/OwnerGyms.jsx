/** @format */

import axios from "axios";
import { Tabs, FileInput, Label, Button, Card, Modal } from "flowbite-react";
import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { HiUserCircle } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
import img_gym_2 from "../../images/gym_img_2.jpg";
import img_gym_1 from "../../images/gym_img_1.jpg";

function OwnerGyms() {
  const { auth, resetAccess, setAuth, refreshToken } = useContext(AuthContext);
  const [img, setImg] = useState(null);
  const [gyms, setGyms] = useState(null);
  const [editGymId, setEditGymId] = useState(null); // Track the gym being edited
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const { register, handleSubmit, reset, setValue } = useForm();

  const resetAccess = async () => {
    setLoading(true);
    await refreshToken();
    setLoading(false);
  };

  const deleteGym = async (gym_id) => {
    try {
      const response = await axios.delete(
        `https://gymrat.uz/api/v1/gym/${gym_id}`,
        {
          headers: {
            Authorization: `Bearer ${auth.accessToken}`,
          },
        }
      );
      console.log(response);
      setGyms(gyms.filter((gym) => gym._id !== gym_id));
    } catch (error) {
      console.error(error);
      if (error.response.data.message === "Invalid token") {
        await resetAccess();
      }
    }
  };


  const getGyms = async () => {
    try {
      const response = await axios.get("https://gymrat.uz/api/v1/gym/all", {
        headers: {
          Authorization: `Bearer ${auth.accessToken}`,
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });
      setGyms(response.data.data);
      console.log(response);
    } catch (error) {
      console.log(error.response.data);
      if (error.response.data.message === "Invalid token") {
        await resetAccess();
      }
    }
  };

  useEffect(() => {
    getGyms();
  }, []);

  // Function to edit a gym
  const editGym = (gym) => {
    setEditGymId(gym._id); // Set the ID of the gym being edited

    // Pre-populate the form fields with the selected gym's data
    setValue("employerId", gym.employerId);
    setValue("name", gym.name);
    setValue("phone", gym.phone);
    setValue("country", gym.country);
    setValue("city", gym.city);
    setValue("address", gym.address);
    setValue("timeZone", gym.timeZone);
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
      let response;
      if (editGymId) {
        // If editing an existing gym, send a PUT request
        response = await axios.put(
          `https://gymrat.uz/api/v1/gym/${editGymId}`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
              Authorization: `Bearer ${auth.accessToken}`,
            },
          }
        );
      } else {
        // If adding a new gym, send a POST request
        response = await axios.post("https://gymrat.uz/api/v1/gym", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${auth.accessToken}`,
          },
        });
      }

      console.log(response);
      getGyms();
      reset();
      setEditGymId(null); // Reset the editGymId after successful submission
    } catch (error) {
      console.error(error);
      if (error.response.data.message === "Invalid token") {
        await resetAccess();
      }
    }
  };

  const aboutGym = (gym_id) => {
    localStorage.setItem("gym_id", gym_id);
    navigate("/employer/about/gym");
  };

  return (
    <Tabs aria-label="Tabs with underline" variant="underline">
      <Tabs.Item active title="Gyms" icon={HiUserCircle}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 ">
          {gyms ? (
            gyms.map((gym) => (
              <Card
                key={gym._id}
                className="max-w-sm bg-blue-900 border border-blue-700 rounded-lg shadow-lg transition-transform hover:scale-105"
              >
                <img
                  src={img_gym_1 || "https://via.placeholder.com/150"}
                  alt={`${gym.name} logo`}
                  className="rounded-t-lg w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h5 className="text-xl font-semibold tracking-tight text-white">
                    {gym.name}
                  </h5>
                </div>
                <div className="flex justify-between">
                  <Button color="failure" onClick={() => deleteGym(gym._id)}>
                    Delete
                  </Button>
                  <Button color="success" onClick={() => editGym(gym)}>
                    Edit
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
      <Modal></Modal>
      <Tabs.Item active title="Add Gyms" icon={HiUserCircle}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-4 max-w-lg mx-auto"
        >
          <div>
            <Label htmlFor="address" value="Address" />
            <input
              id="address"
              type="text"
              className="block w-full p-3 border border-blue-600 rounded-lg bg-blue-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              {...register("address")}
            />
          </div>

          <div>
            <Label htmlFor="timeZone" value="Time Zone" />
            <input
              id="timeZone"
              type="text"
              className="block w-full p-3 border border-blue-600 rounded-lg bg-blue-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              {...register("timeZone")}
            />
          </div>

          <div>
            <Label htmlFor="employerId" value="Employer Id" />
            <input
              id="employerId"
              defaultValue={localStorage.getItem("employer_id") || ""}
              type="text"
              className="block w-full p-3 border border-blue-600 rounded-lg bg-blue-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              {...register("employerId")}
            />
          </div>

          <div>
            <Label htmlFor="name" value="Name" />
            <input
              id="name"
              type="text"
              className="block w-full p-3 border border-blue-600 rounded-lg bg-blue-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              {...register("name")}
            />
          </div>

          <div>
            <Label htmlFor="phone" value="Phone" />
            <input
              id="phone"
              type="text"
              className="block w-full p-3 border border-blue-600 rounded-lg bg-blue-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              {...register("phone")}
            />
          </div>

          <div>
            <Label htmlFor="country" value="Country" />
            <input
              id="country"
              type="text"
              className="block w-full p-3 border border-blue-600 rounded-lg bg-blue-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              {...register("country")}
            />
          </div>

          <div>
            <Label htmlFor="city" value="City" />
            <input
              id="city"
              type="text"
              className="block w-full p-3 border border-blue-600 rounded-lg bg-blue-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              {...register("city")}
            />
          </div>

          <div>
            <Label htmlFor="logo" value="Logo" />
            <FileInput
              id="logo"
              onChange={(e) => setImg(e.target.files[0])}
              helperText="Gym logo"
            />
          </div>

          <Button
            type="submit"
            className="w-full p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            {editGymId ? "Update Gym" : "Submit"}
          </Button>
        </form>
      </Tabs.Item>
    </Tabs>
  );
}

export default OwnerGyms;
