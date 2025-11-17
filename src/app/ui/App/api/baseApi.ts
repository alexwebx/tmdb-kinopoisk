import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const baseApi = createApi({
  reducerPath: "moviesApi",
  tagTypes: [],
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BASE_URL,
    paramsSerializer: params => {
      const searchParams = new URLSearchParams(params as Record<string, string>);
      searchParams.set("api_key", import.meta.env.VITE_API_KEY);
      return searchParams.toString();
    }
  }),

  endpoints: () => ({}),
})
