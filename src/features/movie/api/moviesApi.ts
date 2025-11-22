import {baseApi} from "@/app/ui/App/api/baseApi.ts";
import type {MovieCastResponse, MovieDetails, MovieListResponse} from "@/features/movie/api/movieApi.types.ts";

export const movieApi = baseApi.injectEndpoints({
    endpoints: build => ({
        getPopularMovies: build.query<MovieListResponse, number | void>({
            query: (page = 1) => ({
                url: "/movie/popular",
                params: { page }
            })
        }),

        getTopRatedMovies: build.query<MovieListResponse, number | void>({
            query: (page = 1) => ({
                url: "/movie/top_rated",
                params: { page }
            })
        }),

        getUpcomingMovies: build.query<MovieListResponse, number | void>({
            query: (page = 1) => ({
                url: "/movie/upcoming",
                params: { page }
            })
        }),

        getNowPlayingMovies: build.query<MovieListResponse, number | void>({
            query: (page = 1) => ({
                url: "/movie/now_playing",
                params: { page }
            })
        }),

        getDetailsMovie: build.query<MovieDetails, number>({
            query: (movie_id) => ({
                url: `/movie/${movie_id}`,
                params: {}
            })
        }),

        getCreditsMovie: build.query<MovieCastResponse, number>({
            query: (movie_id) => ({
                url: `/movie/${movie_id}/credits`,
                params: {}
            })
        }),

        getSimilarMovies: build.query<MovieListResponse, number>({
            query: (movie_id) => ({
                url: `/movie/${movie_id}/similar`,
                params: {}
            })
        }),

        searchMovies: build.query<MovieListResponse, { page?: number; query: string }>({
            query: ({page = 1, query}) => ({
                url: "/search/movie",
                params: { page, query }
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
    useGetSimilarMoviesQuery,
    useSearchMoviesQuery,
} = movieApi