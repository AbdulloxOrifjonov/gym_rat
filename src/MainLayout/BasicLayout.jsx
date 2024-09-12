/** @format */

import React from "react";
import { Outlet } from "react-router-dom";
import Saidbar from "../components/Saidbar";

function BasicLayout() {
  const allowedRole = localStorage.getItem("role");

  return (
    <div className="flex items-start justify-between min-h-screen bg-gray-100">
      <div className="w-64 h-screen bg-gradient-to-b from-indigo-800 to-indigo-800">
        <Saidbar allowedRole={allowedRole} />
      </div>
      <div className="flex-1 h-screen p-5 bg-white bg-gradient-to-b from-indigo-400 to-indigo-600">
        <Outlet />
      </div>
    </div>
  );
}

export default BasicLayout;
