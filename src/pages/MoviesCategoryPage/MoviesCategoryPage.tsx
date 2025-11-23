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
import s from "./MoviesCategoryPage.module.css"
import {Pagination} from "@/common/components/Pagination/Pagination.tsx";
import {useState} from "react";
import {MoviesSkeleton} from "@/common/components/MovieSkeleton/MovieSkeleton.tsx";

export const MoviesCategoryPage = () => {
    const [currentPage, setCurrentPage] = useState<number>(1);
    const { type } = useParams();
    const navigate = useNavigate();

    const { data:popularMovies, isLoading:isLoadingPopularMovies } = useGetPopularMoviesQuery({page:currentPage});
    const { data:topRatedMovies, isLoading:isLoadingTopRatedMovies } = useGetTopRatedMoviesQuery({page:currentPage});
    const { data:nowPlayingMovies, isLoading:isLoadingNowPlayingMovies, } = useGetNowPlayingMoviesQuery({page:currentPage});
    const { data:upcomingMovies, isLoading:isLoadingUpcomingMovies } = useGetUpcomingMoviesQuery({page:currentPage});

    const isLoading =
        isLoadingPopularMovies ||
        isLoadingTopRatedMovies ||
        isLoadingNowPlayingMovies ||
        isLoadingUpcomingMovies;

    if (isLoading) return <MoviesSkeleton/>

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
            <div className={`container ${s.category__container}`} >
                <div className="cattegory">
                    <div className={s.cattegory__menu}>
                        <Button onclickHandler={()=>{
                            navigate(Path.CategoryMovies.replace(':type', 'popular'))
                            setCurrentPage(1);
                        }} activeButton={type==='popular'} titleButton={'Popular'} />
                        <Button onclickHandler={()=>{
                            navigate(Path.CategoryMovies.replace(':type', 'top-rated'))
                            setCurrentPage(1);
                        }} activeButton={type==='top-rated'} titleButton={'Top Rated'} />
                        <Button onclickHandler={()=>{
                            navigate(Path.CategoryMovies.replace(':type', 'upcoming'))
                            setCurrentPage(1);
                        }} activeButton={type==='upcoming'} titleButton={'Upcoming'} />
                        <Button onclickHandler={()=>{
                            navigate(Path.CategoryMovies.replace(':type', 'now-playing'))
                            setCurrentPage(1);
                        }} activeButton={type==='now-playing'} titleButton={'Now Playing'} />
                    </div>
                    <CategoryBlock titleCategory={title} moviesArray={queryHook?.results} />
                </div>
                {queryHook && (
                    <Pagination
                        currentPage={currentPage}
                        setCurrentPage={setCurrentPage}
                        pagesCount={queryHook?.total_pages || 1}
                    />
                )}
            </div>
        </section>
    );
};
