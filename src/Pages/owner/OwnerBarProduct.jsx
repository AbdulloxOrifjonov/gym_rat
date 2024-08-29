/** @format */

import { Button, FileInput, Label, Select, Tabs } from "flowbite-react";
import React, { useState } from "react";

import { HiUserCircle } from "react-icons/hi";

const OwnerBarProduct = () => {
  const [showAnotherPage, setShowAnotherPage] = useState(0);

  return (
    <Tabs>
      <Tabs.Item active title="Product List" icon={HiUserCircle}>
        <div className="flex justify-center ">
          <Button onClick={() => setShowAnotherPage(0)}>Filter</Button>
          <Button className="ml-3" onClick={() => setShowAnotherPage(1)}>
            Product card
          </Button>
        </div>
        <form action="#">
          <div>
            {showAnotherPage === 0 ? (
              <div>
                <p>lol</p>
              </div>
            ) : (
              <div>
                <p>k</p>
              </div>
            )}
          </div>
        </form>
      </Tabs.Item>
      <Tabs.Item title="Add Quantity" icon={HiUserCircle}>
        <div>
          <form>
            <Select>
              <option value="1">Option 1</option>
              <option value="2">Option 2</option>
              <option value="3">Option 3</option>
            </Select>
            <div className="mt-4 mb-2 block">
              <Label htmlFor="cost" value="Cost" />
            </div>
            <input
              id="cost"
              type="number"
              className="block w-full p-2.5 border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
            />
            <div className="mt-4 mb-2 block">
              <Label htmlFor="quantity" value="Quantity" />
            </div>
            <input
              id="quantity"
              type="number"
              className="block w-full p-2.5 border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
            />
          </form>
        </div>
      </Tabs.Item>

      <Tabs.Item title="Add Product" icon={HiUserCircle}>
        <div>
          <form>
            <div className="mt-4 mb-2 block">
              <Label htmlFor="title" value="Title" />
            </div>
            <input
              id="title"
              type="text"
              className="block w-full p-2.5 border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
            />
            <div className="mt-4 mb-2 block">
              <Label htmlFor="description" value="Description" />
            </div>
            <input
              id="description"
              type="text"
              className="block w-full p-2.5 border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
            />
            <div className="mt-4 mb-2 block">
              <Label htmlFor="image" value="Image" />
            </div>
            <FileInput
              id="image"
              className="block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
            />
            <div className="mt-4 mb-2 block">
              <Label htmlFor="category" value="Category" />
            </div>
            <input
              id="category"
              type="text"
              className="block w-full p-2.5 border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
            />
            <div className="mt-4 mb-2 block">
              <Label htmlFor="price" value="Price" />
            </div>
            <input
              id="price"
              type="number"
              className="block w-full p-2.5 border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
            />
            <div className="mt-4 mb-2 block">
              <Label htmlFor="cost" value="Cost" />
            </div>
            <input
              id="cost"
              type="number"
              className="block w-full p-2.5 border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
            />
            <div className="mt-4 mb-2 block">
              <Label htmlFor="quantity" value="Quantity" />
            </div>
            <input
              id="quantity"
              type="number"
              className="block w-full p-2.5 border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
            />
            <Button className="mt-3">Submit</Button>
          </form>
        </div>
      </Tabs.Item>

      <Tabs.Item title="Edit Product" icon={HiUserCircle}>
        <div>
          <h1>Edit Product</h1>
        </div>
      </Tabs.Item>

      <Tabs.Item title="Delete Product" icon={HiUserCircle}>
        <div>
          <h1> Delete Product</h1>
        </div>
      </Tabs.Item>
    </Tabs>
  );
};

export default OwnerBarProduct;
