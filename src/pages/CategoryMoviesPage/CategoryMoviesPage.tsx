import {
    useGetNowPlayingMoviesQuery,
    useGetPopularMoviesQuery,
    useGetTopRatedMoviesQuery,
    useGetUpcomingMoviesQuery
} from "@/features/movie/api/moviesApi.ts";
import {useNavigate, useParams} from "react-router";
import {CategoryBlock} from "@/common/components/CategoryBlock/CategoryBlock.tsx";
import {Button} from "@/common/components/Button/Button.tsx";
import {Path} from "@/common/routing";
import s from "./CategoryMoviesPage.module.css"

export const CategoryMoviesPage = () => {
    const { type } = useParams();
    const navigate = useNavigate();

    const { data:popularMovies } = useGetPopularMoviesQuery();
    const { data:topRatedMovies } = useGetTopRatedMoviesQuery();
    const { data:nowPlayingMovies } = useGetNowPlayingMoviesQuery();
    const { data:upcomingMovies } = useGetUpcomingMoviesQuery();

    let queryHook;
    let title;

    switch (type) {
        case "popular":
            queryHook = popularMovies;
            title = 'Popular';
            break;
        case "top-rated":
            queryHook = topRatedMovies;
            title = 'Top Rated';
            break;
        case "upcoming":
            queryHook = nowPlayingMovies;
            title = 'Upcoming';
            break;
        case "now-playing":
            queryHook = upcomingMovies;
            title = 'Now Playing';
            break;
        default:
            queryHook = null;
    }

    return (
        <section>
            <div className="container">
                <div className="cattegory">
                    <div className={s.cattegory__menu}>
                        <Button onclickHandler={()=>{navigate(Path.CategoryMovies.replace(':type', 'popular'))}} activeButton={type==='popular'} titleButton={'Popular'} />
                        <Button onclickHandler={()=>{navigate(Path.CategoryMovies.replace(':type', 'top-rated'))}} activeButton={type==='top-rated'} titleButton={'Top Rated'} />
                        <Button onclickHandler={()=>{navigate(Path.CategoryMovies.replace(':type', 'upcoming'))}} activeButton={type==='upcoming'} titleButton={'Upcoming'} />
                        <Button onclickHandler={()=>{navigate(Path.CategoryMovies.replace(':type', 'now-playing'))}} activeButton={type==='now-playing'} titleButton={'Now Playing'} />
                    </div>
                    <CategoryBlock titleCategory={title} moviesArray={queryHook?.results} />
                </div>
            </div>
        </section>
    );
};
