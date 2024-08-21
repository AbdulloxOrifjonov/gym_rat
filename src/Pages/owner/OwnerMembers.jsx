/** @format */

import React, { useEffect } from "react";
import { Label, TextInput } from "flowbite-react";
import { Button } from "flowbite-react";
import { Table } from "flowbite-react";
import { useNavigate } from "react-router-dom";

function Members() {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("token_owner")) {
      navigate("/");
    }
  }, [navigate]);
  return (
    <div className="w-full p-3 rounded-xl bg-slate-200">
      <div className="flex flex-col gap-4 w-full p-3 ">
        <div className="mb-2 block">
          <Label htmlFor="username3" color="success" value="Your name" />
        </div>
        <div className="flex gap-4">
          <TextInput
            id="username"
            placeholder="Search first or last name . . ."
            required
            color="success"
            className="w-80"
          />
          <Button className="w-52" type="submit">
            ADD MEMBER
          </Button>
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
              <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {"Abdullox"}
                </Table.Cell>
                <Table.Cell>+998330119901</Table.Cell>
                <Table.Cell>17</Table.Cell>
                <Table.Cell>No Ranking</Table.Cell>
                <Table.Cell>Monthly full</Table.Cell>
                <Table.Cell></Table.Cell>
                <Table.Cell>540.000</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </div>
      </div>
    </div>
  );
}

export default Members;
