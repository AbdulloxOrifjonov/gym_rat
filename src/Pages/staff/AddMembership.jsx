/** @format */

import React, { useEffect, useState } from "react";
import { Tabs } from "flowbite-react";
import { HiUserCircle } from "react-icons/hi";
import { TextInput } from "flowbite-react";
import { Select } from "flowbite-react";
import { Datepicker } from "flowbite-react";
import { useNavigate } from "react-router-dom";
import { AutoComplete } from "primereact/autocomplete";

function AddMembership() {
  const navigate = useNavigate();

  const [value, setValue] = useState("");
  const [items, setItems] = useState([]);

  const search = (event) => {
    setItems([...Array(10).keys()].map((item) => event.query + "-" + item));
  };

  const [limit, setLimit] = useState(true);

  return (
    <div>
      <Tabs aria-label="Default tabs" variant="default">
        <Tabs.Item active title="Profile" icon={HiUserCircle}>
          <div className="flex w-full items-center justify-center flex-col">
            {/* Header */}
            <div className="w-[800px] rounded-t-xl bg-blue-800 flex items-center justify-center h-14">
              <h2 className="text-white font-semibold text-lg">Add Membership Option</h2>
            </div>

            {/* Form Container */}
            <div className="w-[800px] bg-gray-200 p-7 shadow-md rounded-b-xl">
              <form className="flex items-start flex-col justify-center w-full gap-6">
                {/* Member ID and Gym ID */}
                <div className="flex w-full gap-6">
                  {/* Member ID Input */}
                  <div className="w-1/2">
                    <label className="block text-gray-700 font-medium mb-2">Member ID</label>
                    <input
                      id="memberId"
                      type="text"
                      placeholder="Enter Member ID"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>

                  {/* Gym ID Input */}
                  <div className="w-1/2">
                    <label className="block text-gray-700 font-medium mb-2">Gym ID</label>
                    <input
                      id="gymId"
                      type="text"
                      placeholder="Enter Gym ID"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                </div>

                {/* Limit and Payment Amount */}
                <div className="flex w-full gap-6">
                  {/* Limit Select */}
                  <div className="w-1/2">
                    <label className="block text-gray-700 font-medium mb-2">Limit</label>
                    <select
                      id="limit"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      onChange={(e) => setLimit(!limit)}
                      required
                    >
                      <option>Limited</option>
                      <option>Un Limited</option>
                    </select>

                    {/* Time Limit Inputs */}
                    {limit === true ? (
                      <div className="flex items-center gap-3 mt-4">
                        <input
                          type="time"
                          className="w-1/2 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="Enter a limit"
                        />
                        <input
                          type="time"
                          className="w-1/2 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="Enter a limit"
                        />
                      </div>
                    ) : (
                      <h2 className="mt-4 text-gray-500">Unlimited</h2>
                    )}
                  </div>

                  {/* Payment Amount */}
                  <div className="w-1/2">
                    <label className="block text-gray-700 font-medium mb-2">Payment Amount</label>
                    <input
                      id="paymentAmount"
                      type="number"
                      placeholder="Enter Payment Amount"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                </div>

                {/* Duration Inputs */}
                <div className="flex w-full gap-6">
                  <div className="w-1/2">
                    <label className="block text-gray-700 font-medium mb-2">From</label>
                    <Datepicker
                      id="durationFrom"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      weekStart={1} // Monday
                    />
                  </div>
                  <div className="w-1/2">
                    <label className="block text-gray-700 font-medium mb-2">To</label>
                    <Datepicker
                      id="durationTo"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      weekStart={1} // Monday
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <div className="w-full flex items-center justify-between mt-6">
                  <div className="card w-[200px] flex justify-center items-center">
                    <AutoComplete
                      value={value}
                      suggestions={items}
                      completeMethod={search}
                      onChange={(e) => setValue(e.value)}
                      className="z-50 bg-white px-3 py-2 border border-gray-300 rounded-md"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-28 h-11 rounded-xl text-white bg-blue-700 hover:bg-blue-600 transition duration-200"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </Tabs.Item>
      </Tabs>
    </div>
  );
}

export default AddMembership;
