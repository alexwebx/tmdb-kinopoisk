import { useSelector } from 'react-redux'
import type {RootState} from "@/app/ui/App/model/store.ts";
import { baseApi } from "@/app/ui/App/api/baseApi.ts";

export const useGlobalLoading = () => {
    return useSelector((state: RootState) => {
        const apiState = state[baseApi.reducerPath];

        const queries = Object.values(apiState.queries || {});
        const mutations = Object.values(apiState.mutations || {});

        const hasActiveQueries = queries.some(q => q?.status === "pending");
        const hasActiveMutations = mutations.some(m => m?.status === "pending");

        return hasActiveQueries || hasActiveMutations;
    });
};
