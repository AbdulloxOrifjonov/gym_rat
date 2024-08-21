/** @format */

import React from "react";
import { useNavigate } from "react-router-dom";

function ownerAuth({ allowedRole }) {
  const navigate = useNavigate();
  console.log(allowedRole);
  useEffect(() => {
    if (!localStorage.getItem("token_owner")) {
      navigate("/");
    } else {
      navigate("/owner/dashboard");
    }
  }, []);
  return (
    <div>
      <h2>Loading.....</h2>
    </div>
  );
}

export default ownerAuth;
