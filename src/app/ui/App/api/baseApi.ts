import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import {handleErrors} from "@/common/utils";

export const baseApi = createApi({
    reducerPath: "moviesApi",
    tagTypes: [],
    baseQuery: async (args, api, extraOptions) => {
        // await new Promise(resolve => setTimeout(resolve, 2000)) // delay
        const result = await fetchBaseQuery({
            baseUrl: import.meta.env.VITE_BASE_URL,
            paramsSerializer: params => {
                const searchParams = new URLSearchParams(params as Record<string, string>);
                searchParams.set("api_key", import.meta.env.VITE_API_KEY);
                return searchParams.toString();
            }
        })(args, api, extraOptions)


        if (result.error) {
            handleErrors(result.error)
        }

        return result

    },

    endpoints: () => ({}),
})