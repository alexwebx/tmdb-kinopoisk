import {baseApi} from "@/app/ui/App/api/baseApi.ts";
import type {
    FilteredQuery,
    GenresResponse,
    MovieCastResponse,
    MovieDetails,
    MovieListResponse
} from "@/features/movie/api/movieApi.types.ts";

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

        getGenresMovies: build.query<GenresResponse, void>({
            query: () => ({
                url: "/genre/movie/list",
                params: {}
            })
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
            }
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