/** @format */

import React, { useContext, useEffect, useState } from "react";
import { Tabs } from "flowbite-react";
import { HiUserCircle } from "react-icons/hi";
import { Select } from "flowbite-react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
import axios from "axios";
import { useForm } from "react-hook-form";

function AddMembership() {
  const navigate = useNavigate();
  const { register, handleSubmit, reset, watch } = useForm();
  const { auth, refreshToken, activeGym } = useContext(AuthContext);
  const [members, setMembers] = useState([]);
  const [gyms, setGyms] = useState([]);
  const [limit, setLimit] = useState(true); // Limit uchun holat
  const [limitAttendance, setLimitAttendance] = useState(true);
  const [loading, setLoading] = useState(false);

  const resetAccess = async () => {
    setLoading(true);
    await refreshToken();
    setLoading(false);
  };

  useEffect(() => {
    getMembers();
    getGyms();
  }, [auth]);

  const getGyms = async () => {
    try {
      const response = await axios.get("https://gymrat.uz/api/v1/gym/all", {
        headers: {
          Authorization: `Bearer ${auth.accessToken}`,
          "Content-Type": "application/json",
        },
      });
      setGyms(response.data.data);
    } catch (error) {
      if (error.response?.data?.message === "Invalid token") {
        await resetAccess();
      }
    }
  };

  const getMembers = async () => {
    try {
      const response = await axios.get(
        `https://gymrat.uz/api/v1/member/pagination?gymId=${localStorage.getItem("activeGym")}`,
        {
          headers: {
            Authorization: `Bearer ${auth.accessToken}`,
            "Content-Type": "application/json",
          },
          withCredentials: true,
        },
      );
      setMembers(response.data.data);
    } catch (error) {
      if (error.response?.data?.message === "Invalid token") {
        await resetAccess();
      }
    }
  };

  const onSubmit = async (data) => {
    const membershipData = {
      memberId: data.memberId,
      gymId: activeGym,
      duration: {
        from: data.durationFrom,
        to: data.durationTo,
      },
      paymentAmount: Number(data.paymentAmount),
    };

    if (limit) {
      membershipData.limit = {
        from: data.limitFrom || "00:00",
        to: data.limitTo || "23:59",
      };
    }

    if (limitAttendance) {
      membershipData.attendanceCount = Number(data.attendanceCount) || 0;
      membershipData.attendanceType = data.attendanceType || "Limited";
    }

    if (!membershipData.attendanceType) {
      membershipData.attendanceType = "Unlimited";
    }

    console.log(membershipData);

    try {
      const response = await axios.post("https://gymrat.uz/api/v1/membership", membershipData, {
        headers: {
          Authorization: `Bearer ${auth.accessToken}`,
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });
      console.log(response);
      reset();
    } catch (error) {
      console.error(error.response?.data);
      if (error.response?.data?.message === "Invalid token") {
        await resetAccess();
      }
    }
  };

  return (
    <div>
      <Tabs aria-label="Default tabs" variant="default">
        <Tabs.Item active title="Profile" icon={HiUserCircle}>
          <div className="flex w-full items-center justify-center flex-col">
            <div className="w-[800px] rounded-t-xl bg-blue-800 flex items-center justify-center h-14">
              <h2 className="text-white font-semibold text-lg">Add Membership Option</h2>
            </div>

            <div className="w-[800px] bg-gray-200 p-7 shadow-md rounded-b-xl">
              <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
                <div className="flex w-full gap-6">
                  <div className="w-1/2">
                    <label className="block text-gray-700 font-medium mb-2">Member ID</label>
                    <Select id="memberId" {...register("memberId", { required: true })}>
                      {members.map((member) => (
                        <option key={member._id} value={member._id}>
                          {member.fullname}
                        </option>
                      ))}
                    </Select>
                  </div>

                  {/* <div className="w-1/2">
                    <label className="block text-gray-700 font-medium mb-2">Gym ID</label>
                    <Select id="gymId" {...register("gymId", { required: true })}>
                      {gyms.map((gym) => (
                        <option key={gym._id} value={gym._id}>
                          {gym.name}
                        </option>
                      ))}
                    </Select>
                  </div> */}
                </div>

                <div className="flex w-full gap-6">
                  <div className="w-1/2">
                    <label className="block text-gray-700 font-medium mb-2">Limit</label>
                    <select
                      id="limit"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md"
                      onChange={(e) => setLimit(e.target.value === "Limited")}
                      required
                    >
                      <option value="Limited">Limited</option>
                      <option value="Un Limited">Un Limited</option>
                    </select>

                    {limit && (
                      <div className="flex gap-3 mt-4">
                        <input
                          type="time"
                          {...register("limitFrom")}
                          className="w-1/2 px-3 py-2 border border-gray-300 rounded-md"
                          placeholder="Limit From"
                        />
                        <input
                          type="time"
                          {...register("limitTo")}
                          className="w-1/2 px-3 py-2 border border-gray-300 rounded-md"
                          placeholder="Limit To"
                        />
                      </div>
                    )}
                  </div>

                  <div className="w-1/2">
                    <label className="block text-gray-700 font-medium mb-2">Payment Amount</label>
                    <input
                      id="paymentAmount"
                      type="number"
                      {...register("paymentAmount", { required: true })}
                      placeholder="Enter Payment Amount"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md"
                      required
                    />
                  </div>
                </div>

                <div className="w-full">
                  <label className="block text-gray-700 font-medium mb-2">Attendance Limit</label>
                  <select
                    id="attendanceLimit"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    onChange={(e) => setLimitAttendance(e.target.value === "Limited")}
                    // {...register("attendanceType", { required: limitAttendance })}
                    required
                  >
                    <option value="Limited">Limited</option>
                    <option value="Un Limited">Un Limited</option>
                  </select>

                  {limitAttendance && (
                    <div className="flex w-full gap-6 mt-4">
                      <div className="w-1/2">
                        <label className="block text-gray-700 font-medium mb-2">
                          Attendance Count
                        </label>
                        <input
                          id="attendanceCount"
                          type="number"
                          {...register("attendanceCount", { required: limitAttendance })}
                          placeholder="Enter Attendance Count"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md"
                          required
                        />
                      </div>
                      <div className="w-1/2">
                        <label className="block text-gray-700 font-medium mb-2">
                          Attendance Type
                        </label>
                        <input
                          id="attendanceType"
                          type="text"
                          value={"Limited"}
                          {...register("attendanceType")}
                          required
                          className="w-full px-3 py-2 border border-gray-300 rounded-md"
                        />
                      </div>
                    </div>
                  )}
                </div>

                <div className="flex w-full gap-6">
                  <div className="w-1/2">
                    <label className="block text-gray-700 font-medium mb-2">From</label>
                    <input
                      type="date"
                      id="durationFrom"
                      {...register("durationFrom", { required: true })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    />
                  </div>
                  <div className="w-1/2">
                    <label className="block text-gray-700 font-medium mb-2">To</label>
                    <input
                      type="date"
                      id="durationTo"
                      {...register("durationTo", { required: true })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="mt-6 bg-blue-600 text-white font-medium py-2 rounded-md hover:bg-blue-700"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </Tabs.Item>
      </Tabs>
    </div>
  );
}

export default AddMembership;
