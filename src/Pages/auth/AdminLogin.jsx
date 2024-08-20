/** @format */

import React, { useState } from "react";
import axios from "axios";
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
// import RequaireAuth from "../../components/RequaireAuth";

function AdminLogin() {
  const navigate = useNavigate();
  const { register, reset, handleSubmit } = useForm();
  const [responseData, setResponseData] = useState("");

  const onSubmit = async (data) => {
    console.log(data);
    try {
      const response = await axios.post("https://gymrat.uz/api/v1/admin/login", data);
      setResponseData(response.data); // Save the response data to state
      console.log(response.data); // Log the response data
      console.log(responseData);
      console.log(response.data.success);

      if (response.data.success === true) {
        localStorage.setItem("token", response.data.token);
        navigate("/admin/dashboard");
      } else if (response.data.success === false) {
        navigate("/");
      }
      reset();
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };

  return (
    <div className="flex items-center justify-center">
      <div className="mt-10">
        <form className="flex max-w-md flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email1" value="Admin phone number" />
            </div>
            <TextInput
              className="w-[440px]"
              id="email1"
              type="tel"
              placeholder="+998-33-011-99-01"
              required
              {...register("phone")}
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password1" value="Admin password" />
            </div>
            <TextInput id="password1" type="password" required {...register("password")} />
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="remember" />
            <Label htmlFor="remember">Remember me</Label>
          </div>
          <Button type="submit">Submit</Button>
        </form>
      </div>
    </div>
  );
}

export default AdminLogin;
