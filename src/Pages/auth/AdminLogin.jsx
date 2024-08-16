/** @format */

import React from "react";
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { useForm } from "react-hook-form";
import {
  useAddLoginMutation,
} from "../../features/API/ApiSlice";

function AdminLogin() {
  const { register, reset, handleSubmit } = useForm();
  const [addLogin, { isSuccess }] = useAddLoginMutation();

  const onSubmit = async (data) => {
    console.log(data);
    const response = await addLogin({
      ...data,
    }).unwrap()
    console.log(response);

    reset();
  };

  return (
    <div className="flex items-center justify-center">
      <div className="mt-10">
        <form
          className="flex max-w-md flex-col gap-4"
          onSubmit={handleSubmit(onSubmit)}
        >
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
            <TextInput
              id="password1"
              type="password"
              required
              {...register("password")}
            />
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
