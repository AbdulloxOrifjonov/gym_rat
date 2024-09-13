/** @format */

import React, { useContext, useEffect, useState } from "react";
import { Tabs, Table, Pagination, Button, Label, TextInput, Select } from "flowbite-react";
import { HiUserCircle } from "react-icons/hi";
import { MdDashboard } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import { AuthContext } from "../../context/AuthProvider";

function Staff() {
  const [gyms, setGyms] = useState(null);
  const [employees, setEmployees] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const navigate = useNavigate();
  const { auth, setAuth, refreshToken } = useContext(AuthContext);

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
      if (error.response.data.message === "Invalid token") {
        await refreshToken();
      }
    }
  };

  const getStaffs = async () => {
    try {
      const response = await axios.get(
        `https://gymrat.uz/api/v1/employee/pagination?page=${currentPage}&pageSize=10`,
        {
          headers: {
            Authorization: `Bearer ${auth.accessToken}`,
            "Content-Type": "application/json",
          },
        },
      );
      setEmployees(response.data.data);
      const pages = response.data.employersCount;
      setTotalPages(pages > 0 ? pages : 1);
    } catch (error) {
      if (error.response.data.message === "Invalid token") {
        await refreshToken();
      }
      setTotalPages(1);
    }
  };

  useEffect(() => {
    getGyms();
    getStaffs();
  }, []);

  const onPageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const { register, reset, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    data.gymIds = [data.gymIds];

    try {
      const response = await axios.post("https://gymrat.uz/api/v1/employee/register", data, {
        headers: {
          Authorization: `Bearer ${auth.accessToken}`,
          "Content-Type": "application/json",
        },
      });
      reset();
    } catch (error) {
      if (error.response.data.message === "Invalid token") {
        await refreshToken();
      }
    }
  };

  return (
    <div className="min-h-screen p-10 text-white">
      <Tabs aria-label="Staff Management" variant="underline">
        <Tabs.Item active title="Staff" className="text-white" icon={HiUserCircle}>
          <div className="overflow-x-auto">
            <Table className="min-w-full bg-[#0A0F29] rounded-xl text-white">
              <Table.Head className="bg-blue-900 dark:bg-blue-900 border-b border-blue-700 dark:border-blue-600">
                <Table.HeadCell className="text-gray-300">Fullname</Table.HeadCell>
                <Table.HeadCell className="text-gray-300">Phone number</Table.HeadCell>
                <Table.HeadCell className="text-gray-300">Actions</Table.HeadCell>
              </Table.Head>
              <Table.Body className="divide-y divide-gray-700">
                {employees ? (
                  employees.map((employee) => (
                    <Table.Row
                      key={employee._id}
                      className="bg-blue-900 dark:bg-blue-800 hover:bg-blue-800 dark:hover:bg-blue-700 transition duration-300"
                    >
                      <Table.Cell className="font-medium text-white dark:text-gray-200">
                        {employee.fullname}
                      </Table.Cell>
                      <Table.Cell className="text-white dark:text-gray-300">
                        {employee.phone}
                      </Table.Cell>
                      <Table.Cell>
                        <div className="flex items-center gap-2">
                          <button className="text-cyan-400 hover:text-cyan-200 transition duration-200">
                            Edit
                          </button>
                          <button className="text-red-400 hover:text-red-200 transition duration-200">
                            Delete
                          </button>
                        </div>
                      </Table.Cell>
                    </Table.Row>
                  ))
                ) : (
                  <div className="w-full pl-5 pb-5 pt-4">
                    <h1 className="text-[30px]">Loading . . .</h1>
                  </div>
                )}
              </Table.Body>
            </Table>
          </div>
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages > 0 ? totalPages : 1}
            onPageChange={onPageChange}
            className="pagination text-white"
          />
        </Tabs.Item>
        <Tabs.Item title="Add Staff" icon={MdDashboard}>
          <div className="flex justify-center mt-10">
            <form onSubmit={handleSubmit(onSubmit)} className="max-w-md w-full flex flex-col gap-4">
              <div className="flex justify-between">
                <div className="w-[48%]">
                  <Label htmlFor="employerId" value="EmployerId" />
                  <TextInput
                    {...register("employerId")}
                    id="employerId"
                    type="text"
                    placeholder="EmployerId"
                    value={localStorage.getItem("employer_id")}
                    readOnly
                    required
                    className="bg-blue-900 text-white border border-gray-600"
                  />
                </div>
                <div className="w-[48%]">
                  <Label htmlFor="fullname" value="Fullname" />
                  <TextInput
                    {...register("fullname")}
                    id="fullname"
                    type="text"
                    placeholder="Fullname"
                    required
                    className="bg-blue-900 text-white border border-gray-600"
                  />
                </div>
              </div>
              <div className="flex justify-between">
                <div className="w-[48%]">
                  <Label htmlFor="phone" value="Phone number" />
                  <TextInput
                    {...register("phone")}
                    id="phone"
                    type="text"
                    placeholder="Phone number"
                    required
                    className="bg-blue-900 text-white border border-gray-600"
                  />
                </div>
                <div className="w-[48%]">
                  <Label htmlFor="gymIds" value="Select Gym" />
                  <Select
                    id="gymIds"
                    {...register("gymIds")}
                    required
                    className="bg-blue-900 text-white border border-gray-600"
                  >
                    {gyms?.map((gym) => (
                      <option key={gym._id} value={gym._id} className="text-black">
                        {gym.name}
                      </option>
                    ))}
                  </Select>
                </div>
              </div>
              <div className="flex justify-between">
                <div className="w-[48%]">
                  <Label htmlFor="password1" value="Password" />
                  <TextInput
                    {...register("password")}
                    id="password1"
                    type="password"
                    placeholder="Password"
                    required
                    className="bg-blue-900 text-white border border-gray-600"
                  />
                </div>
                <div className="w-[48%]">
                  <Label htmlFor="email1" value="Email" />
                  <TextInput
                    id="email1"
                    type="email"
                    placeholder="Email"
                    {...register("email")}
                    required
                    className="bg-blue-900 text-white border border-gray-600"
                  />
                </div>
              </div>
              <Button type="submit" className="bg-cyan-600 hover:bg-cyan-400 text-white">
                Submit
              </Button>
            </form>
          </div>
        </Tabs.Item>
      </Tabs>
    </div>
  );
}

export default Staff;
