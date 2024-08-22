/** @format */

import React, { useEffect } from "react";
import { Button, Label, TextInput } from "flowbite-react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const { register, reset, handleSubmit } = useForm();

  useEffect(() => {
    if (localStorage.getItem("token_owner")) {
      navigate("/owner/dashboard");
    }
  }, [navigate]);

  const onSubmit = async (data) => {
    console.log(data);
    try {
      const response = await axios.post("https://gymrat.uz/api/v1/employer/login", data, {
        headers: "application/json",
      });
      console.log(response.data);
      localStorage.setItem("token_owner", response.data.token);
      // const owner_profile = {
      //   id_owner: response.data._id,
      //   fullname_owner: response.data.fullname,
      //   phone_owner: response.data.phone,
      // };
      localStorage.setItem("id_owner", response.data.data._id);
      localStorage.setItem("fullname_owner", response.data.data.fullname);
      localStorage.setItem("phone_owner", response.data.data.phone);
      
      navigate("/owner/dashboard");
      reset();
    } catch (error) {
      alert("ERROR Fetch", error);
    }
  };

  return (
    <div className="flex items-center justify-center">
      <div className="mt-10">
        <form className="flex max-w-md flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email1" value="Your phone number" />
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
              <Label htmlFor="password1" value="Your password" />
            </div>
            <TextInput {...register("password")} id="password1" type="password" required />
          </div>
          <div className="flex items-center justify-between">
            <Button type="submit">Submit</Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
