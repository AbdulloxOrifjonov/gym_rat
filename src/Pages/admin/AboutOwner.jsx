import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { GoTrash } from "react-icons/go";
import { CiEdit } from "react-icons/ci";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
import gymOwner from "../../images/gym-owner.jpg";
import { Button, Table, Tabs } from "flowbite-react";
import { HiUserCircle } from "react-icons/hi";
function AboutOwner() {
  const [gyms, setGyms] = useState([]);
  const { auth } = useContext(AuthContext);
  const [owner, setOwner] = useState(null); // initial state null
  const { id } = useParams();
  const [tabShow, setTabShow] = useState(0);
  const getGyms = async (ownerId) => {
    try {
      const response = await axios.get(
        `https://gymrat.uz/api/v1/gym/all?employerId=${ownerId}`,
        {
          headers: {
            Authorization: `Bearer ${auth.accessToken}`,
            "Content-Type": "application/json",
          },
        }
      );
      setGyms(response.data.data);
      console.log(response.data);
    } catch (error) {
      console.log(error.response.data);
    }
  };
  // eslint-disable-next-line
  const getOwner = async (id) => {
    try {
      const response = await axios.get(
        `https://gymrat.uz/api/v1/employer/${id}`,
        {
          headers: {
            authorization: `Bearer ${auth.accessToken}`,
          },
        }
      );
      setOwner(response.data.data);
      console.log(response.data);
      console.log(owner);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (id) {
      getOwner(id);
      getGyms(id);
      console.log(gyms);
    }
  }, [id]);
  // eslint-disable-next-line

  if (!owner) {
    return (
      <div className="text-white text-center">Loading owner details...</div>
    );
  }

  return (
    <div className="flex">
      <div className="h-screen w-80 bg-gradient-to-b from-indigo-800 to-indigo-800 text-white flex flex-col">
        <div className="flex flex-col bg-cyan-600 h-screen">
          <div className="flex flex-col items-center w-full">
            <div className="w-[100px] h-[100px] mt-4">
              <img
                src={gymOwner}
                className="w-full h-full rounded-full object-cover"
                alt="Gym Owner"
              />
            </div>
            <div className="bg-green-400 items-center justify-center w-16 mt-5">
              <p className="text-center">Active</p>
            </div>
            <div>
              <p className="text-3xl">Jonka</p>
            </div>
          </div>
          <div className=" justify-start mt-4">
            <p className="ml-3">PERSONAL DETAILS</p>
            <div className=" h-[1px] mt-2 bg-slate-400 ml-3"></div>
            <div className="mt-3">
              <p className="flex justify-between pr-3 px-3">
                <span className=""> Number</span>
                <span>+998946170777</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <Tabs className="w-full" aria-label="Default tabs" variant="default">
        <Tabs.Item active title="Profile" icon={HiUserCircle}>
          <Table className="w-full">
            <Table.Head className="bg-blue-900 dark:bg-blue-900">
              <Table.HeadCell>ID</Table.HeadCell>
              <Table.HeadCell>FULLNAME</Table.HeadCell>
              <Table.HeadCell>PHONE</Table.HeadCell>
              <Table.HeadCell></Table.HeadCell>
            </Table.Head>
            <Table.Body className="bg-slate-400">
              <Table.Row className=" items-center">
                <Table.Cell>1</Table.Cell>
                <Table.Cell>John</Table.Cell>
                <Table.Cell>+998946170777</Table.Cell>
                <Table.Cell>
                  <div className="flex space-x-4">
                    <GoTrash className="text-2xl cursor-pointer" />
                    <CiEdit className="text-2xl cursor-pointer" />
                  </div>
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </Tabs.Item>

        <Tabs.Item
          title="Gyms"
          className="ml-3"
          icon={HiUserCircle}
        ></Tabs.Item>
      </Tabs>
    </div>
  );
}

export default AboutOwner;
