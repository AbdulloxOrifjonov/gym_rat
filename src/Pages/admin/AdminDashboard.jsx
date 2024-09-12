/** @format */

import React, { useContext, useEffect, useState } from "react";
import { Table, Pagination } from "flowbite-react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";

function AdminDashboard() {
  // eslint-disable-next-line
  const { auth, setAuth } = useContext(AuthContext);

  const [owners, setOwners] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const navigate = useNavigate();

  console.log(auth);

  useEffect(() => {
    const fetchOwners = async () => {
      try {
        const response = await axios.get(
          `https://gymrat.uz/api/v1/employer/pagination?page=${currentPage}&pageSize=10`,
          {
            headers: {
              authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
          },
        );
        console.log(response.data.data);
        setOwners(response.data.data);
        setTotalPages(response.data.employersCount);
      } catch (error) {
        console.error("Error fetching owners:", error);
      }
    };

    fetchOwners();
    // eslint-disable-next-line
  }, [currentPage, navigate]);

  const onPageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };
  const aboutOwner = (id) => {
    console.log(id);
    navigate(`owner/${id}`);
  };

  return (
    <div>
      <div className="overflow-x-auto">
        <Table>
          <Table.Head className="bg-blue-900 dark:bg-blue-900">
            <Table.HeadCell>Fullname</Table.HeadCell>
            <Table.HeadCell>Phone number</Table.HeadCell>
            <Table.HeadCell>Delete vs Edit</Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            {owners?.map((owner) => (
              <Table.Row
                key={owner._id}
                className="bg-blue-900 dark:bg-blue-800 border-b border-blue-700 dark:border-blue-600 hover:bg-blue-800 dark:hover:bg-blue-700 transition-colors duration-300"
                onClick={() => aboutOwner(owner._id)}
              >
                <Table.Cell className="whitespace-nowrap font-medium text-white dark:text-gray-200">
                  {owner.fullname}
                </Table.Cell>
                <Table.Cell className="text-white dark:text-gray-300">{owner.phone}</Table.Cell>
                <Table.Cell>
                  <div className="flex items-center gap-2">
                    <button className="font-medium text-cyan-300 hover:text-cyan-400 dark:text-cyan-400 dark:hover:text-cyan-300 transition-colors duration-300">
                      Edit
                    </button>
                    <button className="font-medium text-red-300 hover:text-red-400 dark:text-red-400 dark:hover:text-red-300 transition-colors duration-300">
                      Delete
                    </button>
                  </div>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>
      <div className="flex overflow-x-auto sm:justify-center">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages > 0 ? totalPages : 1} // totalPages 1 yoki undan katta bo'lishini ta'minlash
          onPageChange={onPageChange}
          className="pagination"
        />
      </div>
    </div>
  );
}

export default AdminDashboard;
