/** @format */

import React, { useEffect, useState } from "react";
import { Table, Pagination } from "flowbite-react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AdminDashboard() {
  const [owners, setOwners] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/admin/login");
    } else {
      const fetchOwners = async () => {
        try {
          const response = await axios.get(
            `https://gymrat.uz/api/v1/employer/pagination?page=${currentPage}&pageSize=10`,
            {
              headers: {
                authorization: localStorage.getItem("token"),
              },
            },
          );
          console.log(response.data.data);
          setOwners(response.data.data);
          setTotalPages(response.data.employersCount); // API dan totalPages ni oling
        } catch (error) {
          console.error("Error fetching owners:", error);
        }
      };

      fetchOwners();
    }
  }, [currentPage, navigate]);

  const onPageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div>
      <div className="overflow-x-auto">
        <Table>
          <Table.Head>
            <Table.HeadCell>Fullname</Table.HeadCell>
            <Table.HeadCell>Phone number</Table.HeadCell>
            <Table.HeadCell>Delete vs Edit</Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            {owners?.map((owner) => (
              <Table.Row key={owner.id} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {owner.fullname}
                </Table.Cell>
                <Table.Cell>{owner.phone}</Table.Cell>
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
