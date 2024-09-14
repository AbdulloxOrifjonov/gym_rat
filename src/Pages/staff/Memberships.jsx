/** @format */

import { Table, Tabs } from "flowbite-react";
import React, { useEffect } from "react";
import { HiUserCircle } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

function Memberships() {
  const navigate = useNavigate();

  return (
    <Tabs aria-label="Tabs with underline" variant="underline">
      <Tabs.Item active title="Member Ship List" icon={HiUserCircle}>
        <div>
          <Table>
            <Table.Head>
              <Table.HeadCell>Owner</Table.HeadCell>
              <Table.HeadCell>payment amount</Table.HeadCell>
              <Table.HeadCell>Start date</Table.HeadCell>
              <Table.HeadCell>DELETE VS EDIT</Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y">
              <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {"Abdullox"}
                </Table.Cell>
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  Tekinga kevotti
                </Table.Cell>
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  21/08/2024
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
              </Table.Row>
            </Table.Body>
          </Table>
        </div>
      </Tabs.Item>
    </Tabs>
  );
}

export default Memberships;
