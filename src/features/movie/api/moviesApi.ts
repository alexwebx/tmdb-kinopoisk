import {baseApi} from "@/app/ui/App/api/baseApi.ts";
import type {MovieCastResponse, MovieDetails, MovieListResponse} from "@/features/movie/api/movieApi.types.ts";

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

        getDetailsMovie: build.query<MovieDetails, number>({
            query: (movie_id) => ({
                url: `/${movie_id}`,
                params: {}
            })
        }),

        getCreditsMovie: build.query<MovieCastResponse, number>({
            query: (movie_id) => ({
                url: `/${movie_id}/credits`,
                params: {}
            })
        }),

        getSimilarMovies: build.query<MovieListResponse, number>({
            query: (movie_id) => ({
                url: `/${movie_id}/similar`,
                params: {}
            })
        }),

    })
});


export const {
    useGetPopularMoviesQuery,
    useGetTopRatedMoviesQuery,
    useGetNowPlayingMoviesQuery,
    useGetUpcomingMoviesQuery,
    useGetDetailsMovieQuery,
    useGetCreditsMovieQuery,
    useGetSimilarMoviesQuery
} = movieApi