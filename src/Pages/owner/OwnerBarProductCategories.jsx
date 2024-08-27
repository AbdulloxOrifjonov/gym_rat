import { Label, Table, Tabs, TextInput } from "flowbite-react";
import React from "react";
import { useForm } from "react-hook-form";
import { HiUserCircle } from "react-icons/hi";

const OwnerBarProductCategories = () => {
    const { register } = useForm();

  return (
    <Tabs>
      <Tabs.Item active title="Add Product Cotegories" icon={HiUserCircle}>
        <form action="#">
          <div className="mb-2 block">
            <Label htmlFor="address" value="Address" />
          </div>
          <input
            id="address"
            type="text"
            className="block w-full p-2.5 border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
            {...register("address")}
          />
        </form>
      </Tabs.Item>
    </Tabs>
  );
};

export default OwnerBarProductCategories;
