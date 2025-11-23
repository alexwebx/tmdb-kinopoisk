import s from './FilteredMoviesPage.module.css'
import { Button } from "@/common/components/Button/Button.tsx";
import { useGetFiltersMoviesQuery, useGetGenresMoviesQuery } from "@/features/movie/api/moviesApi.ts";
import RangeSlider from "@/common/components/RangeSlider/RangeSlider.tsx";
import {useState, useEffect} from "react";
import {OneMovieCard} from "@/common/components/OneMovieCard/OneMovieCard.tsx";
import {Pagination} from "@/common/components/Pagination/Pagination.tsx";
import {useDebounceValue} from "@/common/hooks";


export const FilteredMoviesPage = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const { data: genres } = useGetGenresMoviesQuery();


    const [filters, setFilters] = useState({
        page: currentPage,
        sort_by: "popularity.desc",
        "vote_average.gte": 0.0,
        "vote_average.lte": 10.0,
        with_genres: ""
    });


    const [sliderValues, setSliderValues] = useState({ min: 0, max: 10 });

    const debouncedMin = useDebounceValue(sliderValues.min, 600);
    const debouncedMax = useDebounceValue(sliderValues.max, 600);

    useEffect(() => {
        setFilters(prev => ({
            ...prev,
            "vote_average.gte": debouncedMin,
            "vote_average.lte": debouncedMax
        }));
    }, [debouncedMin, debouncedMax]);

    const selectOnChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setFilters(prev => ({ ...prev, sort_by: e.target.value }));
    };

    const genresOnClickHandler = (genreId: number) => {
        setFilters(prev => {
            const selectedGenres = prev.with_genres ? prev.with_genres.split(",").map(Number) : [];
            let updatedGenres;
            if (selectedGenres.includes(genreId)) {
                updatedGenres = selectedGenres.filter(id => id !== genreId);
            } else {
                updatedGenres = [...selectedGenres, genreId];
            }
            return { ...prev, with_genres: updatedGenres.join(",") };
        });
    };

    const resetButtonOnClickHandler = () => {
        setFilters({
            page: currentPage,
            sort_by: "popularity.desc",
            "vote_average.gte": 0.0,
            "vote_average.lte": 10.0,
            with_genres: ""
        });
        setSliderValues({ min: 0, max: 10 });
    };

    const { data: filtersMovies } = useGetFiltersMoviesQuery(filters);
    console.log(filtersMovies)

    return (
        <section>
            <div className="container">
                <div className="layout">
                    <aside className="sidebar filtered__sidebar">
                        <h2 className={s.filter__title}>Filters / Sort</h2>

                        <div className={s.sortby}>
                            <p className={s.sortby__text}>Sort by</p>
                            <select className={s.sortby__select} value={filters.sort_by} onChange={selectOnChangeHandler}>
                                <option value="popularity.desc">Popularity ↓</option>
                                <option value="popularity.asc">Popularity ↑</option>
                                <option value="vote_average.desc">Rating ↓</option>
                                <option value="vote_average.asc">Rating ↑</option>
                                <option value="primary_release_date.desc">Release Date ↓</option>
                                <option value="primary_release_date.asc">Release Date ↑</option>
                                <option value="original_title.asc">Title A-Z</option>
                                <option value="original_title.desc">Title Z-A</option>
                            </select>
                        </div>

                        <RangeSlider
                            min={sliderValues.min}
                            max={sliderValues.max}
                            onChange={setSliderValues}
                        />


                        <div className={s.cat}>
                            {genres?.genres.map(genre => (
                                <Button
                                    key={genre.id}
                                    id_db={genre.id}
                                    titleButton={genre.name}
                                    activeButton={filters.with_genres.split(",").includes(String(genre.id))}
                                    onclickHandler={() => genresOnClickHandler(genre.id)}
                                />
                            ))}
                        </div>

                        <Button
                            titleButton={'Reset filters'}
                            activeButton={true}
                            onclickHandler={resetButtonOnClickHandler}
                        />

                    </aside>

                    <main className="content">
                        <div className="pagBlock">

                            {filtersMovies &&
                                filtersMovies?.results.map((movie) => (
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
                        {filtersMovies && (
                            <Pagination
                                currentPage={currentPage}
                                setCurrentPage={(page) => {
                                    setCurrentPage(page);
                                    setFilters(prev => ({ ...prev, page }));
                                }}
                                pagesCount={filtersMovies?.total_pages || 1}
                            />
                        )}
                    </main>
                </div>
            </div>
        </section>
    );
};
