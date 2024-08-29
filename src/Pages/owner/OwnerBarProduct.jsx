/** @format */

import { FileInput, Label, Tabs } from "flowbite-react";
import React from "react";
import { HiUserCircle } from "react-icons/hi";

const OwnerBarProduct = () => {
  return (
    <Tabs>
      <Tabs.Item active title="Product List" icon={HiUserCircle}></Tabs.Item>
      <Tabs.Item active title="Add Quantity" icon={HiUserCircle}>
        <div>
          <form action="#">
            <select>
              <option value="first">first</option>
              <option value="second">second</option>
              <option value="three">three</option>
              <option value="four">four</option>
            </select>
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
      <Tabs.Item active title="Add Product" icon={HiUserCircle}>
        <div>
          <form action="#">
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
          </form>
        </div>
      </Tabs.Item>
      <Tabs.Item active title="Edit Product" icon={HiUserCircle}>
        <div>
          <h1>Edit Product</h1>
          <form action="#">
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
          </form>
        </div>
      </Tabs.Item>
      <Tabs.Item active title="Delete product" icon={HiUserCircle}></Tabs.Item>
    </Tabs>
  );
};

export default OwnerBarProduct;
