/** @format */

import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import Saidbar from "../components/Saidbar";
import { AuthContext } from "../context/AuthProvider";

function BasicLayout() {
  const { auth, setAuth } = useContext(AuthContext);

  const allowedRole = auth.role;

  return (
    <div className="flex items-start justify-between min-h-screen bg-gray-100">
      <div className="w-[max-with] h-screen overflow-y-scroll overflow-x-hidden bg-gradient-to-b from-indigo-800 to-indigo-800">
        <Saidbar allowedRole={allowedRole} />
      </div>
      <div className="flex-1 p-4 h-screen overflow-y-scroll  bg-white bg-gradient-to-b from-indigo-400 to-indigo-600">
        <Outlet />
      </div>
    </div>
  );
}

export default BasicLayout;
