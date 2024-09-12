/** @format */

import React from "react";
import { Link } from "react-router-dom";
import { HiChartPie, HiShoppingBag, HiUserCircle } from "react-icons/hi";

function Sidebar({ allowedRole }) {
  const user = allowedRole;

  return (
    <div className="h-screen w-64 bg-gradient-to-b from-indigo-800 to-indigo-800 text-white flex flex-col">
      <div className="p-4 text-xl font-semibold">
        <h1>Gym Management</h1>
      </div>
      <nav className="flex-1">
        <ul className="space-y-2">
          {user === "owner" && (
            <>
              <li>
                <Link
                  to="/owner/dashboard"
                  className="flex items-center p-4 hover:bg-indigo-700 transition-colors duration-200"
                >
                  <HiChartPie className="mr-3" />
                  Dashboard
                </Link>
              </li>
              <li>
                <Link
                  to="/owner/payment"
                  className="flex items-center p-4 hover:bg-indigo-700 transition-colors duration-200"
                >
                  <HiShoppingBag className="mr-3" />
                  Payments
                </Link>
              </li>
              <li>
                <Link
                  to="/owner/profile"
                  className="flex items-center p-4 hover:bg-indigo-700 transition-colors duration-200"
                >
                  <HiUserCircle className="mr-3" />
                  Profile
                </Link>
              </li>
              <li>
                <Link
                  to="/owner/gyms"
                  className="flex items-center p-4 hover:bg-indigo-700 transition-colors duration-200"
                >
                  <HiChartPie className="mr-3" />
                  Gyms
                </Link>
              </li>
              <li>
                <button className="w-full text-left p-4 hover:bg-indigo-700 transition-colors duration-200">
                  <span className="mr-3">Members</span>
                </button>
                <ul className="pl-4 space-y-2">
                  <li>
                    <Link
                      to="/owner/add/member"
                      className="flex items-center p-2 hover:bg-indigo-800 transition-colors duration-200"
                    >
                      Add Member
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/owner/members"
                      className="flex items-center p-2 hover:bg-indigo-800 transition-colors duration-200"
                    >
                      Members
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/owner/checkIn"
                      className="flex items-center p-2 hover:bg-indigo-800 transition-colors duration-200"
                    >
                      Check-in
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <button className="w-full text-left p-4 hover:bg-indigo-700 transition-colors duration-200">
                  <span className="mr-3">Staff</span>
                </button>
                <ul className="pl-4 space-y-2">
                  <li>
                    <Link
                      to="/owner/staffs"
                      className="flex items-center p-2 hover:bg-indigo-800 transition-colors duration-200"
                    >
                      Staffs
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <button className="w-full text-left p-4 hover:bg-indigo-700 transition-colors duration-200">
                  <span className="mr-3">Bar</span>
                </button>
                <ul className="pl-4 space-y-2">
                  <li>
                    <Link
                      to="/owner/market"
                      className="flex items-center p-2 hover:bg-indigo-800 transition-colors duration-200"
                    >
                      Market
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/owner/bar/product"
                      className="flex items-center p-2 hover:bg-indigo-800 transition-colors duration-200"
                    >
                      Product
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/owner/bar/product/categories"
                      className="flex items-center p-2 hover:bg-indigo-800 transition-colors duration-200"
                    >
                      Product Categories
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <button className="w-full text-left p-4 hover:bg-indigo-700 transition-colors duration-200">
                  <span className="mr-3">Memberships</span>
                </button>
                <ul className="pl-4 space-y-2">
                  <li>
                    <Link
                      to="/owner/add/membership"
                      className="flex items-center p-2 hover:bg-indigo-800 transition-colors duration-200"
                    >
                      Add Membership
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/owner/memberships"
                      className="flex items-center p-2 hover:bg-indigo-800 transition-colors duration-200"
                    >
                      Memberships List
                    </Link>
                  </li>
                </ul>
              </li>
            </>
          )}
          {user === "admin" && (
            <>
              <li>
                <Link
                  to="/admin/dashboard"
                  className="flex items-center p-4 hover:bg-indigo-700 transition-colors duration-200"
                >
                  <HiChartPie className="mr-3" />
                  Admin Dashboard
                </Link>
              </li>
              <li>
                <Link
                  to="/admin/add/owner"
                  className="flex items-center p-4 hover:bg-indigo-700 transition-colors duration-200"
                >
                  <HiUserCircle className="mr-3" />
                  Add Owner
                </Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
