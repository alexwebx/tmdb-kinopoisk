import s from "./SearchPage.module.css"
import {Search} from "@/common/components/Search/Search.tsx";
import {useSearchParams} from "react-router";
import {useSearchMoviesQuery} from "@/features/movie/api/moviesApi.ts";
import {OneMovieCard} from "@/common/components/OneMovieCard/OneMovieCard.tsx";
import {useEffect, useState} from "react";
import {Pagination} from "@/common/components/Pagination/Pagination.tsx";
import {MoviesSkeleton} from "@/common/components/MovieSkeleton/MovieSkeleton.tsx";

export const SearchPage = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get('query');
    const normalizedQuery = query?.trim() || "";

    const { data, isFetching, isLoading } = useSearchMoviesQuery(
        { query: query ?? '', page: currentPage },
        { skip: normalizedQuery === "" }
    );

    useEffect(() => {
        setCurrentPage(1);
    }, [normalizedQuery]);

    const results = data?.results || [];

    if (isLoading) return <MoviesSkeleton/>

    return (
        <section>
            <div className={`container ${s.search__container}`} >
                <div className={s.search__wrapper}>
                    <h2>Search Results</h2>
                    <Search
                        onSubmit={(value) => {
                            setSearchParams({ query: value });
                        }}
                        val={normalizedQuery}
                        onClear={() => {
                            setCurrentPage(1);
                            setSearchParams({});
                        }}
                    />

                    {normalizedQuery && results.length !== 0 &&(
                        <p className={s.search__result}>
                            Results for "{normalizedQuery}"
                        </p>
                    )}

                    {!normalizedQuery && (
                        <p className={s.search__word}>
                            Enter a movie title to start searching.
                        </p>
                    )}

                    {isFetching && normalizedQuery && <p>Loading…</p>}

                    <div className="pagBlock">


                        {!isFetching && normalizedQuery !=='' && results.length === 0 && (
                            <p>No matches found for "{normalizedQuery}"</p>
                        )}

                        {results.length > 0 && normalizedQuery !=='' &&
                            results.map((movie) => (
                                <OneMovieCard
                                    key={movie.id}
                                    id={movie.id}
                                    title={movie.title}
                                    poster_path={movie.poster_path}
                                    vote_average={movie.vote_average}
                                />
                            ))
                        }

                    </div>
                    {normalizedQuery !=='' && results.length > 0 && (
                        <Pagination
                            currentPage={currentPage}
                            setCurrentPage={setCurrentPage}
                            pagesCount={data?.total_pages || 1}
                        />
                    )}

                </div>
            </div>
        </section>
    )
}