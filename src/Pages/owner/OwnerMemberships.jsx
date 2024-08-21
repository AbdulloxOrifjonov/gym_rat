/** @format */

import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Memberships() {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("token_owner")) {
      navigate("/");
    }
  }, [navigate]);
  return <div>Memberships</div>;

}

export default Memberships;
