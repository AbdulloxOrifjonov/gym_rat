/** @format */

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const gymRat = createApi({
  reducerPath: "gymRatApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://gymrat.uz/api/v1/",
    credentials: "include",
  }),
  prepareHeaders: (headers, { getState }) => {
    const auth = getState().auth;
    if (auth?.accessToken) {
      headers.set("Authorization", `Bearer ${auth.accessToken}`);
    }
    headers.set("Content-Type", "application/json");
    return headers;
  },
  tagTypes: ["admin", "login"],
  endpoints: (builder) => ({
    addLogin: builder.mutation({
      query: (loginData) => ({
        url: "admin/login",
        method: "POST",
        body: loginData,
      }),
    }),

    roleLogin: builder.mutation({
      query: ({ phone, password, role }) => ({
        url: `${role}/login`,
        method: "POST",
        body: { phone, password },
      }),
    }),
  }),
});

export const { useAddLoginMutation, useRoleLoginMutation } = gymRat;
