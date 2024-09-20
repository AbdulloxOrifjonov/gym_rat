/** @format */

import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";

function OwnerAboutGym() {
  const navigate = useNavigate();
  const [gym, setGym] = useState(null);
  const { auth, refreshToken } = useContext(AuthContext);

  const [loading, setLoading] = useState(false);
  const resetAccess = async () => {
    setLoading(true);
    await refreshToken();
    setLoading(false);
  };

  const getGym = async () => {
    try {
      const response = await axios.get(
        `https://gymrat.uz/api/v1/gym/${localStorage.getItem("gym_id")}`,
        {
          headers: {
            Authorization: `Bearer ${auth.accessToken}`,
            "Content-Type": "application/json",
          },
        },
      );
      console.log(response);
      setGym(response.data.data); // Update state with the fetched data
    } catch (error) {
      console.error(error.response.data);
      if (error.response.data.message === "Invalid token") {
        await resetAccess();
      }
    }
  };

  useEffect(() => {
    getGym();
  }, [navigate, loading]);

  return (
    <div className="flex justify-center mt-8">
      {gym ? (
        <div className="max-w-lg rounded-xl overflow-hidden shadow-lg bg-gradient-to-b from-gray-800 to-gray-900 p-8 text-white flex flex-col items-center">
          <img
            src={gym.logo}
            alt={gym.name}
            className="w-32 h-32 rounded-full object-cover border-4 border-gray-500 shadow-md"
          />
          <h2 className="mt-4 font-bold text-3xl">{gym.name}</h2>
          <p className="text-gray-300 mt-2 text-center">
            Located in {gym.city}, {gym.country}
          </p>
          <p className="text-gray-400 mt-1 text-center">{gym.address}</p>

          <div className="w-full mt-6">
            <h3 className="font-semibold text-lg text-center text-gray-100">Gym Details</h3>
            <div className="grid grid-cols-2 gap-4 mt-4 text-gray-200">
              <div className="text-gray-400">Time Format:</div>
              <div className="text-white font-medium">{gym.timeFormat}</div>
              <div className="text-gray-400">Time Zone:</div>
              <div className="text-white font-medium">{gym.timeZone}</div>
              <div className="text-gray-400">Employees:</div>
              <div className="relative w-full">
                <div className="flex flex-col gap-2 h-[70px] overflow-hidden rounded-lg">
                  <div className="absolute inset-y-0 right-0 w-2 bg-gray-600 opacity-30 rounded-full"></div>
                  <div className="h-full overflow-y-auto pr-3 custom-scroll">
                    {gym.employees.map((employee) => (
                      <div className="text-white font-medium" key={employee.id}>
                        {employee.fullname}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p className="text-center text-gray-400">Loading gym details...</p>
      )}
    </div>
  );
}

export default OwnerAboutGym;
