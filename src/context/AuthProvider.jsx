/** @format */

import React, { createContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

function AuthProvider({ children }) {
  const navigate = useNavigate();

  const [auth, setAuth] = useState({
    role: null,
    accessToken: null,
  });
  const refreshToken = async () => {
    console.log("Refreshing Tokens with Context");
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
      setAuth({ role: response.data.role, accessToken: response.data.accessToken });
      // navigate(`/${response.data.role}/dashboard`);
    } catch (error) {
      console.log(error.response?.status);
      navigate("/unauthorized");
    }
  };

  return (
    <AuthContext.Provider value={{ auth, setAuth, refreshToken }}>{children}</AuthContext.Provider>
  );
}

export default AuthProvider;
