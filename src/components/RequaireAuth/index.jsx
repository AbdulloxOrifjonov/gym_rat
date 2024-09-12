/** @format */

import React, { useContext, useEffect } from "react";
import { Navigate, Outlet, useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
import axios from "axios";

function RequaireAuth({ allowedRole }) {
  const { auth, setAuth } = useContext(AuthContext);
  const { path } = useParams(); // URL paramslarini olish
  console.log("Allowed Role:", allowedRole, "Auth:", auth, "Params:", path);

  console.log(allowedRole, auth);

  const navigate = useNavigate();

  const refreshToken = async () => {
    try {
      const response = await axios.post(
        "https://gymrat.uz/api/v1/auth/refresh-token",
        {
          refreshToken: localStorage.getItem("refreshToken"),
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        },
      );
      setAuth({ role: "admin", accessToken: response.data.accessToken });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (localStorage.getItem("refreshToken")) {
      refreshToken();
      console.log(auth.role);

      // const destination = `/admin/dashboard`;
      // navigate(destination); // paramsdan kelgan yoki default yo'nalishni ishlatish
    }
    // eslint-disable-next-line
  }, [navigate, path]);

  return auth.accessToken && auth.role === allowedRole ? (
    <Outlet />
  ) : (
    <Navigate to={"/unauthorized"} />
  );
}

export default RequaireAuth;
