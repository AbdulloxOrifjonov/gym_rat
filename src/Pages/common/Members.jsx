/** @format */

import React from "react";
import { Label, TextInput } from "flowbite-react";
import { Button } from "flowbite-react";

function Members() {
  return (
    <div className="flex max-w-md flex-col gap-4">
      <div>
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
            // helperText={
            //   <>
            //     <span className="font-medium">Alright!</span> Search first or last name . . .
            //   </>
            // }
          />
          <Button className="w-52" type="submit">
            Add Member
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Members;
