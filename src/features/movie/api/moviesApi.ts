import {baseApi} from "@/app/ui/App/api/baseApi.ts";
import type {MovieListResponse} from "@/features/movie/api/movieApi.types.ts";

export const movieApi = baseApi.injectEndpoints({
    endpoints: build => ({
        getPopularMovies: build.query<MovieListResponse, number | void>({
            query: (page = 1) => ({
                url: "/popular",
                params: { page }
            })
        }),

        getTopRatedMovies: build.query<MovieListResponse, number | void>({
            query: (page = 1) => ({
                url: "/top_rated",
                params: { page }
            })
        }),

        getUpcomingMovies: build.query<MovieListResponse, number | void>({
            query: (page = 1) => ({
                url: "/upcoming",
                params: { page }
            })
        }),

        getNowPlayingMovies: build.query<MovieListResponse, number | void>({
            query: (page = 1) => ({
                url: "/now_playing",
                params: { page }
            })
        }),
    })
});


export const {
    useGetPopularMoviesQuery,
    useGetTopRatedMoviesQuery,
    useGetNowPlayingMoviesQuery,
    useGetUpcomingMoviesQuery
} = movieApi