/** @format */

import React from "react";
import { Button, Label, TextInput } from "flowbite-react";
import { FileInput } from "flowbite-react";

import { Datepicker } from "flowbite-react";
import { Dropdown } from "flowbite-react";

function AddMember() {
  return (
    <div className="flex justify-center items-center">
      <form className="w-maxflex flex-col items-center justify-center">
        <div className="member_details address p-6 rounded-t-xl bg-slate-200  flex flex-col items-start justify-start gap-[90px]">
          <div className="flex flex-col gap-5">
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
                      <Label htmlFor="gender" value="* GENDER" />
                    </div>
                    <Dropdown label="Gender" id="gender" dismissOnClick={false}>
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
                {/* <Button type="submit">Submit</Button> */}
              </div>
            </div>
          </div>
        </div>
        <div className="address p-6 rounded-b-xl mt-1  flex items-start bg-slate-200 justify-start gap-[90px]">
          <div>
            <h2>Address</h2>
          </div>
          <div className="w-[451px] flex flex-col gap-4">
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
        <div className="photo p-6 rounded-xl  flex items-start bg-slate-200 justify-start gap-[105px] mt-5">
          <div>
            <h2>Photo</h2>
          </div>
          <div className="w-[451px] flex flex-col gap-4">
            <div className="mb-2 block">
              <Label htmlFor="file-upload" value="Upload file" />
            </div>
            <FileInput id="file-upload" />
          </div>
        </div>
        <div className="password p-6 rounded-xl flex items-center bg-slate-200 justify-center gap-[25px] mt-5">
          <div>
            <h2 className="text-[15px]">Account Password</h2>
          </div>
          <div className="flex items-center justify-between w-[448px] gap-4">
            <div className="w-[47%] flex flex-col">
              <div className="mb-2 block">
                <Label
                  htmlFor="password"
                  className="text-[11px]"
                  value="PASSWORD ( MINIMUM 8 CHARACTERS )"
                />
              </div>
              <TextInput id="password" type="password" required />
            </div>
            <div className="w-[47%] flex flex-col">
              <div className="mb-2 block">
                <Label htmlFor="confirm_password" value="CONFIRM PASSWORD" />
              </div>
              <TextInput id="confirm_password" type="password" required />
            </div>
          </div>
        </div>
        <div className="mt-5">
          <Button type="submit">Submit</Button>
        </div>
      </form>
    </div>
  );
}

export default AddMember;
