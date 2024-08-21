/** @format */

import React, { useEffect, useState } from "react";
import { Button, Label, TextInput, Select } from "flowbite-react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AddOwner() {
  const navigate = useNavigate();

  const [step, setStep] = useState("first");
  const { register, handleSubmit } = useForm();

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/admin/login");
    }
  }, [navigate]);

  const onSubmit = async (data) => {
    console.log(data);
    const response = await axios.post("https://gymrat.uz/api/v1/employer/register", data, {
      headers: {
        authorization: localStorage.getItem("token"),
      },
    });
    console.log(response);
  };

  return (
    <div className="flex flex-col items-center justify-center pt-10">
      <div className="flex items-center justify-center gap-10">
        {["first", "second", "third", "fourth"].map((s, index) => (
          <h2
            key={index}
            className={`w-[50px] h-[50px] transition-all ${
              step === s ? "bg-blue-700" : "bg-gray-700"
            } flex items-center justify-center rounded-full text-white text-2xl`}
          >
            {index + 1}
          </h2>
        ))}
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        {step === "first" && (
          <div className="mt-10">
            <div className="flex max-w-md flex-col gap-4">
              <TextInput
                {...register("fullname")}
                id="firstName"
                placeholder="Firstname"
                required
              />
              <TextInput
                {...register("phone")}
                id="phone"
                type="tel"
                placeholder="Phone Number"
                required
              />
              <TextInput
                {...register("password")}
                id="password1"
                type="password"
                placeholder="Password"
                required
              />
              <Button type="button" className="w-32" onClick={() => setStep("second")}>
                Next
              </Button>
            </div>
          </div>
        )}
        {step === "second" && (
          <div className="mt-10">
            <div className="flex flex-col gap-4">
              <TextInput {...register("name")} id="gym_name" placeholder="Gym name" required />
              <TextInput
                {...register("logo")}
                id="gym_logo"
                placeholder="Gym Logo Image"
                required
              />
              <TextInput
                {...register("gymPhone")}
                id="gym_phone_number"
                type="tel"
                placeholder="Phone number"
                required
              />
              <TextInput
                {...register("address")}
                id="street_address"
                placeholder="Street address"
                required
              />
              <TextInput {...register("city")} id="city" placeholder="City" required />
              <TextInput {...register("country")} id="country" placeholder="Country" required />
              <div className="flex justify-between items-center">
                <Button type="button" className="w-32" onClick={() => setStep("third")}>
                  Next
                </Button>
                <button onClick={() => setStep("first")} className="text-red-700 font-bold text-lg">
                  Back
                </button>
              </div>
            </div>
          </div>
        )}
        {step === "third" && (
          <div className="mt-10">
            <div className="w-96">
              <div className="mb-6">
                <Label htmlFor="timeZone" value="Time Zone" />
                <Select {...register("timeZone")} className="w-full border rounded p-2">
                  <option value="America/New_York">(UTC-05:00) New York</option>
                  <option value="Europe/London">(UTC+00:00) London</option>
                  <option value="Asia/Tashkent">(UTC+05:00) Tashkent</option>
                  <option value="Asia/Karachi">(UTC+05:00) Karachi</option>
                  <option value="Australia/Sydney">(UTC+10:00) Sydney</option>
                  <option value="Europe/Moscow">(UTC+03:00) Moscow</option>
                </Select>
              </div>
              <div className="mb-6">
                <Label value="Select Time Format" />
                <div className="flex gap-2">
                  <label className="flex items-center">
                    <input type="radio" value="AM/PM" {...register("timeFormat")} />
                    <span className="ml-2">AM/PM</span>
                  </label>
                  <label className="flex items-center">
                    <input type="radio" value="24h" {...register("timeFormat")} />
                    <span className="ml-2">24h</span>
                  </label>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <Button type="button" className="w-32" onClick={() => setStep("fourth")}>
                  Next
                </Button>
                <button
                  onClick={() => setStep("second")}
                  className="text-red-700 font-bold text-lg"
                >
                  Back
                </button>
              </div>
            </div>
          </div>
        )}
        {step === "fourth" && (
          <div className="mt-10">
            <div className="w-96">
              <Label htmlFor="currencies" value="Select your Currency" />
              <Select
                id="currencies"
                {...register("currency")}
                required
                className="w-full border rounded p-2"
              >
                <option value="soum">So'm</option>
                <option value="usd">USD</option>
                <option value="ru">RU</option>
                <option value="qz">QZ</option>
              </Select>
              <div className="flex justify-between items-center mt-10">
                <Button type="submit">Submit</Button>
                <button onClick={() => setStep("third")} className="text-red-700 font-bold text-lg">
                  Back
                </button>
              </div>
            </div>
          </div>
        )}
      </form>
    </div>
  );
}

export default AddOwner;
