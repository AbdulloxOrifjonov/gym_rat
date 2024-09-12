/** @format */

import React, { useContext, useState } from "react";
import { Button, Label, TextInput, Select } from "flowbite-react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { AuthContext } from "../../context/AuthProvider";

function AddOwner() {
  const { auth } = useContext(AuthContext);

  const [step, setStep] = useState("first");
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    const response = await axios.post("https://gymrat.uz/api/v1/employer/register", data, {
      headers: {
        authorization: `Bearer ${auth.accessToken}`,
      },
    });
    console.log(response);
  };

  return (
    <div className="flex flex-col h-screen items-center justify-center pt-10 bg-dark-blue text-white">
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
      <form onSubmit={handleSubmit(onSubmit)} className="mt-10 w-full max-w-md">
        {step === "first" && (
          <div className="flex flex-col gap-4 bg-dark-blue p-6 rounded-lg">
            <TextInput
              {...register("fullname")}
              id="firstName"
              placeholder="Firstname"
              required
              className="bg-gray-800 text-white"
            />
            <TextInput
              {...register("phone")}
              id="phone"
              type="tel"
              placeholder="Phone Number"
              required
              className="bg-gray-800 text-white"
            />
            <TextInput
              {...register("password")}
              id="password1"
              type="password"
              placeholder="Password"
              required
              className="bg-gray-800 text-white"
            />
            <Button type="button" className="w-32" onClick={() => setStep("second")}>
              Next
            </Button>
          </div>
        )}
        {step === "second" && (
          <div className="flex flex-col gap-4 bg-dark-blue p-6 rounded-lg mt-10">
            <TextInput
              {...register("name")}
              id="gym_name"
              placeholder="Gym name"
              required
              className="bg-gray-800 text-white"
            />
            <TextInput
              {...register("logo")}
              id="gym_logo"
              placeholder="Gym Logo Image"
              required
              className="bg-gray-800 text-white"
            />
            <TextInput
              {...register("gymPhone")}
              id="gym_phone_number"
              type="tel"
              placeholder="Phone number"
              required
              className="bg-gray-800 text-white"
            />
            <TextInput
              {...register("address")}
              id="street_address"
              placeholder="Street address"
              required
              className="bg-gray-800 text-white"
            />
            <TextInput
              {...register("city")}
              id="city"
              placeholder="City"
              required
              className="bg-gray-800 text-white"
            />
            <TextInput
              {...register("country")}
              id="country"
              placeholder="Country"
              required
              className="bg-gray-800 text-white"
            />
            <div className="flex justify-between items-center">
              <Button type="button" className="w-32" onClick={() => setStep("third")}>
                Next
              </Button>
              <button onClick={() => setStep("first")} className="text-red-700 font-bold text-lg">
                Back
              </button>
            </div>
          </div>
        )}
        {step === "third" && (
          <div className="flex flex-col gap-4 bg-dark-blue p-6 rounded-lg mt-10 w-96">
            <div className="mb-6">
              <Label htmlFor="timeZone" value="Time Zone" />
              <Select
                {...register("timeZone")}
                className="w-full border rounded p-2 bg-gray-800 text-white"
              >
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
                  <input type="radio" value="AM/PM" {...register("timeFormat")} className="mr-2" />
                  <span>AM/PM</span>
                </label>
                <label className="flex items-center">
                  <input type="radio" value="24h" {...register("timeFormat")} className="mr-2" />
                  <span>24h</span>
                </label>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <Button type="button" className="w-32" onClick={() => setStep("fourth")}>
                Next
              </Button>
              <button onClick={() => setStep("second")} className="text-red-700 font-bold text-lg">
                Back
              </button>
            </div>
          </div>
        )}
        {step === "fourth" && (
          <div className="flex flex-col gap-4 bg-dark-blue p-6 rounded-lg mt-10 w-96">
            <Label htmlFor="currencies" value="Select your Currency" />
            <Select
              id="currencies"
              {...register("currency")}
              required
              className="w-full border rounded p-2 bg-gray-800 text-white"
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
        )}
      </form>
    </div>
  );
}

export default AddOwner;
