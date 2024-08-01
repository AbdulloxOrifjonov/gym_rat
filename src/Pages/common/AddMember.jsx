/** @format */

import React from "react";
import { Button, Label, TextInput } from "flowbite-react";

import { Datepicker } from "flowbite-react";
import { Dropdown } from "flowbite-react";

function AddMember() {
  return (
    <div>
      <form>
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
          <div className="flex items-start justify-start gap-10">
            <h3 className="text-start">* Requierd field</h3>
            <div className="flex max-w-md flex-col gap-4">
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
              {/* //! Address */}
              <div className="flex items-center justify-center gap-5"></div>
              <Button type="submit">Submit</Button>
            </div>
          </div>
        </div>
        <div className="address w-full flex items-start justify-start gap-[90px] mt-5">
          <div>
            <h2>Address</h2>
          </div>
          <div className="w-[448px] flex flex-col gap-4">
            <div className="input_1_qator flex items-center justify-between">
              <div className="w-[47%]">
                <div className="mb-2 block">
                  <Label htmlFor="street" value="STREET ADDRESS" />
                </div>
                <TextInput id="street" type="text" placeholder="Street Address" required />
              </div>
              <div className="w-[47%]">
                <div className="mb-2 block">
                  <Label htmlFor="city" value="City" />
                </div>
                <TextInput id="city" type="text" placeholder="Street Address" required />
              </div>
            </div>
            <div className="input_2_qator flex items-center justify-between">
              <div className="w-[47%]">
                <div className="mb-2 block">
                  <Label htmlFor="state" value="State" />
                </div>
                <TextInput id="state" type="text" placeholder="State" required />
              </div>
              <div className="w-[47%]">
                <div className="mb-2 block">
                  <Label htmlFor="country" value="COUNTRY" />
                </div>
                <TextInput id="country" type="text" placeholder="Country" required />
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddMember;
