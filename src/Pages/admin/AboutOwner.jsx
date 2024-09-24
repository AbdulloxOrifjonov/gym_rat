/** @format */

import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { GoTrash } from "react-icons/go";
import { CiEdit } from "react-icons/ci";
import { Link, useParams } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
import gymOwner from "../../images/gym-owner.jpg";
import { Button, Table, Tabs, Modal, TextInput } from "flowbite-react";
import { HiUserCircle } from "react-icons/hi";

function AboutOwner() {
  const [gyms, setGyms] = useState([]);
  const { auth, refreshToken } = useContext(AuthContext);
  const [owner, setOwner] = useState({ fullname: "", phone: "" });
  const { id } = useParams();

  const [isOwnerModalOpen, setOwnerModalOpen] = useState(false);
  const [isGymModalOpen, setGymModalOpen] = useState(false);
  const [selectedGym, setSelectedGym] = useState(null);

  const getGyms = async (ownerId) => {
    try {
      const response = await axios.get(`https://gymrat.uz/api/v1/gym/all?employerId=${ownerId}`, {
        headers: {
          Authorization: `Bearer ${auth.accessToken}`,
          "Content-Type": "application/json",
        },
      });
      setGyms(response?.data.data);
    } catch (error) {
      console.error(error.response);
      if (error.response.data.message === "Invalid token") {
        refreshToken();
      }
    }
  };

  const getOwner = async (id) => {
    try {
      const response = await axios.get(`https://gymrat.uz/api/v1/employer/${id}`, {
        headers: {
          authorization: `Bearer ${auth.accessToken}`,
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

  const handleDeleteGym = async (gymId) => {
    try {
      await axios.delete(`https://gymrat.uz/api/v1/gym/${gymId}`, {
        headers: {
          Authorization: `Bearer ${auth.accessToken}`,
        },
      });
      setGyms(gyms.filter((gym) => gym._id !== gymId));
    } catch (error) {
      console.error("Failed to delete gym", error);
    }
  };

  const handleEditGym = (gym) => {
    setSelectedGym(gym);
    setGymModalOpen(true);
  };

  const handleEditOwner = () => {
    setOwnerModalOpen(true);
  };

  const handleDeleteOwner = async () => {
    try {
      await axios.delete(`https://gymrat.uz/api/v1/employer/${id}`, {
        headers: {
          Authorization: `Bearer ${auth.accessToken}`,
        },
      });
    } catch (error) {
      console.error("Failed to delete owner", error);
    }
  };

  const handleSaveOwner = async () => {
    try {
      await axios.put(
        `https://gymrat.uz/api/v1/employer/${id}`,
        { fullname: owner.fullname, phone: owner.phone },
        {
          headers: {
            Authorization: `Bearer ${auth.accessToken}`,
          },
        },
      );
      setOwnerModalOpen(false);
    } catch (error) {
      console.error("Failed to update owner", error);
    }
  };

  const handleSaveGym = async () => {
    if (!selectedGym) return;

    try {
      await axios.put(
        `https://gymrat.uz/api/v1/gym/${selectedGym._id}`,
        { name: selectedGym.name },
        {
          headers: {
            Authorization: `Bearer ${auth.accessToken}`,
          },
        },
      );
      setGymModalOpen(false);
    } catch (error) {
      console.error("Failed to update gym", error);
    }
  };

  useEffect(() => {
    if (id) {
      getOwner(id);
      getGyms(id);
    }
  }, [id]);

  return (
    <div className="flex">
      {/* Owner Section */}
      <div className="h-screen w-80 bg-gradient-to-b from-indigo-800 to-indigo-800 text-white flex flex-col">
        <div className="flex flex-col bg-cyan-600 h-screen">
          <div className="flex justify-between items-center w-full px-4 py-2">
            <Link to={"/admin/dashboard"}>
              <Button className="bg-blue-600 text-white px-4 rounded-lg hover:bg-blue-700">
                Back
              </Button>
            </Link>
            <div className="bg-green-400 flex items-center justify-center w-24 h-10 rounded-full hover:bg-green-700 shadow-lg">
              <p className="text-white font-semibold cursor-pointer">Active</p>
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
          <div className="justify-start mt-4">
            <p className="ml-3">PERSONAL DETAILS</p>
            <div className="h-[1px] mt-2 bg-slate-400 ml-3"></div>
            <div className="mt-3">
              <p className="flex justify-between pr-3 px-3">
                <span>Number</span>
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
              <Table.Head className="bg-blue-900 dark:bg-blue-900">
                <Table.HeadCell>ID</Table.HeadCell>
                <Table.HeadCell>FULLNAME</Table.HeadCell>
                <Table.HeadCell>PHONE</Table.HeadCell>
                <Table.HeadCell></Table.HeadCell>
              </Table.Head>
              <Table.Body className="bg-teal-400">
                <Table.Row className="items-center">
                  <Table.Cell className="text-slate-200">1</Table.Cell>
                  <Table.Cell className="text-slate-200">{owner.fullname}</Table.Cell>
                  <Table.Cell className="text-slate-200">{owner.phone}</Table.Cell>
                  <Table.Cell>
                    <div className="flex space-x-4">
                      <GoTrash
                        className="text-2xl cursor-pointer text-slate-200"
                        onClick={handleDeleteOwner}
                      />
                      <CiEdit
                        className="text-2xl cursor-pointer text-slate-200"
                        onClick={handleEditOwner}
                      />
                    </div>
                  </Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
          </Tabs.Item>

          <Tabs.Item title="Gyms" className="ml-3" icon={HiUserCircle}>
            <Table className="w-full">
              <Table.Head className="bg-blue-900 dark:bg-blue-900">
                <Table.HeadCell>FULLNAME</Table.HeadCell>
                <Table.HeadCell>Edit / Delete</Table.HeadCell>
              </Table.Head>
              {gyms?.map((gym) => (
                <Table.Body key={gym._id} className="bg-teal-400">
                  <Table.Row className="items-center">
                    <Table.Cell className="text-slate-200">{gym.name}</Table.Cell>
                    <Table.Cell>
                      <div className="flex space-x-4">
                        <GoTrash
                          className="text-2xl cursor-pointer text-slate-200"
                          onClick={() => handleDeleteGym(gym._id)}
                        />
                        <CiEdit
                          className="text-2xl cursor-pointer text-slate-200"
                          onClick={() => handleEditGym(gym)}
                        />
                      </div>
                    </Table.Cell>
                  </Table.Row>
                </Table.Body>
              ))}
            </Table>
          </Tabs.Item>
        </Tabs>
      </div>

      {/* Edit Owner Modal */}
      <Modal show={isOwnerModalOpen} onClose={() => setOwnerModalOpen(false)}>
        <Modal.Header>Edit Owner</Modal.Header>
        <Modal.Body>
          <TextInput
            id="ownerFullName"
            placeholder="Full Name"
            value={owner.fullname}
            onChange={(e) => setOwner({ ...owner, fullname: e.target.value })}
          />
          <TextInput
            id="ownerPhone"
            placeholder="Phone"
            value={owner.phone}
            onChange={(e) => setOwner({ ...owner, phone: e.target.value })}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleSaveOwner}>Save</Button>
          <Button color="gray" onClick={() => setOwnerModalOpen(false)}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Edit Gym Modal */}
      <Modal show={isGymModalOpen} onClose={() => setGymModalOpen(false)}>
        <Modal.Header>Edit Gym</Modal.Header>
        <Modal.Body>
          <TextInput
            id="gymName"
            placeholder="Gym Name"
            value={selectedGym?.name || ""}
            onChange={(e) => setSelectedGym({ ...selectedGym, name: e.target.value })}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleSaveGym}>Save</Button>
          <Button color="gray" onClick={() => setGymModalOpen(false)}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default AboutOwner;
