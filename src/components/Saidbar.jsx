/** @format */

import React from "react";
import { Link } from "react-router-dom";
import { Sidebar } from "flowbite-react";
import { HiChartPie, HiInbox, HiShoppingBag, HiUser } from "react-icons/hi";

function Saidbar() {
  return (
    <>
      <Sidebar
        className="h-screen"
        aria-label="Sidebar with multi-level dropdown example"
      >
        <Sidebar.Items>
          <Sidebar.ItemGroup>
            <Sidebar.Item icon={HiChartPie}>Dashboard</Sidebar.Item>
            <Sidebar.Collapse icon={HiUser} label="Members">
              <Link to="/owner/members">
                <Sidebar.Item>Members</Sidebar.Item>
              </Link>
              <Link to="/owner/checkIn">
                <Sidebar.Item>Check-in</Sidebar.Item>
              </Link>
              <Link to="/owner/add/member">
                <Sidebar.Item>Add Member</Sidebar.Item>
              </Link>
              <Link to="/owner/bar">
                <Sidebar.Item>Bar</Sidebar.Item>
              </Link>
              <Sidebar.Item>Memberships</Sidebar.Item>
              <Sidebar.Item>Rosters</Sidebar.Item>
              <Sidebar.Item>Documents</Sidebar.Item>
              <Sidebar.Item>Content</Sidebar.Item>
              <Sidebar.Item>Growth</Sidebar.Item>
              <Sidebar.Item>Settings</Sidebar.Item>
            </Sidebar.Collapse>
            <Sidebar.Collapse icon={HiShoppingBag} label="Bar">
              <Link to="/owner/market">
                <Sidebar.Item>Market</Sidebar.Item>
              </Link>
              <Sidebar.Item>Products</Sidebar.Item>
              <Sidebar.Item>Product Categories</Sidebar.Item>
            </Sidebar.Collapse>
            <Sidebar.Item icon={HiInbox}>Inbox</Sidebar.Item>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
    </>
  );
}

export default Saidbar;
