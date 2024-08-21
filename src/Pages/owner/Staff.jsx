/** @format */

import React, { useEffect } from "react";
import { Tabs } from "flowbite-react";
import { Table } from "flowbite-react";
import { HiUserCircle } from "react-icons/hi";
import { MdDashboard } from "react-icons/md";
import { Button, Label, TextInput } from "flowbite-react";
import { useNavigate } from "react-router-dom";

function Staff() {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("token_owner")) {
      navigate("/");
    }
  }, [navigate]);

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
            <form className="flex max-w-md flex-col gap-4 w-full">
              <div className="flex items-center justify-between">
                <div className="w-[48%]">
                  <div className="mb-2 block">
                    <Label htmlFor="firstname" value="Firstname" />
                  </div>
                  <TextInput id="firstname" type="text" placeholder="Firstname" required />
                </div>
                <div className="w-[48%]">
                  <div className="mb-2 block">
                    <Label htmlFor="lastname" value="Lastname" />
                  </div>
                  <TextInput id="lastname" type="text" placeholder="Lastname" required />
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="w-[48%]">
                  <div className="mb-2 block">
                    <Label htmlFor="phone" value="Phone number" />
                  </div>
                  <TextInput id="phone" type="text" placeholder="Phone number" required />
                </div>
                <div className="w-[48%]">
                  <div className="mb-2 block">
                    <Label htmlFor="gender" value="Gender" />
                  </div>
                  <TextInput id="gender" type="text" placeholder="Gender" required />
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="w-[48%]">
                  <div className="mb-2 block">
                    <Label htmlFor="password1" value="Password" />
                  </div>
                  <TextInput id="password1" type="password" placeholder="Password" required />
                </div>
                <div className="w-[48%]">
                  <div className="mb-2 block">
                    <Label htmlFor="password2" value="Confirm password" />
                  </div>
                  <TextInput
                    id="passwor2"
                    type="password"
                    placeholder="Confirm password"
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
