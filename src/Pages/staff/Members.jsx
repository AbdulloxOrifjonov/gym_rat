/** @format */

import React, { useContext, useEffect, useState } from "react";
import { Label, TextInput, Button, Table } from "flowbite-react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
import axios from "axios";

function Members() {
  const navigate = useNavigate();
  const [members, setMembers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const { auth, refreshToken } = useContext(AuthContext);

  useEffect(() => {
    getMembers();
  }, [currentPage, auth]);

  const [loading, setLoading] = useState(false);
  const resetAccess = async () => {
    setLoading(true);
    await refreshToken();
    setLoading(false);
  };

  const getMembers = async () => {
    try {
      const response = await axios.get(
        `https://gymrat.uz/api/v1/member/pagination?page=${currentPage}`,
        {
          headers: {
            Authorization: `Bearer ${auth.accessToken}`,
            "Content-Type": "application/json",
          },
          withCredentials: true,
        },
      );
      setMembers(response.data.data);
      setTotalPages(response.data.totalPages || 1); // Agar totalPages API-da mavjud bo‘lmasa, 1 deb qabul qilamiz
    } catch (error) {
      console.error(error.response?.data);
      if (error.response.data.message === "Invalid token") {
        await resetAccess();
      }
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="w-full p-3 rounded-xl bg-slate-200">
      <div className="flex flex-col gap-4 w-full p-3">
        <div className="mb-2 block">
          <Label htmlFor="username" color="success" value="Your name" />
        </div>
        <div className="flex gap-4">
          <TextInput
            id="username"
            placeholder="Search first or last name . . ."
            required
            color="success"
            className="w-80"
          />
          <Link to={"/employee/add/member"} className="flex">
            <Button className="w-52" type="submit">
              ADD MEMBER
            </Button>
          </Link>
          <Button color="dark">INVITE</Button>
        </div>
      </div>
      <div>
        <Button.Group>
          <Button color="gray">Members</Button>
        </Button.Group>
      </div>
      <div>
        <div className="overflow-x-auto">
          <Table>
            <Table.Head>
              <Table.HeadCell>Member</Table.HeadCell>
              <Table.HeadCell>Contact</Table.HeadCell>
              <Table.HeadCell>Age</Table.HeadCell>
              <Table.HeadCell>Rank / Level</Table.HeadCell>
              <Table.HeadCell>MEMBERSHIP</Table.HeadCell>
              <Table.HeadCell>LAST VISIT</Table.HeadCell>
              <Table.HeadCell>BILLING STATUS</Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y">
              {members ? (
                members.map((member) => (
                  <Table.Row
                    key={member.id}
                    className="bg-white dark:border-gray-700 dark:bg-gray-800"
                  >
                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                      {member.fullname}
                    </Table.Cell>
                    <Table.Cell>{member.phone}</Table.Cell>
                    <Table.Cell>{member.age}</Table.Cell>
                    <Table.Cell>{member.rank || "No Ranking"}</Table.Cell>
                    <Table.Cell>{member.membership || "Monthly full"}</Table.Cell>
                    <Table.Cell>{member.lastVisit || ""}</Table.Cell>
                    <Table.Cell>{member.billingStatus || "540.000"}</Table.Cell>
                  </Table.Row>
                ))
              ) : (
                <Table.Row>
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    Loading...
                  </Table.Cell>
                  <Table.Cell></Table.Cell>
                  <Table.Cell>Loading...</Table.Cell>
                  <Table.Cell>Loading...</Table.Cell>
                  <Table.Cell>Loading...</Table.Cell>
                  <Table.Cell>Loading...</Table.Cell>
                  <Table.Cell>Loading...</Table.Cell>
                </Table.Row>
              )}
            </Table.Body>
          </Table>
        </div>
        <div className="flex justify-center mt-4">
          <Button.Group>
            {Array.from({ length: totalPages }, (_, i) => (
              <Button
                key={i + 1}
                color={i + 1 === currentPage ? "dark" : "gray"}
                onClick={() => handlePageChange(i + 1)}
              >
                {i + 1}
              </Button>
            ))}
          </Button.Group>
        </div>
      </div>
    </div>
  );
}

export default Members;
