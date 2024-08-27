import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const loginApi = createApi({
  reducerPath: "login",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://5b12-178-218-201-17.ngrok-free.app",
  }),
  tagTypes: ["admin"],
  endpoints: (builder) => ({
    addLogin: builder.mutation({
      query: (login) => ({
        url: "/api/v1/admin/login",
        method: "POST",
        body: login,
      }),
    }),
    getLogin: builder.query({
      query: () => "/"
    })
  }),
});

export const { useAddLoginMutation } = loginApi;
