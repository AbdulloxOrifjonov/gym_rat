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
              <Sidebar.Item as={Link} to="/owner/dashboard">
                Dashboard
              </Sidebar.Item>
              <Sidebar.Item as={Link} to="/owner/market">
                Bar
              </Sidebar.Item>
              <Sidebar.Item as={Link} to="/owner/payment">
                Payments
              </Sidebar.Item>
              <Sidebar.Item as={Link} to="/owner/profile">
                Profile
              </Sidebar.Item>
              <Sidebar.Item as={Link} to="/owner/gyms">
                Gyms
              </Sidebar.Item>
              <Sidebar.Item>Settings</Sidebar.Item>
              <Sidebar.Collapse icon={HiShoppingBag} label="Members">
                <Sidebar.Item as={Link} to="/owner/add/member">
                  Add Member
                </Sidebar.Item>
                <Sidebar.Item as={Link} to="/owner/members">
                  Members
                </Sidebar.Item>
                <Sidebar.Item as={Link} to="/owner/checkIn">
                  Check-in
                </Sidebar.Item>
              </Sidebar.Collapse>

              <Sidebar.Collapse icon={HiShoppingBag} label="Staff">
                <Sidebar.Item as={Link} to="/owner/staffs">
                  Staffs
                </Sidebar.Item>
              </Sidebar.Collapse>

              <Sidebar.Collapse icon={HiUserCircle} label="Memberships">
                <Sidebar.Item as={Link} to="/owner/add/membership">
                  Add Membership
                </Sidebar.Item>
                <Sidebar.Item as={Link} to="/owner/memberships">
                  Memberships List
                </Sidebar.Item>
              </Sidebar.Collapse>
            </Sidebar.ItemGroup>
          ) : user === "admin" ? (
            <Sidebar.ItemGroup>
              <Sidebar.Item>Admin</Sidebar.Item>
              <Sidebar.Item as={Link} to="/admin/dashboard" icon={HiChartPie}>
                Admin Dashboard
              </Sidebar.Item>
              <Sidebar.Item as={Link} to="/admin/add/owner" icon={HiUserCircle}>
                Add Owner
              </Sidebar.Item>
            </Sidebar.ItemGroup>
          ) : (
            ""
          )}
        </Sidebar.Items>
      </Sidebar>
    </>
  );
}

export default Saidbar;
