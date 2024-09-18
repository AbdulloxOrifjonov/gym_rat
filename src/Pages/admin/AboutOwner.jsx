/** @format */

import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { GoTrash } from "react-icons/go";
import { CiEdit } from "react-icons/ci";
import { Link, useParams } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
import gymOwner from "../../images/gym-owner.jpg";
import { Button, Table, Tabs } from "flowbite-react";
import { HiUserCircle } from "react-icons/hi";
function AboutOwner() {
  const [gyms, setGyms] = useState([]);
  const { auth, refreshToken } = useContext(AuthContext);
  const [owner, setOwner] = useState([]); // initial state null
  const { id } = useParams();

  // eslint-disable-next-line
  const getGyms = async (ownerId) => {
    try {
      const response = await axios.get(`https://gymrat.uz/api/v1/gym/all?employerId=${ownerId}`, {
        headers: {
          Authorization: `Bearer ${auth.accessToken}`,
          "Content-Type": "application/json",
        },
      });
      console.log(response);
      setGyms(response?.data.data);
    } catch (error) {
      console.error(error.response);
      if (error.response.data.message === "Invalid token") {
        refreshToken();
      }
    }
  };
  // eslint-disable-next-line
  const getOwner = async (id) => {
    try {
      const response = await axios.get(`https://gymrat.uz/api/v1/employer/${id}`, {
        headers: {
          authorization: ` Bearer ${auth.accessToken}`,
        },
      });
      setOwner(response.data.data);
    } catch (error) {
      console.error(error);
      if (error.response.data.message === "Invalid token") {
        refreshToken();
      }
    }
  };

  useEffect(() => {
    if (id) {
      getOwner(id);
      getGyms(id);
    }
  }, [id]);
  // eslint-disable-next-lineif (!owner) {

  return (
    <div className="flex">
      <div className="h-screen w-80 bg-gradient-to-b from-indigo-800 to-indigo-800 text-white flex flex-col">
        <div className="flex flex-col bg-cyan-600 h-screen">
          <div className="flex justify-between items-center w-full px-4 py-2">
            <Link to={"/admin/dashboard"}>
              <Button className="bg-blue-600 text-white px-4  rounded-lg hover:bg-blue-700">
                Back
              </Button>
            </Link>
            <div className="bg-green-400 flex items-center justify-center w-24 h-10 rounded-full  hover:bg-green-700 shadow-lg">
              <p className="text-white font-semibold">Active</p>
            </div>
          </div>
          <div className="flex flex-col items-center w-full">
            <div className="w-[100px] h-[100px] mt-4">
              <img
                src={gymOwner}
                className="w-full h-full rounded-full object-cover"
                alt="Gym Owner"
              />
            </div>
            <div>
              <p className="text-[20px]">{owner.fullname}</p>
            </div>
          </div>
          <div className=" justify-start mt-4">
            <p className="ml-3">PERSONAL DETAILS</p>
            <div className=" h-[1px] mt-2 bg-slate-400 ml-3"></div>
            <div className="mt-3">
              <p className="flex justify-between pr-3 px-3">
                <span className=""> Number</span>
                <span>{owner.phone}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="p-3 w-full">
        <Tabs className="w-full" aria-label="Default tabs" variant="default">
          <Tabs.Item active title="Profile" icon={HiUserCircle}>
            <Table className="w-full">
              <Table.Head className="bg-blue-900  dark:bg-blue-900">
                <Table.HeadCell>ID</Table.HeadCell>
                <Table.HeadCell>FULLNAME</Table.HeadCell>
                <Table.HeadCell>PHONE</Table.HeadCell>
                <Table.HeadCell></Table.HeadCell>
              </Table.Head>
              <Table.Body className="bg-teal-400">
                <Table.Row className=" items-center">
                  <Table.Cell className="text-slate-200">1</Table.Cell>
                  <Table.Cell className="text-slate-200">{owner.fullname}</Table.Cell>
                  <Table.Cell className="text-slate-200">{owner.phone}</Table.Cell>
                  <Table.Cell>
                    <div className="flex space-x-4">
                      <GoTrash className="text-2xl cursor-pointer text-slate-200" />
                      <CiEdit className="text-2xl cursor-pointer text-slate-200" />
                    </div>
                  </Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
          </Tabs.Item>

          <Tabs.Item title="Gyms" className="ml-3" icon={HiUserCircle}>
            <Table className="w-full">
              <Table.Head className="bg-blue-900  dark:bg-blue-900">
                <Table.HeadCell>FULLNAME</Table.HeadCell>
                <Table.HeadCell>Edit / Delete</Table.HeadCell>
              </Table.Head>
              {gyms?.map((gym) => (
                <>
                  <Table.Body key={gym._id} className="bg-teal-400">
                    <Table.Row className=" items-center">
                      <Table.Cell className="text-slate-200">{gym.name}</Table.Cell>
                      <Table.Cell>
                        <div className="flex space-x-4">
                          <GoTrash className="text-2xl cursor-pointer text-slate-200" />
                          <CiEdit className="text-2xl cursor-pointer text-slate-200" />
                        </div>
                      </Table.Cell>
                    </Table.Row>
                  </Table.Body>
                  <hr />
                </>
              ))}
            </Table>
          </Tabs.Item>
        </Tabs>
      </div>
    </div>
  );
}
export default AboutOwner;
