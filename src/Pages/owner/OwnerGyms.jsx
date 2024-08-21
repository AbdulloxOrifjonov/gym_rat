/** @format */

import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function OwnerGyms() {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("token_owner")) {
      navigate("/");
    }
  }, [navigate]);
  return <div>OwnerGyms</div>;
}

export default OwnerGyms;
