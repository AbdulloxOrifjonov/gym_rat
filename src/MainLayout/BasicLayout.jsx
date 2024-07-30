/** @format */

import React from "react";
import { Outlet } from "react-router-dom";
import { Sidebar } from "flowbite-react";
import { HiChartPie, HiInbox, HiShoppingBag } from "react-icons/hi";

function BasicLayout() {
  return (
    <div className="flex items-start">
      <div className="h-screen">
        <Sidebar className="h-screen " aria-label="Sidebar with multi-level dropdown example">
          <Sidebar.Items>
            <Sidebar.ItemGroup>
              <Sidebar.Item href="#" icon={HiChartPie}>
                Dashboard
              </Sidebar.Item>
              <Sidebar.Collapse icon={HiShoppingBag} label="Members">
                <Sidebar.Item href="#">Check-in</Sidebar.Item>
                <Sidebar.Item href="#">Attendance</Sidebar.Item>
                <Sidebar.Item href="#">Memberships</Sidebar.Item>
                <Sidebar.Item href="#">Rosters</Sidebar.Item>
                <Sidebar.Item href="#">Documents</Sidebar.Item>
                <Sidebar.Item href="#">Content</Sidebar.Item>
                <Sidebar.Item href="#">Growth</Sidebar.Item>
                <Sidebar.Item href="#">Settings</Sidebar.Item>
              </Sidebar.Collapse>
              <Sidebar.Item href="#" icon={HiInbox}>
                Inbox
              </Sidebar.Item>
              {/* <Sidebar.Item href="#" icon={HiUser}>
                Users
              </Sidebar.Item>
              <Sidebar.Item href="#" icon={HiShoppingBag}>
                Products
              </Sidebar.Item>
              <Sidebar.Item href="#" icon={HiArrowSmRight}>
                Sign In
              </Sidebar.Item>
              <Sidebar.Item href="#" icon={HiTable}>
                Sign Up
              </Sidebar.Item> */}
            </Sidebar.ItemGroup>
          </Sidebar.Items>
        </Sidebar>
      </div>
      <div className="w-screen">
        <Outlet />
      </div>
    </div>
  );
}

export default BasicLayout;
