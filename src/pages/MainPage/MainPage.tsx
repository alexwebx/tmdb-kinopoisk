import {useMemo} from 'react';
import s from './MainPage.module.css'
import { Search } from "@/common/components/Search/Search.tsx";
import {
    useGetNowPlayingMoviesQuery,
    useGetPopularMoviesQuery,
    useGetTopRatedMoviesQuery, useGetUpcomingMoviesQuery
} from "@/features/movie/api/moviesApi.ts";
import {CategoryBlock} from "@/common/components/CategoryBlock/CategoryBlock.tsx";
import {useNavigate} from "react-router";
import {Path} from "@/common/routing";
import {NO_IMG} from "@/common/constants";

export const MainPage = () => {
    const { data:popularMovies } = useGetPopularMoviesQuery();
    console.log(popularMovies);
    const { data:topRatedMovies } = useGetTopRatedMoviesQuery();
    const { data:nowPlayingMovies } = useGetNowPlayingMoviesQuery();
    const { data:upcomingMovies } = useGetUpcomingMoviesQuery();

    const navigate = useNavigate();


    const randomPoster = useMemo(() => {
        if (!popularMovies?.results?.length) return null;
        const movie = popularMovies.results[Math.floor(Math.random() * popularMovies.results.length)];
        return movie.backdrop_path;
    }, [popularMovies]);

    const bgImage = randomPoster
        ? `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${import.meta.env.VITE_IMG_URL}/${randomPoster})`
        : NO_IMG;

    
    return (
        <section>
            <div className={s.offer} style={{ backgroundImage: bgImage }}>
                <div className="container">
                    <div className={s.offer__box}>
                        <h1 className={s.offer__title}>Welcome</h1>
                        <Search
                            onSubmit={(query) =>
                                navigate(`${Path.Search}?query=${encodeURIComponent(query)}`)
                            }
                        />
                        <p className={s.offer__text}>Browse highlighted titles from TMDB</p>
                    </div>
                </div>
            </div>
            <div className="container">
                <CategoryBlock titleCategory={'Popular Movies'} countMovies={6} needButton={true} buttonHandler={()=>{navigate(Path.CategoryMovies.replace(':type', 'popular'))}} moviesArray={popularMovies?.results} />
                <CategoryBlock titleCategory={'Top Rated Movies'} countMovies={6} needButton={true} buttonHandler={()=>{navigate(Path.CategoryMovies.replace(':type', 'top-rated'))}} moviesArray={topRatedMovies?.results} />
                <CategoryBlock titleCategory={'Upcoming Movies'} countMovies={6} needButton={true} buttonHandler={()=>{navigate(Path.CategoryMovies.replace(':type', 'upcoming'))}} moviesArray={upcomingMovies?.results} />
                <CategoryBlock titleCategory={'Now Playing Movies'} countMovies={6} needButton={true} buttonHandler={()=>{navigate(Path.CategoryMovies.replace(':type', 'now-playing'))}} moviesArray={nowPlayingMovies?.results} />
            </div>
        </section>
    );
};
