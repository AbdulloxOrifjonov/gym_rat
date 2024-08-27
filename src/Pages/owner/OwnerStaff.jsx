/** @format */

import React, { useEffect, useState } from "react";
import { Tabs } from "flowbite-react";
import { Table, Pagination } from "flowbite-react";
import { HiUserCircle } from "react-icons/hi";
import { MdDashboard } from "react-icons/md";
import { Button, Label, TextInput, Select } from "flowbite-react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";

function Staff() {
  const [gyms, setGyms] = useState(null);
  const [employees, setEmployees] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("token_owner")) {
      navigate("/");
    } else {
      const getGyms = async () => {
        try {
          const response = await axios.get("https://gymrat.uz/api/v1/gym/all", {
            headers: {
              Authorization: `${localStorage.getItem("token_owner")}`,
              "Content-Type": "application/json",
            },
          });
          setGyms(response.data.data);
        } catch (error) {
          console.log(error.response.data);
        }
      };

      const getStaffs = async () => {
        try {
          const response = await axios.get(
            `https://gymrat.uz/api/v1/employee/pagination?page=${currentPage}&pageSize=10`,
            {
              headers: {
                Authorization: `${localStorage.getItem("token_owner")}`,
              },
            },
          );
          console.log(response);
          setEmployees(response.data.data);
          // Check the totalPages value
          const pages = response.data.employersCount;
          setTotalPages(pages > 0 ? pages : 1); // Set totalPages to at least 1
        } catch (error) {
          console.error("Error fetching employees:", error);
          setTotalPages(1); // Fallback to 1 in case of an error
        }
      };

      getGyms();
      getStaffs(); // Make sure the staff data is fetched on mount
    }
  }, [navigate, currentPage]);

  const onPageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const { register, reset, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    data.gymIds = [data.gymIds]; // gymIds ni array sifatida saqlayapmiz
    console.log(data);

    try {
      const response = await axios.post("https://gymrat.uz/api/v1/employee/register", data, {
        headers: {
          Authorization: `${localStorage.getItem("token_owner")}`,
          "Content-Type": "application/json",
        },
      });
      console.log(response.data);
      reset();
    } catch (error) {
      console.log(error.response.data);
    }
  };

  return (
    <div>
      <Tabs aria-label="Tabs with underline" variant="underline">
        <Tabs.Item active title="Staff" icon={HiUserCircle}>
          <div className="overflow-x-auto">
            <Table>
              <Table.Head>
                <Table.HeadCell>Fullname</Table.HeadCell>
                <Table.HeadCell>Phone number</Table.HeadCell>
                <Table.HeadCell>Actions</Table.HeadCell>
              </Table.Head>
              <Table.Body className="divide-y">
                {employees ? (
                  employees.map((employee) => (
                    <Table.Row
                      key={employee._id}
                      className="bg-white dark:border-gray-700 dark:bg-gray-800"
                    >
                      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                        {employee.fullname}
                      </Table.Cell>
                      <Table.Cell>{employee.phone}</Table.Cell>
                      <Table.Cell>
                        <div className="flex items-center gap-2">
                          <button className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                            Edit
                          </button>
                          <button className="font-medium text-red-600 hover:underline dark:text-red-500">
                            Delete
                          </button>
                        </div>
                      </Table.Cell>
                    </Table.Row>
                  ))
                ) : (
                  <div className="w-full pl-5 pb-5 pt-4">
                    <h1 className="text-[30px] text-black">Loading . . .</h1>
                  </div>
                )}
              </Table.Body>
            </Table>
          </div>
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages > 0 ? totalPages : 1}
            onPageChange={onPageChange}
            className="pagination"
          />
        </Tabs.Item>
        <Tabs.Item title="Add Staff" icon={MdDashboard}>
          <div className="flex items-center justify-center w-full mt-10">
            <form onSubmit={handleSubmit(onSubmit)} className="flex max-w-md flex-col gap-4 w-full">
              <div className="flex items-center justify-between">
                <div className="w-[48%]">
                  <div className="mb-2 block">
                    <Label htmlFor="employerId" value="EmployerId" />
                  </div>
                  <TextInput
                    {...register("employerId")}
                    id="employerId"
                    type="text"
                    placeholder="EmployerId"
                    value={localStorage.getItem("id_owner")}
                    required
                    readOnly
                  />
                </div>
                <div className="w-[48%]">
                  <div className="mb-2 block">
                    <Label htmlFor="fullname" value="Fullname" />
                  </div>
                  <TextInput
                    {...register("fullname")}
                    id="fullname"
                    type="text"
                    placeholder="Fullname"
                    required
                  />
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="w-[48%]">
                  <div className="mb-2 block">
                    <Label htmlFor="phone" value="Phone number" />
                  </div>
                  <TextInput
                    {...register("phone")}
                    id="phone"
                    type="text"
                    placeholder="Phone number"
                    required
                  />
                </div>
                <div className="w-[48%]">
                  <div className="mb-2 block">
                    <Label htmlFor="gymIds" value="Select Gym" />
                  </div>
                  <Select id="gymIds" {...register("gymIds")} required>
                    {gyms?.map((gym) => (
                      <option key={gym._id} value={gym._id}>
                        {gym.name}
                      </option>
                    ))}
                  </Select>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="w-[48%]">
                  <div className="mb-2 block">
                    <Label htmlFor="password1" value="Password" />
                  </div>
                  <TextInput
                    {...register("password")}
                    id="password1"
                    type="password"
                    placeholder="Password"
                    required
                  />
                </div>
                <div className="w-[48%]">
                  <div className="mb-2 block">
                    <Label htmlFor="email1" value="Email" />
                  </div>
                  <TextInput
                    id="email1"
                    type="email"
                    placeholder="Email"
                    {...register("email")}
                    required
                  />
                </div>
              </div>

              <Button type="submit">Submit</Button>
            </form>
          </div>
        </Tabs.Item>
      </Tabs>
    </div>
  );
}

export default Staff;
