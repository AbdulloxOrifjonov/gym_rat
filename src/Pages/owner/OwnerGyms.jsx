/** @format */

import { Table, Tabs } from "flowbite-react";
import React, { useEffect } from "react";
import { HiUserCircle } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

function OwnerGyms() {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("token_owner")) {
      navigate("/");
    }
  }, [navigate]);
  return (
    <Tabs aria-label="Tabs with underline" variant="underline">
      <Tabs.Item active title="Gyms" icon={HiUserCircle}>
        <div>
          <Table>
            <Table.Head>
              <Table.HeadCell>Owner</Table.HeadCell>
              <Table.HeadCell>Gym Name</Table.HeadCell>
              <Table.HeadCell>Status</Table.HeadCell>
              <Table.HeadCell>DELETE VS EDIT</Table.HeadCell>
            </Table.Head>
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Body>
                <img
                  src="data:image/png;base64,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"
                  alt=""
                />
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {"Abdullox"}
                </Table.Cell>
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  16/08/2024
                </Table.Cell>
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {"Active"}
                </Table.Cell>
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
              </Table.Body>
            </Table.Row>
          </Table>
        </div>
      </Tabs.Item>
      <Tabs.Item active title="Add Gyms" icon={HiUserCircle}>
        <div>
          <Table>
            <Table.Body></Table.Body>
          </Table>
        </div>
      </Tabs.Item>
    </Tabs>
  );
}

export default OwnerGyms;
