import {baseApi} from "@/app/ui/App/api/baseApi.ts";
import type {
    FilteredQuery,
    GenresResponse,
    MovieCastResponse,
    MovieDetails,
    MovieListResponse
} from "@/features/movie/api/movieApi.types.ts";
import {validateResponse} from "@/common/utils";
import {
    GenresResponseSchema,
    MovieCastResponseSchema,
    MovieDetailsSchema,
    MovieListResponseSchema
} from "@/common/schemas/schemas.ts";

export const movieApi = baseApi.injectEndpoints({
    endpoints: build => ({
        getPopularMovies: build.query<MovieListResponse, { page: number }>({
            query: ({page = 1}) => ({
                url: "/movie/popular",
                params: { page }
            }),
            transformResponse: (response: unknown) =>
                validateResponse(response, MovieListResponseSchema)
        }),

        getTopRatedMovies: build.query<MovieListResponse, { page: number }>({
            query: ({page = 1}) => ({
                url: "/movie/top_rated",
                params: { page }
            }),
            transformResponse: (response: unknown) =>
                validateResponse(response, MovieListResponseSchema)
        }),

        getUpcomingMovies: build.query<MovieListResponse, { page: number }>({
            query: ({page = 1}) => ({
                url: "/movie/upcoming",
                params: { page }
            }),
            transformResponse: (response: unknown) =>
                validateResponse(response, MovieListResponseSchema)
        }),

        getNowPlayingMovies: build.query<MovieListResponse, { page: number }>({
            query: ({page = 1}) => ({
                url: "/movie/now_playing",
                params: { page }
            }),
            transformResponse: (response: unknown) =>
                validateResponse(response, MovieListResponseSchema)
        }),

        getDetailsMovie: build.query<MovieDetails, number>({
            query: (movie_id) => ({
                url: `/movie/${movie_id}`,
                params: {}
            }),
            transformResponse: (response: unknown) =>
                validateResponse(response, MovieDetailsSchema)
        }),

        getCreditsMovie: build.query<MovieCastResponse, number>({
            query: (movie_id) => ({
                url: `/movie/${movie_id}/credits`,
                params: {}
            }),
            transformResponse: (response) =>
                validateResponse(response, MovieCastResponseSchema)
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
            }),
            transformResponse: (response: unknown) =>
                validateResponse(response, MovieListResponseSchema)
        }),

        getGenresMovies: build.query<GenresResponse, void>({
            query: () => ({
                url: "/genre/movie/list",
                params: {}
            }),
            transformResponse: (response) =>
                validateResponse(response, GenresResponseSchema)

        }),

        getFiltersMovies: build.query<MovieListResponse, FilteredQuery>({
            query: ({
                        page = 1,
                        sort_by,
                        with_genres,
                        "vote_average.gte": voteAverageGte,
                        "vote_average.lte": voteAverageLte
                    }) => {
                const params: Record<string, any> = {
                    page,
                    sort_by,
                    with_genres,
                    "vote_average.gte": voteAverageGte,
                    "vote_average.lte": voteAverageLte
                };

                // Очистка от undefined значений
                Object.keys(params).forEach(key => {
                    if (params[key] === undefined) {
                        delete params[key];
                    }
                });

                return {
                    url: "/discover/movie",
                    params
                };
            },
            transformResponse: (response: unknown) =>
                validateResponse(response, MovieListResponseSchema)
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
    useGetGenresMoviesQuery,
    useGetFiltersMoviesQuery
} = movieApi