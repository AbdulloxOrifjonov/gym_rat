/**
 * @format
 * @divat
 */

import React, { useState } from "react";
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { Progress } from "flowbite-react";
import TimezoneSelect from "react-timezone-select";
import { Select } from "flowbite-react";

function Register() {
  const [step, setStep] = useState("first");
  const [selectedTimezone, setSelectedTimezone] = useState({});
  const [hour, setHour] = useState("12");
  const [minute, setMinute] = useState("00");
  const [period, setPeriod] = useState("AM");

  const handleHourChange = (event) => {
    setHour(event.target.value);
  };

  const handleMinuteChange = (event) => {
    setMinute(event.target.value);
  };

  const handlePeriodChange = (event) => {
    setPeriod(event.target.value);
  };

  return (
    <div className="flex flex-col items-center justify-center pt-10">
      <div className="flex items-center justify-center gap-10">
        <h2
          className={`w-[50px] h-[50px] transition-all ${
            step === "first" ? "bg-blue-700" : "bg-gray-700"
          } flex items-center justify-center rounded-full text-white text-2xl`}
        >
          1
        </h2>

        <h2
          className={`w-[50px] h-[50px] transition-all ${
            step === "second" ? "bg-blue-700" : "bg-gray-700"
          } flex items-center justify-center rounded-full text-white text-2xl`}
        >
          2
        </h2>

        <h2
          className={`w-[50px] h-[50px] transition-all ${
            step === "third" ? "bg-blue-700" : "bg-gray-700"
          } flex items-center justify-center rounded-full text-white text-2xl`}
        >
          3
        </h2>
        <h2
          className={`w-[50px] h-[50px] transition-all ${
            step === "fourth" ? "bg-blue-700" : "bg-gray-700"
          } flex items-center justify-center rounded-full text-white text-2xl`}
        >
          4
        </h2>
      </div>
      <div>
        <Progress
          className="w-[330px] mt-8 transition-all"
          progress={
            step === "first"
              ? 25
              : step === "second"
              ? 50
              : step === "third"
              ? 75
              : step === "fourth"
              ? 100
              : 0
          }
          progressLabelPosition="inside"
          //   textLabel="Completed"
          textLabelPosition="outside"
          size="lg"
          labelProgress
          //   labelText
        />
      </div>
      <div>
        <form>
          {step === "first" ? (
            <div className="mt-10">
              {/* <h2 className="text-2xl font-bold mb-3">Step 1</h2> */}
              <div className="flex max-w-md flex-col gap-4">
                <div className="w-80">
                  <div className="mb-2 block">
                    <Label htmlFor="firstName" value="Firstname" />
                  </div>
                  <TextInput id="firstName" type="text" placeholder="Firstname" required />
                </div>
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="phone" value="Phone Number" />
                  </div>
                  <TextInput id="phone" type="number" placeholder="Phone Number" required />
                </div>
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="password1" value="Password" />
                  </div>
                  <TextInput id="password1" type="password" required />
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox id="remember" />
                  <Label htmlFor="remember">Accept terms and conditions</Label>
                </div>
                <Button type="button" className="w-32 " onClick={() => setStep("second")}>
                  Next
                </Button>
              </div>
            </div>
          ) : step === "second" ? (
            <div className="mt-10">
              {/* <h2 className="text-2xl font-bold mb-3">Step 2</h2> */}
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-center gap-10">
                  <div>
                    <div className="w-64">
                      <div className="mb-2 block">
                        <Label htmlFor="gym_name" value="Gym name" />
                      </div>
                      <TextInput id="gym_name" type="text" placeholder="Gym name" required />
                    </div>
                    <div>
                      <div className="mb-2 block">
                        <Label htmlFor="gym_logo" value="Gym Logo Image" />
                      </div>
                      <TextInput id="gym_logo" type="text" placeholder="Gym Logo Image" required />
                    </div>
                    <div>
                      <div className="mb-2 block">
                        <Label htmlFor="gym_phone_number" value="Phone number" />
                      </div>
                      <TextInput
                        id="gym_phone_number"
                        type="number"
                        placeholder="Phone number"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <div className="w-64">
                      <div className="mb-2 block">
                        <Label htmlFor="street_address" value="Street address" />
                      </div>
                      <TextInput
                        id="street_address"
                        type="text"
                        placeholder="Street address"
                        required
                      />
                    </div>
                    <div>
                      <div className="mb-2 block">
                        <Label htmlFor="city" value="City" />
                      </div>
                      <TextInput id="city" type="text" placeholder="City" required />
                    </div>
                    <div>
                      <div className="mb-2 block">
                        <Label htmlFor="country" value="Country" />
                      </div>
                      <TextInput id="country" type="text" placeholder="Country" required />
                    </div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <Button
                    type="button"
                    className="w-32 text-right"
                    onClick={() => setStep("third")}
                  >
                    Next
                  </Button>
                  <button
                    onClick={() => setStep("first")}
                    className="text-red-700 font-bold text-lg"
                  >
                    Back
                  </button>
                </div>
              </div>
            </div>
          ) : step === "third" ? (
            <>
              <div className="w-96">
                <div className="flex flex-col items-center justify-center pt-10">
                  <div className="w-full max-w-md">
                    <h2 className="text-xl font-semibold mb-4">Time Zone</h2>
                    <div className="select-wrapper mb-6">
                      <TimezoneSelect value={selectedTimezone} onChange={setSelectedTimezone} />
                    </div>
                    <h2 className="text-xl font-semibold mb-4">Select Time:</h2>
                    <div className="flex justify-center items-center gap-2 mb-6">
                      <select
                        value={hour}
                        onChange={handleHourChange}
                        className="border border-gray-300 rounded p-2 text-center focus:outline-none focus:ring-2 focus:ring-blue-600"
                      >
                        {Array.from({ length: 12 }, (_, i) => {
                          const value = i + 1;
                          return (
                            <option key={value} value={value < 10 ? `0${value}` : value}>
                              {value < 10 ? `0${value}` : value}
                            </option>
                          );
                        })}
                      </select>
                      :
                      <select
                        value={minute}
                        onChange={handleMinuteChange}
                        className="border border-gray-300 rounded p-2 text-center focus:outline-none focus:ring-2 focus:ring-blue-600"
                      >
                        {Array.from({ length: 60 }, (_, i) => {
                          const value = i;
                          return (
                            <option key={value} value={value < 10 ? `0${value}` : value}>
                              {value < 10 ? `0${value}` : value}
                            </option>
                          );
                        })}
                      </select>
                      <select
                        value={period}
                        onChange={handlePeriodChange}
                        className="border border-gray-300 rounded p-2 text-center focus:outline-none focus:ring-2 focus:ring-blue-600"
                      >
                        <option value="AM">AM</option>
                        <option value="PM">PM</option>
                      </select>
                    </div>
                    <p className="text-lg font-medium">
                      Selected Time: {hour}:{minute} {period}
                    </p>
                  </div>
                </div>
                <div className="flex justify-between items-center mt-10">
                  <Button
                    type="button"
                    className="w-32 text-right"
                    onClick={() => setStep("fourth")}
                  >
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
            </>
          ) : step === "fourth" ? (
            <>
              <div className="w-96">
                <div className="flex flex-col items-center justify-center pt-10">
                  <div className="w-full max-w-md">
                    <h2 className="text-xl font-semibold mb-4">Billing Setup</h2>
                    <div className="mb-2 block">
                      <Label htmlFor="currencies" value="Select your Currency" />
                    </div>
                    <Select
                      id="currencies"
                      required
                      className="border border-gray-300 rounded p-2 text-center focus:outline-none focus:ring-2 focus:ring-blue-600"
                    >
                      <option>So'm</option>
                      <option>USD</option>
                      <option>RU</option>
                      <option>QZ</option>
                    </Select>
                  </div>
                </div>
                <div className="flex justify-end items-end mt-10">
                  {/* <Button type="button" className="w-32 text-right">
                  Submit
                </Button> */}
                  {/* <button
                    onClick={() => setStep("third")}
                    className="text-red-700 font-bold text-lg "
                  >
                    Back
                  </button> */}
                </div>
              </div>
            </>
          ) : (
            ""
          )}
          {step === "fourth" ? (
            <>
              <div className="flex justify-between items-center mt-10">
                <Button type="submit">Submit</Button>
                <button
                  onClick={() => setStep("third")}
                  className="text-red-700 font-bold text-lg "
                >
                  Back
                </button>
              </div>
            </>
          ) : (
            ""
          )}
        </form>
      </div>
    </div>
  );
}

export default Register;
