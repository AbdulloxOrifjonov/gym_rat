/** @format */

import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Button, Label, TextInput } from "flowbite-react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider"; // AuthContext ni import qilish

function AdminLogin() {
  const navigate = useNavigate();
  const { register, reset, handleSubmit } = useForm();
  // eslint-disable-next-line
  const [responseData, setResponseData] = useState("");
  const { auth, setAuth } = useContext(AuthContext); // AuthProvider emas, AuthContext dan foydalanish

  useEffect(() => {
    if (auth?.accessToken) {
      navigate(`/admin/dashboard`);
    }
  }, [auth, navigate]);

  const onSubmit = async (data) => {
    console.log(data);
    try {
      const response = await axios.post("https://gymrat.uz/api/v1/admin/login", data, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });
      setAuth({ role: "admin", accessToken: response.data.accessToken });
      localStorage.setItem("accessToken", response.data.accessToken);
      localStorage.setItem("refreshToken", response.data.refreshToken);
      localStorage.setItem("role", "admin");
      console.log(response);
      setResponseData(response.data);
      reset();
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Admin Login</h2>
        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <Label htmlFor="phone" value="Admin phone number" className="text-gray-700" />
            <TextInput
              id="phone"
              type="tel"
              placeholder="+998-33-011-99-01"
              required
              {...register("phone")}
              className="mt-2 p-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div>
            <Label htmlFor="password" value="Admin password" className="text-gray-700" />
            <TextInput
              id="password"
              type="password"
              required
              {...register("password")}
              className="mt-2 p-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-indigo-600 text-white hover:bg-indigo-700 focus:ring-4 focus:ring-indigo-300 font-semibold py-2 px-4 rounded-lg"
          >
            Sign In
          </Button>
        </form>
      </div>
    </div>
  );
}

export default AdminLogin;
