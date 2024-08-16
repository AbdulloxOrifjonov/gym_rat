import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const loginApi = createApi({
  reducerPath: "login",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://028f-178-218-201-17.ngrok-free.app",
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
  }),
});


export const { useAddLoginMutation} = loginApi;