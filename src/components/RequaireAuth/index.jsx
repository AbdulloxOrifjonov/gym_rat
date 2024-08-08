/** @format */

import React from "react";
import { Outlet } from "react-router-dom";

function RequaireAuth({ allowedRole }) {
  const user = "owner";

  if (user === allowedRole) {
    return <Outlet />;
  } else {
    return <h1>Not Found</h1>;
  }
}

export default RequaireAuth;
