/** @format */

import React from "react";
import { Link, Outlet } from "react-router-dom";
import { Sidebar } from "flowbite-react";
import { HiChartPie, HiInbox, HiShoppingBag } from "react-icons/hi";

function BasicLayout() {
  return (
    <div className="flex items-start justify-between">
      <div className="h-screen">
        <Sidebar className="h-screen" aria-label="Sidebar with multi-level dropdown example">
          <Sidebar.Items>
            <Sidebar.ItemGroup>
              <Sidebar.Item icon={HiChartPie}>Dashboard</Sidebar.Item>
              <Sidebar.Collapse icon={HiShoppingBag} label="Members">
                <Link to="/owner/members">
                  <Sidebar.Item>Members</Sidebar.Item>
                </Link>
                <Link to="/owner/checkIn">
                  <Sidebar.Item>Check-in</Sidebar.Item>
                </Link>
                <Link to="/owner/add/member">
                  <Sidebar.Item>Add Member</Sidebar.Item>
                </Link>
                <Sidebar.Item>Attendance</Sidebar.Item>
                <Sidebar.Item>Memberships</Sidebar.Item>
                <Sidebar.Item>Rosters</Sidebar.Item>
                <Sidebar.Item>Documents</Sidebar.Item>
                <Sidebar.Item>Content</Sidebar.Item>
                <Sidebar.Item>Growth</Sidebar.Item>
                <Sidebar.Item>Settings</Sidebar.Item>
              </Sidebar.Collapse>
              <Sidebar.Item icon={HiInbox}>Inbox</Sidebar.Item>
            </Sidebar.ItemGroup>
          </Sidebar.Items>
        </Sidebar>
      </div>
      <div className="w-full p-5">
        <Outlet />
      </div>
    </div>
  );
}

export default BasicLayout;
