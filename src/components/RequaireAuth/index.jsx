/** @format */

// /** @format */

// import React, { useContext, useEffect } from "react";
// import { Navigate, Outlet, useNavigate, useParams } from "react-router-dom";
// import { AuthContext } from "../../context/AuthProvider";
// import axios from "axios";

// function RequaireAuth({ allowedRole }) {
//   const { auth, setAuth } = useContext(AuthContext);
//   const { path } = useParams(); // URL paramslarini olish

//   const navigate = useNavigate();

//   const refreshToken = async () => {
//     try {
//       const response = await axios.post(
//         "https://gymrat.uz/api/v1/auth/refresh-token",
//         {
//           refreshToken: localStorage.getItem("refreshToken"),
//         },
//         {
//           headers: {
//             "Content-Type": "application/json",
//           },
//           withCredentials: true,
//         },
//       );
//       setAuth({ role: response.data.role, accessToken: response.data.accessToken });
//       navigate(`/${response.data.role}/dashboard`)
//     } catch (error) {
//       console.log(error.response.status);
//     }
//   };

//   useEffect(() => {
//       if (!auth.accessToken) {
//         refreshToken()
//       }
//   }, []);

//   return auth.accessToken && auth.role === allowedRole ? (
//     <Outlet />
//   ) : (
//     <Navigate to={"/unauthorized"} />
//   );
// }

// export default RequaireAuth;

/** @format */

import React, { useContext, useEffect, useState } from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
import axios from "axios";

function RequaireAuth({ allowedRole }) {
  const { auth, setAuth } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
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
      console.log("Refreshing Token with Requaire Auth");
      setAuth({ role: response.data.role, accessToken: response.data.accessToken });
      // navigate(`/${response.data.role}/dashboard`);
    } catch (error) {
      console.log(error.response);
      if (error.response.data.message === "Invalid refresh token") {
        navigate("/login");
      } else {
        navigate("/unauthorized");
      }
    }
  };

  useEffect(() => {
    const checkAuth = async () => {
      if (!auth.accessToken) {
        await refreshToken();
      } else {
        setLoading(false); // Agar accessToken mavjud bo'lsa, loading holatini to'xtatish
        console.log("Hello world!");
      }
    };

    checkAuth();
  }, [auth.accessToken, navigate, setAuth]);

  if (loading) {
    return <div>Loading...</div>; // Loading holatini ko'rsatish
  }

  return auth.accessToken && auth.role === allowedRole ? (
    <Outlet />
  ) : (
    <Navigate to={"/unauthorized"} />
  );
}

export default RequaireAuth;
