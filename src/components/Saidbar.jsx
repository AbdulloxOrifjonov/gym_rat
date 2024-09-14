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
          {user === "employer" && (
            <>
              <li>
                <Link
                  to="/employer/dashboard"
                  className="flex items-center p-4 hover:bg-indigo-700 transition-colors duration-200"
                >
                  <HiChartPie className="mr-3" />
                  Dashboard
                </Link>
              </li>
              <li>
                <Link
                  to="/employer/payment"
                  className="flex items-center p-4 hover:bg-indigo-700 transition-colors duration-200"
                >
                  <HiShoppingBag className="mr-3" />
                  Payments
                </Link>
              </li>
              <li>
                <Link
                  to="/employer/profile"
                  className="flex items-center p-4 hover:bg-indigo-700 transition-colors duration-200"
                >
                  <HiUserCircle className="mr-3" />
                  Profile
                </Link>
              </li>
              <li>
                <Link
                  to="/employer/gyms"
                  className="flex items-center p-4 hover:bg-indigo-700 transition-colors duration-200"
                >
                  <HiChartPie className="mr-3" />
                  Gyms
                </Link>
              </li>
              <li>
                <button className="w-full text-left p-4 hover:bg-indigo-700 transition-colors duration-200">
                  <span className="mr-3 text-xl font-bold">Check-in</span>
                </button>
                <ul className="pl-4 space-y-2">
                  <li>
                    <Link
                      to="/employer/checkIn"
                      className="flex items-center p-2 hover:bg-indigo-800 transition-colors duration-200"
                    >
                      Check-in
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <button className="w-full text-left p-4 hover:bg-indigo-700 transition-colors duration-200">
                  <span className="mr-3 text-xl font-bold">Staff</span>
                </button>
                <ul className="pl-4 space-y-2">
                  <li>
                    <Link
                      to="/employer/staffs"
                      className="flex items-center p-2 hover:bg-indigo-800 transition-colors duration-200"
                    >
                      Staffs
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <button className="w-full text-left p-4 hover:bg-indigo-700 transition-colors duration-200">
                  <span className="mr-3 text-xl font-bold">Bar</span>
                </button>
                <ul className="pl-4 space-y-2">
                  <li>
                    <Link
                      to="/employer/market"
                      className="flex items-center p-2 hover:bg-indigo-800 transition-colors duration-200"
                    >
                      Market
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/employer/bar/product"
                      className="flex items-center p-2 hover:bg-indigo-800 transition-colors duration-200"
                    >
                      Product
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/employer/bar/product/categories"
                      className="flex items-center p-2 hover:bg-indigo-800 transition-colors duration-200"
                    >
                      Product Categories
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <button className="w-full text-left p-4 hover:bg-indigo-700 transition-colors duration-200">
                  <span className="mr-3 text-xl font-bold">Memberships</span>
                </button>
                <ul className="pl-4 space-y-2">
                  <li>
                    <Link
                      to="/employer/add/membership"
                      className="flex items-center p-2 hover:bg-indigo-800 transition-colors duration-200"
                    >
                      Add Membership
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/employer/memberships"
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
                  to="/admin/add/employer"
                  className="flex items-center p-4 hover:bg-indigo-700 transition-colors duration-200"
                >
                  <HiUserCircle className="mr-3" />
                  Add employer
                </Link>
              </li>
            </>
          )}
          {user === "employee" && (
            <>
              <li>
                <Link
                  to="/employee/dashboard"
                  className="flex items-center p-4 hover:bg-indigo-700 transition-colors duration-200"
                >
                  <HiChartPie className="mr-3" />
                  Dashboard
                </Link>
              </li>
              <li>
                <button className="w-full text-left p-4 hover:bg-indigo-700 transition-colors duration-200">
                  <span className="mr-3 text-xl font-bold">Members</span>
                </button>
                <ul className="pl-4 space-y-2">
                  <li>
                    <Link
                      to="/employee/add/member"
                      className="flex items-center p-2 hover:bg-indigo-800 transition-colors duration-200"
                    >
                      Add Member
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/employee/members"
                      className="flex items-center p-2 hover:bg-indigo-800 transition-colors duration-200"
                    >
                      Members
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <button className="w-full text-left p-4 hover:bg-indigo-700 transition-colors duration-200">
                  <span className="mr-3 text-xl font-bold">Memberships</span>
                </button>
                <ul className="pl-4 space-y-2">
                  <li>
                    <Link
                      to="/employee/add/membership"
                      className="flex items-center p-2 hover:bg-indigo-800 transition-colors duration-200"
                    >
                      Add Membership
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/employee/memberships"
                      className="flex items-center p-2 hover:bg-indigo-800 transition-colors duration-200"
                    >
                      Memberships List
                    </Link>
                  </li>
                </ul>
              </li>
            </>
          )}
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
