/** @format */

import React, { useEffect } from "react";
import { Tabs } from "flowbite-react";
import { Table } from "flowbite-react";
import { HiUserCircle } from "react-icons/hi";
import { MdDashboard } from "react-icons/md";
import { Button, Label, TextInput } from "flowbite-react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

function Staff() {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("token_owner")) {
      navigate("/");
    }
  }, [navigate]);

  const { register, reset, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
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
                <Table.HeadCell>Gym name</Table.HeadCell>
                <Table.HeadCell>Delete vs Edit</Table.HeadCell>
              </Table.Head>
              <Table.Body className="divide-y">
                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    {"Abdullox"}
                  </Table.Cell>
                  <Table.Cell>+998330119901</Table.Cell>
                  <Table.Cell>Anjumaniya</Table.Cell>
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
                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    Ayub
                  </Table.Cell>
                  <Table.Cell>+998900000000</Table.Cell>
                  <Table.Cell>damolish</Table.Cell>
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
                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    Rustam
                  </Table.Cell>
                  <Table.Cell>+998335544878</Table.Cell>
                  <Table.Cell>Kok jiguli</Table.Cell>
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
              </Table.Body>
            </Table>
          </div>
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
                    required
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
                    <Label htmlFor="gymIds" value="GymIds" />
                  </div>
                  <TextInput
                    {...register("gymIds")}
                    id="gymIds"
                    type="text"
                    placeholder="GymIds"
                    required
                  />
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
