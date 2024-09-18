/** @format */

// api/gymRat.js
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const gymRat = createApi({
  reducerPath: "gymRatApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://gymrat.uz/api/v1/",
    credentials: "include", // Bu withCredentials: true ekvivalenti
  }),
  tagTypes: ["admin"],
  endpoints: (builder) => ({
    addLogin: builder.mutation({
      query: (loginData) => ({
        url: "admin/login",
        method: "POST",
        body: loginData,
        headers: {
          "Content-Type": "application/json",
        },
      }),
    }),
  }),
});

export const { useAddLoginMutation } = gymRat;
