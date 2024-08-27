import React from "react";
import { Outlet } from "react-router-dom";
// import { useAddLoginMutation } from "../../features/API/ApiSlice";

function RequaireAuth({ allowedRole }) {
  // const [addLogin] = useAddLoginMutation();

  const user = allowedRole.success === true;

  console.log(user);
  console.log(allowedRole);
  // console.log(addLogin);

  if (allowedRole.success === true) {
    return <Outlet />;
  } else {
    return <h1>Not Found</h1>;
  }
}

export default RequaireAuth;
