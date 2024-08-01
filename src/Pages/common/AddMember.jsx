/** @format */

import React from "react";
import { Button, Label, TextInput } from "flowbite-react";

import { Datepicker } from "flowbite-react";
import { Dropdown } from "flowbite-react";

function AddMember() {
  return (
    <div>
      <div className="member_details">
        <div className="flex items-center justify-start gap-10">
          <h2>Member Details</h2>
          <div className="flex items-center gap-2">
            <input type="radio" id="visitor" />
            <label htmlFor="visitor">Visitor</label>
          </div>
          <div className="flex items-center gap-2">
            <input type="radio" id="member" />
            <label htmlFor="member">Member</label>
          </div>
        </div>
        <div className="flex items-center justify-start gap-10">
          <h3>* Requierd field</h3>
          <div>
            <form className="flex max-w-md flex-col gap-4">
              <div className="flex items-center justify-center gap-5">
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="firstName" value="* FIRST NAME" />
                  </div>
                  <TextInput id="firstName" type="text" placeholder="First Name" required />
                </div>
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="lastName" value="* LAST NAME" />
                  </div>
                  <TextInput id="lastName" type="text" placeholder="LAST NAME" required />
                </div>
                <div className="w-32">
                  <div className="mb-2 block">
                    <Label htmlFor="gander" value="* GANDER" />
                  </div>
                  <Dropdown label="Gander" id="gander" dismissOnClick={false}>
                    <Dropdown.Item>Erkak</Dropdown.Item>
                    <Dropdown.Item>Ayol</Dropdown.Item>
                    <Dropdown.Item>Bilmayman</Dropdown.Item>
                  </Dropdown>
                </div>
              </div>
              <div className="flex items-center justify-center gap-5">
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="phone" value="PHONE NUMBER" />
                  </div>
                  <TextInput id="phone" type="phone" placeholder="PHONE NUMBER" />
                </div>
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="email" value="EMAIL ADDRESS" />
                  </div>
                  <TextInput id="email" type="email" placeholder="EMAIL ADDRESS" required />
                </div>
                <div>
                  <div className="mb-2 block">
                    <Label value="DATE OF BIRTH" />
                  </div>
                  <Datepicker />
                </div>
              </div>
              <Button type="submit">Submit</Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddMember;
