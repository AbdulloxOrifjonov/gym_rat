/** @format */

import React from "react";
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="flex items-center justify-center">
      <div className="mt-10">
        <form className="flex max-w-md flex-col gap-4">
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email1" value="Your phone number" />
            </div>
            <TextInput
              className="w-[440px]"
              id="email1"
              type="number"
              placeholder="+998-33-011-99-01"
              required
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password1" value="Your password" />
            </div>
            <TextInput id="password1" type="password" required />
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="remember" />
            <Label htmlFor="remember">Remember me</Label>
          </div>
          <div className="flex items-center justify-between">
            <Link to={"/gym"}>
              <Button type="submit">Submit</Button>
            </Link>
            <Link className="text-blue-500" to={"/register"}>
              Register
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
