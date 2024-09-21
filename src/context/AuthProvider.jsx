/** @format */

import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export const AuthContext = createContext();

function AuthProvider({ children }) {
  const [auth, setAuth] = useState({
    role: null,
    accessToken: null,
  });
  const [gyms, setGyms] = useState([]);
  const [activeGym, setActiveGym] = useState(null);
  console.log(activeGym);

  useEffect(() => {
    if (gyms && !activeGym) {
      setActiveGym(gyms[0]?._id);
      localStorage.setItem("activeGym", gyms[0]?._id);
    }
  }, [gyms]);

  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const resetAccess = async () => {
    setLoading(true);
    await refreshToken();
    setLoading(false);
  };

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
    } catch (error) {
      console.log(error.response);
      if (error.response.data.message === "Invalid refresh token") {
        navigate("/login");
      } else {
        navigate("/unauthorized");
      }
    }
  };

  return (
    <AuthContext.Provider
      value={{ auth, setAuth, refreshToken, resetAccess, setGyms, gyms, setActiveGym, activeGym }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
