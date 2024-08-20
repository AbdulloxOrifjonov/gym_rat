/** @format */

import React from "react";
import { Table } from "flowbite-react";

function AdminDashboard() {
  return (
    <div>
      <div className="overflow-x-auto">
        <Table>
          <Table.Head>
            <Table.HeadCell>Fullname</Table.HeadCell>
            <Table.HeadCell>Phone number</Table.HeadCell>
            <Table.HeadCell>Gym name</Table.HeadCell>
            <Table.HeadCell>Delete vs Edit</Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {"Abdullox"}
              </Table.Cell>
              <Table.Cell>+998330119901</Table.Cell>
              <Table.Cell>Anjumaniya</Table.Cell>
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
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                Ayub
              </Table.Cell>
              <Table.Cell>+998900000000</Table.Cell>
              <Table.Cell>damolish</Table.Cell>
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
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                Rustam
              </Table.Cell>
              <Table.Cell>+998335544878</Table.Cell>
              <Table.Cell>Kok jiguli</Table.Cell>
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
    </div>
  );
}

export default AdminDashboard;
