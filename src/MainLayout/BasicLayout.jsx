/** @format */

import React from "react";
import { Outlet } from "react-router-dom";
import Saidbar from "../components/Saidbar";

function BasicLayout() {
  return (
    <div className="flex items-start justify-between">
      <div className="h-screen">
        <Saidbar />
      </div>
      <div className="w-full p-5">
        <Outlet />
      </div>
    </div>
  );
}

export default BasicLayout;
