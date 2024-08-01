/** @format */

import React, { useState } from "react";

function CheckIn() {
  const [inputValue, setInputValue] = useState("");

  const handleClick = (number) => {
    setInputValue((prevValue) => prevValue + number);
  };

  return (
    <div className="flex justify-center items-start min-h-screen bg-gray-100 p-6">
      <div className="grid grid-cols-3 gap-4 w-full max-w-7xl">
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Today's Sessions</h2>
          <div className="mb-2">Unscheduled</div>
          <div className="flex items-center mb-2">
            <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
            <span>G-10</span>
            <button className="ml-2 text-gray-500"></button>
          </div>
          <div className="text-gray-500">90 minutes</div>
          <button className="mt-4 bg-gray-200 text-gray-700 px-4 py-2 rounded">
            Add Unscheduled Session
          </button>
        </div>

        <div className="bg-teal-800 p-6  rounded-lg shadow-md flex flex-col items-center justify-center">
          <h1>
            <span className="text-white cursor-pointer hover:text-teal-300 hover:underline">
              Enter Code
            </span>{" "}
            <span className="text-white hover:text-teal-300 hover:underline ml-2">Name Search</span>
          </h1>
          <h2 className="text-2xl mt-2 font-semibold text-white mb-4">Check-In</h2>
          <input
            type="text"
            value={inputValue}
            readOnly
            placeholder="Enter check-in code..."
            className="text-lg p-2 w-72 text-center border border-gray-300 rounded"
          />
          <div className="grid grid-cols-3 gap-2 mb-4 mt-4">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, "x", 0, "✓"]?.map((number, index) => (
              <div key={index}>
                <button
                  key={index}
                  onClick={() => handleClick(number)}
                  className="bg-teal-500 px-7 py-5 text-white rounded-full text-lg"
                >
                  {number}
                </button>
              </div>
            ))}
          </div>
          <button className="bg-green-500 text-white px-4 py-2 rounded">Check In</button>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Recent Check-ins</h2>
          <p className="text-gray-500">No check-ins yet today</p>
          <button className="mt-4 bg-green-500 text-white px-4 py-2 rounded">All Check-ins</button>
        </div>
      </div>
    </div>
  );
}
export default CheckIn;
