/** @format */

import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";

function AboutOwner() {
  const [gyms, setGyms] = useState([]);
  const { auth } = useContext(AuthContext);
  const [owner, setOwner] = useState(null); // initial state null
  const { id } = useParams();

  // eslint-disable-next-line
  const getGyms = async (ownerId) => {
    try {
      const response = await axios.get(`https://gymrat.uz/api/v1/gym/all?employerId=${ownerId}`, {
        headers: {
          Authorization: `Bearer ${auth.accessToken}`,
          "Content-Type": "application/json",
        },
      });
      setGyms(response.data.data);
      console.log(response.data);
    } catch (error) {
      console.log(error.response.data);
    }
  };
  // eslint-disable-next-line
  const getOwner = async (id) => {
    try {
      const response = await axios.get(`https://gymrat.uz/api/v1/employer/${id}`, {
        headers: {
          authorization: `Bearer ${auth.accessToken}`,
        },
      });
      setOwner(response.data.data);
      console.log(response.data);
      console.log(owner);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (id) {
      getOwner(id);
      getGyms(id);
      console.log(gyms);
    }
  }, [id, getGyms, getOwner, gyms]);
  // eslint-disable-next-line

  if (!owner) {
    return <div className="text-white text-center mt-10">Loading owner details...</div>;
  }

  return (
    <div className="flex justify-center items-center pt-10 text-white w-full">
      <div className="bg-blue-800 p-6 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-3xl font-bold mb-4 text-center uppercase tracking-wider border-b-2 border-blue-600 pb-2">
          Owner Details
        </h1>
        <div className="space-y-4 mb-6">
          <div>
            <h2 className="text-base font-semibold text-gray-300">Full Name</h2>
            <p className="text-lg">{owner.fullname}</p>
          </div>
          <div>
            <h2 className="text-base font-semibold text-gray-300">Contact Number</h2>
            <p className="text-lg">{owner.phone}</p>
          </div>
        </div>

        <div className="flex space-x-2">
          <div className="w-1/3">
            <label htmlFor="category" className="block text-sm font-semibold text-gray-300 mb-1">
              Category
            </label>
            <select
              id="category"
              className="w-full p-2 bg-blue-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option>Fitness</option>
              <option>Wellness</option>
              <option>Personal Training</option>
            </select>
          </div>

          <div className="w-1/3">
            <label htmlFor="membership" className="block text-sm font-semibold text-gray-300 mb-1">
              Membership
            </label>
            <select
              id="membership"
              className="w-full p-2 bg-blue-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option>Standard</option>
              <option>Premium</option>
              <option>VIP</option>
            </select>
          </div>

          <div className="w-1/3">
            <label htmlFor="status" className="block text-sm font-semibold text-gray-300 mb-1">
              Status
            </label>
            <select
              id="status"
              className="w-full p-2 bg-blue-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option>Active</option>
              <option>Inactive</option>
              <option>Suspended</option>
            </select>
          </div>
        </div>

        <div className="mt-6 flex justify-center">
          <button className="bg-blue-700 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-md transition duration-300">
            Get In Touch
          </button>
        </div>
      </div>
    </div>
  );
}

export default AboutOwner;
