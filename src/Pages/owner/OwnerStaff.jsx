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
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
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
      console.log(response);
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

  const getOnlyStaff = async (id) => {
    try {
      const response = await axios.get(`https://gymrat.uz/api/v1/employee/${id}`, {
        headers: {
          Authorization: `Bearer ${auth.accessToken}`,
          "Content-Type": "application/json",
        },
      });
      setSelectedEmployee(response.data.data);
      setIsModalOpen(true);
    } catch (error) {
      if (error.response.data.message === "Invalid token") {
        await refreshToken();
      }
    }
  };
  const deleteEmployee = async (id) => {
    try {
      await axios.delete(`https://gymrat.uz/api/v1/employee/${id}`, {
        headers: {
          Authorization: `Bearer ${auth.accessToken}`,
          "Content-Type": "application/json",
        },
      });
      setIsModalOpen(false);
      getStaffs(); // Refresh staff list
    } catch (error) {
      if (error.response.data.message === "Invalid token") {
        await refreshToken();
      }
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
                      onClick={() => getOnlyStaff(employee._id)}
                      className="bg-blue-900 cursor-pointer dark:bg-blue-800 hover:bg-blue-800 dark:hover:bg-blue-700 transition duration-300"
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

      {/*//! Modal */}
      {isModalOpen && selectedEmployee && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-60 flex items-center justify-center p-4">
          <div className="bg-blue-900 p-6 rounded-lg w-full max-w-lg shadow-lg">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-semibold text-white">Employee Details</h2>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-white text-2xl font-semibold hover:text-gray-300"
              >
                &times;
              </button>
            </div>
            <div className="space-y-4 mb-6">
              <p className="text-white text-lg">
                <strong>Fullname:</strong> {selectedEmployee.fullname}
              </p>
              <h3>GYM:</h3>
              {selectedEmployee.gymIds.map((gym) => (
                <div key={gym._id} className="p-4 bg-blue-800 rounded-lg shadow-md">
                  <div className="flex items-center mb-4">
                    <img
                      src={gym.logo}
                      alt="Gym Logo"
                      className="w-12 h-12 object-cover rounded-full mr-4"
                    />
                    <h3 className="text-xl font-semibold text-white">{gym.name}</h3>
                  </div>
                  <p className="text-white">
                    <strong>Phone:</strong> {gym.phone} <br />
                    <strong>Country:</strong> {gym.country} <br />
                    <strong>Address:</strong> {gym.address} <br />
                    <strong>City:</strong> {gym.city}
                  </p>
                </div>
              ))}
            </div>
            <div className="flex justify-end space-x-4">
              <Button
                onClick={() => deleteEmployee(selectedEmployee._id)}
                className="bg-red-600 hover:bg-red-400 text-white"
              >
                Delete
              </Button>
              <Button
                onClick={() => setIsModalOpen(false)}
                className="bg-gray-600 hover:bg-gray-400 text-white"
              >
                Close
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Staff;
