/** @format */

import React from "react";
import { Link } from "react-router-dom";
import { Sidebar } from "flowbite-react";

import { HiChartPie, HiShoppingBag } from "react-icons/hi";
import { HiUserCircle } from "react-icons/hi";
//HiAdjustments, HiCloudDownload,
function Saidbar({ allowedRole }) {
  console.dir(allowedRole);
  const user = allowedRole.allowedRole;

  console.log("user", user);
  return (
    <>
      <Sidebar className="h-screen" aria-label="Sidebar with multi-level dropdown example">
        <Sidebar.Items>
          {user === "owner" ? (
            <Sidebar.ItemGroup>
              <Sidebar.Item icon={HiChartPie}>Owner</Sidebar.Item>
              <Sidebar.Item>Dashboard</Sidebar.Item>
              <Link to="/owner/market">
                <Sidebar.Item>Bar</Sidebar.Item>
              </Link>
              <Link to={"/owner/payment"}>
                <Sidebar.Item>Payments</Sidebar.Item>
              </Link>
              <Link to={"/owner/profile"}>
                <Sidebar.Item>Profile</Sidebar.Item>
              </Link>
              <Sidebar.Item>Gyms</Sidebar.Item>
              <Sidebar.Item>Settings</Sidebar.Item>
              {/* <Sidebar.Item>Profile options with rounded image</Sidebar.Item> */}
              <Sidebar.Collapse icon={HiUserCircle} label="People">
                {/* <Sidebar.Item>Members</Sidebar.Item> */}
                <Sidebar.Collapse icon={HiShoppingBag} label="Members">
                  <Link to="/owner/add/member">
                    <Sidebar.Item>Add Member</Sidebar.Item>
                  </Link>
                  <Link to="/owner/members">
                    <Sidebar.Item>Members</Sidebar.Item>
                  </Link>
                  <Link to="/owner/checkIn">
                    <Sidebar.Item>Check-in</Sidebar.Item>
                  </Link>
                </Sidebar.Collapse>

                <Sidebar.Collapse icon={HiShoppingBag} label="Staff">
                  <Link to={"/owner/staffs"}>
                    <Sidebar.Item>Staffs</Sidebar.Item>
                  </Link>
                  <Link to={"/owner/add/staff"}>
                    <Sidebar.Item>Add Staff</Sidebar.Item>
                  </Link>
                </Sidebar.Collapse>
              </Sidebar.Collapse>

              <Sidebar.Collapse icon={HiUserCircle} label="Memberships">
                <Link to={"add/membership"}>
                  <Sidebar.Item>Add Membership</Sidebar.Item>
                </Link>
                <Link to={"memberships"}>
                  <Sidebar.Item>Memberships List</Sidebar.Item>
                </Link>
              </Sidebar.Collapse>

              {/* <Sidebar.Collapse icon={HiUserCircle} label="Memberships">
                  <Sidebar.Item></Sidebar.Item>
                </Sidebar.Collapse> */}

              {/* <Link to="/owner/members">
                  <Sidebar.Item>Members</Sidebar.Item>
                </Link>
                <Link to="/owner/checkIn">
                  <Sidebar.Item>Check-in</Sidebar.Item>
                </Link>
                <Link to="/owner/add/member">
                  <Sidebar.Item>Add Member</Sidebar.Item>
                </Link>
                <Sidebar.Item>Rosters</Sidebar.Item>
                <Sidebar.Item>Documents</Sidebar.Item>
                <Sidebar.Item>Content</Sidebar.Item>
                <Sidebar.Item>Growth</Sidebar.Item>
                <Sidebar.Item>Settings</Sidebar.Item> */}

              {/* <Sidebar.Item icon={HiInbox}>Inbox</Sidebar.Item> */}
            </Sidebar.ItemGroup>
          ) : user === "admin" ? (
            <Sidebar.ItemGroup>
              <Link to="/admin/dashboard">
                <Sidebar.Item icon={HiChartPie}>Admin</Sidebar.Item>
              </Link>
              <Link to="admin/add/owner">
                <Sidebar.Item icon={HiUserCircle}>Add Owner</Sidebar.Item>
              </Link>
            </Sidebar.ItemGroup>
          ) : (
            ""
          )}
          {/* <Sidebar.ItemGroup>
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
          </Sidebar.ItemGroup> */}
        </Sidebar.Items>
      </Sidebar>
    </>
  );
}

export default Saidbar;
