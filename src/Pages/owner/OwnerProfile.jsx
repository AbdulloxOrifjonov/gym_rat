/** @format */

import { Button, Table, TableHead, Tabs, TextInput } from "flowbite-react";
import { HiUserCircle } from "react-icons/hi";
import { HiMiniLockClosed } from "react-icons/hi2";
import React from "react";
import { Link } from "react-router-dom";

function EmployerProfile() {
  const owner_name = localStorage.getItem("fullname_owner");

  return (
    <div className="min-h-screen bg-dark-blue p-8">
      <Tabs aria-label="Employer Profile Tabs" variant="underline" className="text-white">
        <Tabs.Item active title="General information" icon={HiUserCircle}>
          <div className="overflow-x-auto">
            {/* General Info Section */}
            <Table className="bg-white rounded-lg shadow-md mb-6">
              <Table.Body>
                <Table.Cell className="whitespace-nowrap font-semibold text-dark-blue text-2xl">
                  {owner_name || "Employer Name"}
                </Table.Cell>
              </Table.Body>
              <Table.Body>
                <Table.Cell className="whitespace-nowrap font-semibold text-dark-blue text-2xl">
                  Login
                </Table.Cell>
              </Table.Body>
            </Table>

            {/* Email and Password Reset Section */}
            <Table className="bg-white rounded-lg shadow-md mb-6">
              <Table.Head>
                <Table.HeadCell>Email</Table.HeadCell>
                <TextInput
                  id="username"
                  placeholder="email"
                  required
                  type="email"
                  className="w-1/2 mt-2 shadow-sm focus:ring focus:ring-blue-500"
                />
              </Table.Head>
              <div className="mt-3"></div>
              <Table.Head>
                <Table.HeadCell>Reset Password</Table.HeadCell>
                <TextInput
                  id="password"
                  placeholder="password"
                  required
                  type="password"
                  className="w-1/2 mt-2 shadow-sm focus:ring focus:ring-blue-500"
                />
                <p className="text-sm text-gray-500 mt-1">
                  Leave blank unless you want to reset the password.
                </p>
              </Table.Head>
            </Table>

            {/* Personal Info Section */}
            <Table className="bg-white rounded-lg shadow-md mb-6">
              <Table.Body>
                <Table.Cell className="whitespace-nowrap font-semibold text-dark-blue text-2xl">
                  Personal Info
                </Table.Cell>
              </Table.Body>
            </Table>

            {/* Personal Information Inputs */}
            <Table className="bg-white rounded-lg shadow-md">
              <TableHead>
                <Table.HeadCell>First Name</Table.HeadCell>
                <TextInput
                  id="firstName"
                  placeholder="First name"
                  required
                  className="w-1/2 mt-2 shadow-sm focus:ring focus:ring-blue-500"
                />
              </TableHead>
              <div className="mt-3"></div>
              <TableHead>
                <Table.HeadCell>Last Name</Table.HeadCell>
                <TextInput
                  id="lastName"
                  placeholder="Last name"
                  required
                  className="w-1/2 mt-2 shadow-sm focus:ring focus:ring-blue-500"
                />
              </TableHead>

              {/* Address and Phone Number */}
              <div className="mt-3"></div>
              <TableHead>
                <Table.HeadCell>Address 1</Table.HeadCell>
                <TextInput
                  id="address"
                  placeholder="Your address 1"
                  required
                  type="text"
                  className="w-1/2 mt-2 shadow-sm focus:ring focus:ring-blue-500"
                />
              </TableHead>
              <div className="mt-3"></div>
              <TableHead>
                <Table.HeadCell>Phone number</Table.HeadCell>
                <TextInput
                  id="phoneNumber"
                  placeholder="+998946170777"
                  required
                  type="number"
                  className="w-1/2 mt-2 shadow-sm focus:ring focus:ring-blue-500"
                />
              </TableHead>

              {/* More Address Details */}
              <div className="mt-3"></div>
              <TableHead>
                <Table.HeadCell>Street address</Table.HeadCell>
                <TextInput
                  id="street_address"
                  placeholder="Street address"
                  required
                  className="w-1/2 mt-2 shadow-sm focus:ring focus:ring-blue-500"
                />
              </TableHead>
              <div className="mt-3"></div>
              <TableHead>
                <Table.HeadCell>City</Table.HeadCell>
                <TextInput
                  id="city"
                  placeholder="City"
                  required
                  className="w-1/2 mt-2 shadow-sm focus:ring focus:ring-blue-500"
                />
              </TableHead>
              <div className="mt-3"></div>
              <TableHead>
                <Table.HeadCell>State</Table.HeadCell>
                <TextInput
                  id="state"
                  placeholder="State"
                  required
                  className="w-1/2 mt-2 shadow-sm focus:ring focus:ring-blue-500"
                />
              </TableHead>
              <div className="mt-3"></div>
              <TableHead>
                <Table.HeadCell>Country</Table.HeadCell>
                <TextInput
                  id="country"
                  placeholder="Country"
                  required
                  className="w-1/2 mt-2 shadow-sm focus:ring focus:ring-blue-500"
                />
              </TableHead>

              <Button className="mt-5 bg-blue-500 hover:bg-blue-600 text-white rounded-lg shadow-md">
                Submit
              </Button>
            </Table>
          </div>
        </Tabs.Item>

        {/* Change Password Section */}
        <Tabs.Item title="Change Password" icon={HiMiniLockClosed}>
          <Table className="bg-white rounded-lg shadow-md">
            <Table.Head>
              <Table.HeadCell>
                <TextInput
                  type="password"
                  placeholder="Old password"
                  required
                  className="w-full mt-2 shadow-sm focus:ring focus:ring-blue-500"
                />
                <TextInput
                  type="password"
                  placeholder="New password"
                  required
                  className="w-full mt-4 shadow-sm focus:ring focus:ring-blue-500"
                />
                <TextInput
                  type="password"
                  placeholder="Confirm password"
                  required
                  className="w-full mt-4 shadow-sm focus:ring focus:ring-blue-500"
                />
                <Link to="/forgetPassword">
                  <p className="text-end mt-3 cursor-pointer text-blue-500 hover:text-blue-800">
                    Forgot password?
                  </p>
                </Link>
                <Button className="mt-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg shadow-md">
                  Submit
                </Button>
              </Table.HeadCell>
            </Table.Head>
          </Table>
        </Tabs.Item>
      </Tabs>
    </div>
  );
}

export default EmployerProfile;
