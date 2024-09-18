/** @format */

import React, { useContext, useEffect, useState } from "react";
import { GoTrash } from "react-icons/go";
import { CiEdit } from "react-icons/ci";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Button, Table, Tabs } from "flowbite-react";
import { HiUserCircle } from "react-icons/hi";
import { AuthContext } from "../../context/AuthProvider";
import axios from "axios";

function AboutMember() {
  const { auth, refreshToken } = useContext(AuthContext);
  const [member, setMember] = useState([]);
  const [membership, setMembership] = useState([]);
  const navigate = useNavigate();

  const id = useParams();
  const ID = id.id;

  const [loading, setLoading] = useState(false);
  const resetAccess = async () => {
    setLoading(true);
    await refreshToken();
    setLoading(false);
  };

  useEffect(() => {
    getMembership(ID);
    getMember(ID);
  }, []);

  const query = 1;

  const getMember = async (id) => {
    try {
      const response = await axios.get(`https://gymrat.uz/api/v1/member/${id}`, {
        headers: {
          Authorization: `Bearer ${auth.accessToken}`,
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });
      console.log(response);
      setMember(response.data.data);
    } catch (error) {
      console.error(error.response?.data);
      if (error.response?.data?.message === "Invalid token") {
        await resetAccess();
      }
    }
  };

  const getMembership = async (id) => {
    try {
      const response = await axios.get(
        `https://gymrat.uz/api/v1/membership/pagination/${id}?page=${query}`,
        {
          headers: {
            Authorization: `Bearer ${auth.accessToken}`,
            "Content-Type": "application/json",
          },
          withCredentials: true,
        },
      );
      console.log(response);
      setMembership(response.data.data);
    } catch (error) {
      console.error(error.response?.data);
      if (error.response?.data?.message === "Invalid token") {
        await resetAccess();
      }
    }
  };

  const memberDelete = async (id) => {
    // alert(id);
    try {
      const response = await axios.delete(`https://gymrat.uz/api/v1/member/${id}`, {
        headers: {
          Authorization: `Bearer ${auth.accessToken}`,
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });
      console.log(response);
      navigate("/employee/members");
    } catch (error) {
      console.error(error.response?.data);
      if (error.response?.data?.message === "Invalid token") {
        await resetAccess();
      }
    }
  };

  return (
    <div>
      <div className="flex">
        <div className="h-screen w-80 bg-gradient-to-b from-indigo-800 to-indigo-800 text-white flex flex-col">
          <div className="flex flex-col bg-cyan-600 h-screen">
            <div className="flex justify-between items-center w-full px-4 py-2">
              <Link to={"/employee/members"}>
                <Button className="bg-blue-600 text-white px-4  rounded-lg hover:bg-blue-700">
                  Back
                </Button>
              </Link>

              <GoTrash
                className="text-2xl cursor-pointer text-slate-200"
                onClick={() => memberDelete(member._id)}
              />

              {/* <div className="bg-green-400 flex items-center justify-center w-24 h-10 rounded-full  hover:bg-green-700 shadow-lg">
                <p className="text-white font-semibold">Active</p>
              </div> */}
            </div>
            <div className="flex flex-col items-center w-full">
              <div className="w-[100px] h-[100px] mt-4">
                <img
                  src={member.image}
                  className="w-full h-full rounded-full object-cover"
                  alt="Gym Owner"
                />
              </div>
              <div>
                <p className="text-[20px]">{member.fullname}</p>
              </div>
            </div>
            <div className=" justify-start mt-4">
              <p className="ml-3">PERSONAL DETAILS</p>
              <div className=" h-[1px] mt-2 bg-slate-400 ml-3"></div>
              <div className="mt-3">
                <p className="flex justify-between pr-3 px-3">
                  <span className="">Number</span>
                  <span>{member.phone}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="p-3 w-full">
          <Tabs className="w-full" aria-label="Default tabs" variant="default">
            <Tabs.Item active title="Memberships" icon={HiUserCircle}>
              <Table className="w-full">
                <Table.Head className="bg-blue-900  dark:bg-blue-900">
                  <Table.HeadCell>FULLNAME</Table.HeadCell>
                  <Table.HeadCell>Created At</Table.HeadCell>
                  <Table.HeadCell>Duration</Table.HeadCell>
                  <Table.HeadCell>Limit</Table.HeadCell>
                  <Table.HeadCell>Payment Amount</Table.HeadCell>
                  {/* <Table.HeadCell>Settings</Table.HeadCell> */}
                </Table.Head>
                {membership.map((data) => (
                  <Table.Body key={data._id} className="bg-teal-400">
                    <Table.Row className="items-center">
                      <Table.Cell className="text-slate-200">{member.fullname}</Table.Cell>
                      <Table.Cell className="text-slate-200">{data.createdAt}</Table.Cell>
                      <Table.Cell className="text-slate-200">
                        <h3> From: {data.duration.from}</h3>
                        <h3>To: {data.duration.to}</h3>
                      </Table.Cell>
                      <Table.Cell className="text-slate-200">
                        <h3> From: {data.limit?.from}</h3>
                        <h3>To: {data.limit?.to}</h3>
                      </Table.Cell>
                      <Table.Cell className="text-slate-200">{data.paymentAmount}</Table.Cell>
                      {/* <Table.Cell>
                        <div className="flex space-x-4">
                          <GoTrash className="text-2xl cursor-pointer text-slate-200" />
                          <CiEdit className="text-2xl cursor-pointer text-slate-200" />
                        </div>
                      </Table.Cell> */}
                    </Table.Row>
                  </Table.Body>
                ))}
              </Table>
            </Tabs.Item>

            {/* <Tabs.Item title="Gyms" className="ml-3" icon={HiUserCircle}>
              <Table className="w-full">
                <Table.Head className="bg-blue-900  dark:bg-blue-900">
                  <Table.HeadCell>FULLNAME</Table.HeadCell>
                  <Table.HeadCell>Edit / Delete</Table.HeadCell>
                </Table.Head>
                <Table.Body className="bg-teal-400">
                  <Table.Row className=" items-center">
                    <Table.Cell className="text-slate-200">Abdullox</Table.Cell>
                    <Table.Cell>
                      <div className="flex space-x-4">
                        <GoTrash className="text-2xl cursor-pointer text-slate-200" />
                        <CiEdit className="text-2xl cursor-pointer text-slate-200" />
                      </div>
                    </Table.Cell>
                  </Table.Row>
                </Table.Body>
                <hr />
              </Table>
            </Tabs.Item> */}
          </Tabs>
        </div>
      </div>
    </div>
  );
}

export default AboutMember;
