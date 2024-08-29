import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function OwnerAboutGym() {
  const navigate = useNavigate();
  const [gym, setGym] = useState(null);
  const [staffs, setStaffs] = useState([]);

  useEffect(() => {
    if (!localStorage.getItem("token_owner")) {
      navigate("/");
    } else {
      const getGym = async () => {
        try {
          const response = await axios.get(
            `https://gymrat.uz/api/v1/gym/${localStorage.getItem("gym_id")}`,
            {
              headers: {
                Authorization: `${localStorage.getItem("token_owner")}`,
                "Content-Type": "application/json",
              },
            },
          );
          console.log(response);
          setGym(response.data.data); // Update state with the fetched 
        } catch (error) {
          console.log(error.response.data);
        }
      };
      const getStaffs = async () => {
        try {
          const response = await axios.get(`https://gymrat.uz/api/v1/employee/pagination`, {
            headers: {
              Authorization: `${localStorage.getItem("token_owner")}`,
            },
          });
          console.log(response);
          setStaffs(response.data.data);
        } catch (error) {
          console.error("Error fetching employees:", error);
        }
      };
      getStaffs();
      getGym();
    }
  }, [navigate]);

  return (
    <div className="flex justify-center mt-8">
      {gym ? (
        <div className="max-w-lg rounded overflow-hidden shadow-lg bg-white p-6 flex flex-col items-center">
          <img
            src={gym.logo}
            alt={gym.name}
            className="w-32 h-32 rounded-full object-cover border-4 border-gray-300"
          />
          <h2 className="mt-4 font-bold text-2xl">{gym.name}</h2>
          <p className="text-gray-700 mt-2 text-center">
            Located in {gym.city}, {gym.country}
          </p>
          <p className="text-gray-600 mt-2 text-center">{gym.address}</p>

          <div className="w-full mt-4">
            <h3 className="font-semibold text-lg text-center">Gym Details</h3>
            <div className="grid grid-cols-2 gap-4 mt-2">
              <div className="text-gray-700">Time Format:</div>
              <div className="text-gray-900 font-medium">{gym.timeFormat}</div>
              <div className="text-gray-700">Time Zone:</div>
              <div className="text-gray-900 font-medium">{gym.timeZone}</div>
              <div className="text-gray-700">
                {gym.employees.map((staff) => {
                  const staffMember = staffs.find((st) => st._id === staff);
                  return staffMember ? <h1 key={staff}>{staffMember.name}</h1> : null;
                })}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p className="text-center text-gray-500">Loading gym details...</p>
      )}
    </div>
  );
}

export default OwnerAboutGym;
