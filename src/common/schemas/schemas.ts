import { z } from "zod";

export const MovieResultSchema = z.object({
    adult: z.boolean(),
    backdrop_path: z.string().nullable(),
    genre_ids: z.array(z.number()),
    id: z.number(),
    original_language: z.string(),
    original_title: z.string(),
    overview: z.string(),
    popularity: z.number(),
    poster_path: z.string().nullable(),
    release_date: z.string(),
    title: z.string(),
    video: z.boolean(),
    vote_average: z.number(),
    vote_count: z.number(),
});

export const MovieListResponseSchema = z.object({
    page: z.number(),
    results: z.array(MovieResultSchema),
    total_pages: z.number(),
    total_results: z.number(),
});

export const MovieDetailsSchema = z.object({
    adult: z.boolean(),
    backdrop_path: z.string().nullable(),
    belongs_to_collection: z.any().nullable(),
    budget: z.number(),
    genres: z.array(z.object({
        id: z.number(),
        name: z.string()
    })),
    homepage: z.string().nullable(),
    id: z.number(),
    imdb_id: z.string().nullable(),
    original_language: z.string(),
    original_title: z.string(),
    overview: z.string(),
    popularity: z.number(),
    poster_path: z.string().nullable(),
    production_companies: z.array(
        z.object({
            id: z.number(),
            logo_path: z.string().nullable(),
            name: z.string(),
            origin_country: z.string(),
        })
    ),
    production_countries: z.array(
        z.object({
            iso_3166_1: z.string(),
            name: z.string(),
        })
    ),
    release_date: z.string(),
    revenue: z.number(),
    runtime: z.number(),
    spoken_languages: z.array(
        z.object({
            english_name: z.string(),
            iso_639_1: z.string(),
            name: z.string(),
        })
    ),
    status: z.string(),
    tagline: z.string().nullable(),
    title: z.string(),
    video: z.boolean(),
    vote_average: z.number(),
    vote_count: z.number(),
});

export const CastMemberSchema = z.object({
    adult: z.boolean(),
    gender: z.number().nullable(),
    id: z.number(),
    known_for_department: z.string(),
    name: z.string(),
    original_name: z.string(),
    popularity: z.number(),
    profile_path: z.string().nullable(),
    cast_id: z.number(),
    character: z.string(),
    credit_id: z.string(),
    order: z.number(),
});

export const MovieCastResponseSchema = z.object({
    id: z.number(),
    cast: z.array(CastMemberSchema),
});

export const GenreSchema = z.object({
    id: z.number(),
    name: z.string(),
});

export const GenresResponseSchema = z.object({
    genres: z.array(GenreSchema),
});
