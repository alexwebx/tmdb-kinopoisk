import {Navigate, Route, Routes} from "react-router";
import {PageNotFound} from "@/common/components";
import {MainPage} from "@/pages/MainPage/MainPage.tsx";
import {CategoryMoviesPage} from "@/pages/CategoryMoviesPage/CategoryMoviesPage.tsx";
import {FavoritesPage} from "@/pages/FavoritesPage/FavoritesPage.tsx";
import {SearchPage} from "@/pages/SearchPage/SearchPage.tsx";
import {FilteredMoviesPage} from "@/pages/FilteredMoviesPage/FilteredMoviesPage.tsx";

export const Path = {
    Main: '/',
    CategoryMovies: '/category/:type',
    Category: '/category',
    FilteredMovies: '/filtered-movies',
    Search: '/search',
    Favorites: '/favorites',
    NotFound: '*',
} as const
export const Routing = () =>{
    return (
        <Routes>
            <Route path={Path.Main} element={<MainPage/>} />
            <Route path={Path.CategoryMovies} element={<CategoryMoviesPage/>} />
            <Route path={Path.Category} element={<Navigate to={`${Path.Category}/popular`} replace />} />
            <Route path={Path.FilteredMovies} element={<FilteredMoviesPage/>} />
            <Route path={Path.Search} element={<SearchPage/>} />
            <Route path={Path.Favorites} element={<FavoritesPage/>} />
            <Route path={Path.NotFound} element={<PageNotFound/>} />
        </Routes>
    )
}