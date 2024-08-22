/** @format */

import { Button, Table, TableHead, Tabs, TextInput } from "flowbite-react";
import { HiUserCircle } from "react-icons/hi";
import { HiMiniLockClosed } from "react-icons/hi2";
import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

function Profile() {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("token_owner")) {
      navigate("/");
    }
  }, [navigate]);

  const owner_name = localStorage.getItem("fullname_owner");

  return (
    <div>
      <Tabs aria-label="Tabs with underline" variant="underline">
        <Tabs.Item active title="General information" icon={HiUserCircle}>
          <div className="overflow-x-auto">
            <Table>
              <Table.Body>
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white text-2xl">
                  {owner_name}
                </Table.Cell>
              </Table.Body>
              <Table.Body>
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white text-2xl">
                  Login
                </Table.Cell>
              </Table.Body>
            </Table>
            <Table className="">
              <Table.Head>
                <Table.HeadCell>Email</Table.HeadCell>
                <TextInput
                  id="username"
                  placeholder="email"
                  required
                  type="email"
                  color="dark"
                  className="w-1/2"
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
                  color="dark"
                  className="w-1/2"
                />
                <p className="">Leave blank unless you want to reset the password.</p>
              </Table.Head>
            </Table>
            <Table className="mt-20">
              <Table.Body>
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white text-2xl">
                  Personal Info
                </Table.Cell>
              </Table.Body>
            </Table>
            <Table>
              <TableHead>
                <Table.HeadCell>First Name</Table.HeadCell>
                <TextInput
                  id="firstName"
                  placeholder="fist name"
                  required
                  type="text"
                  color="dark"
                  className="w-1/2"
                />
              </TableHead>
              <div className="mt-3"></div>
              <TableHead>
                <Table.HeadCell>Last Name</Table.HeadCell>
                <TextInput
                  id="lastName"
                  placeholder="last name"
                  required
                  type="text"
                  color="dark"
                  className="w-1/2"
                />
              </TableHead>
              <div className="mt-3"></div>
              <TableHead>
                <Table.HeadCell>Address 1</Table.HeadCell>
                <TextInput
                  id="address"
                  placeholder="your address 1"
                  required
                  type="text"
                  color="dark"
                  className="w-1/2"
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
                  color="dark"
                  className="w-1/2"
                />
              </TableHead>
              <div className="mt-3"></div>
              <TableHead>
                <Table.HeadCell>Street address</Table.HeadCell>
                <TextInput
                  id="street_address"
                  placeholder="Street address"
                  required
                  type="text"
                  color="dark"
                  className="w-1/2"
                />
              </TableHead>
              <div className="mt-3"></div>
              <TableHead>
                <Table.HeadCell>City</Table.HeadCell>
                <TextInput
                  id="city"
                  placeholder="City"
                  required
                  type="text"
                  color="dark"
                  className="w-1/2"
                />
              </TableHead>
              <div className="mt-3"></div>
              <TableHead>
                <Table.HeadCell>State</Table.HeadCell>
                <TextInput
                  id="state"
                  placeholder="State"
                  required
                  type="text"
                  color="dark"
                  className="w-1/2"
                />
              </TableHead>

              <TableHead>
                <Table.HeadCell>Country</Table.HeadCell>
                <TextInput
                  id="country"
                  placeholder="Country"
                  required
                  type="text"
                  color="dark"
                  className="w-1/2 mt-3"
                />
              </TableHead>

              <Button className="mt-3">Submit</Button>
            </Table>
          </div>
        </Tabs.Item>
        <Tabs.Itemactive title="Change Password" icon={HiMiniLockClosed}>
          <Table>
            <Table.Head>
              <Table.HeadCell>
                <TextInput type="password" placeholder="Old password" required />
                <TextInput type="password" placeholder="New password" required className="mt-4" />
                <TextInput
                  type="password"
                  placeholder="Confirm password"
                  required
                  className="mt-4"
                />
                <Link to="/forgetPassword">
                  <p className="text-end mt-3 cursor-pointer text-blue-500 hover:text-blue-800">
                    Forgot password?
                  </p>
                </Link>
                <Button className="mt-3">Submit</Button>
              </Table.HeadCell>
            </Table.Head>
          </Table>
        </Tabs.Itemactive>
      </Tabs>
    </div>
  );
}
export default Profile;
