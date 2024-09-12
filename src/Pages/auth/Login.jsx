/** @format */

import React, { useContext, useEffect } from "react";
import { Button, Label, TextInput } from "flowbite-react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";

function Login() {
  const navigate = useNavigate();
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { auth, setAuth } = useContext(AuthContext);

  useEffect(() => {
    if (auth?.accessToken) {
      navigate(`/${auth.role}/dashboard`);
    }
  }, [auth, navigate]);

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(
        `https://gymrat.uz/api/v1/${data.role}/login`,
        {
          phone: data.phone,
          password: data.password,
        },
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        },
      );
      setAuth({ role: data.role, accessToken: response.data.accessToken });
      // localStorage.setItem("accessToken", response.data.accessToken);
      localStorage.setItem("refreshToken", response.data.refreshToken);
      console.log(response);
      localStorage.setItem(`${data.role}_id`, response.data.data._id)
      // localStorage.setItem("role", "owner");
      reset();
    } catch (error) {
      alert(error.response.data.message);
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Login to Your Account</h2>
        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <Label htmlFor="phone" value="Your phone number" className="text-gray-700" />
            <TextInput
              id="phone"
              type="tel"
              placeholder="+998-33-011-99-01"
              required
              {...register("phone", { required: "Phone number is required" })}
              className="mt-2 p-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
            {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
          </div>
          <div>
            <Label htmlFor="password" value="Your password" className="text-gray-700" />
            <TextInput
              id="password"
              type="password"
              required
              {...register("password", { required: "Password is required" })}
              className="mt-2 p-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
            {errors.password && (
              <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>
            )}
          </div>
          <div>
            <Label htmlFor="role" value="Select Role" className="text-gray-700" />
            <select
              id="role"
              name="role"
              {...register("role", { required: "Role is required" })}
              className="w-full p-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            >
              <option value="employer">Owner</option>
              <option value="employee">Staff</option>
            </select>
            {errors.role && <p className="text-red-500 text-xs mt-1">{errors.role.message}</p>}
          </div>
          <div className="flex justify-center">
            <Button
              type="submit"
              className="w-full bg-indigo-600 text-white hover:bg-indigo-700 focus:ring-4 focus:ring-indigo-300 font-semibold py-2 px-4 rounded-lg"
            >
              Sign In
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
