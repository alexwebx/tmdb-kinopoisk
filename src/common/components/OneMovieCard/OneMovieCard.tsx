import s from './OneMovieCard.module.css';
import { useState, type MouseEvent } from "react";
import {getItemLS, setItemLS} from "@/common/utils";
import type {FavoriteMovie} from "@/common/types";

type Props = {
    id:number
    title: string
    poster_path: string | null
    vote_average: number
}

export function OneMovieCard({id, title, poster_path, vote_average}: Props){

    const initialFavorite = (getItemLS<FavoriteMovie[]>('movies') ?? []).some(m => m.id === id);
    const [favorite, setFavorite] = useState(initialFavorite);

    const favoriteHandler = (e: MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation()
        e.preventDefault()

        const allFavoriteMovies: FavoriteMovie[] =
            getItemLS<FavoriteMovie[]>('movies') ?? [];

        const isFavoriteMovie = allFavoriteMovies.some(m => m.id === id);
        const movie: FavoriteMovie = { id, title, poster_path, vote_average };
        const updated = isFavoriteMovie
            ? allFavoriteMovies.filter(m => m.id !== id)
            : [...allFavoriteMovies, movie];

        setItemLS('movies', updated);
        setFavorite(!isFavoriteMovie);
    }

    const rating = Number(vote_average.toFixed(1))

    const colorClass = rating >= 8
        ? s.ratingGreen
        : rating >= 6
            ? s.ratingYellow
            : s.ratingRed;

    const imgUrlMovie = poster_path ? `${import.meta.env.VITE_IMG_URL}/${poster_path}` : 'https://placehold.co/600x400';

    return (
        <a href={''} className={s.movie}>
            <div className={s.movie__img}>
                <button
                    type="button"
                    onClick={favoriteHandler}
                    className={`${s.movie__favorite} ${favorite ? s.active : ''}`}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false" fill="currentColor">
                        <path d="M12 21.35 10.55 20.03C5.4 15.36 2 12.27 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41 0.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.77-3.4 6.86-8.55 11.54L12 21.35z"></path>
                    </svg>
                </button>

                <img src={imgUrlMovie} alt={title}/>
                <span
                    className={`
                        ${s.movie__rating} 
                        ${s.movie__rating_card} 
                        ${colorClass}
                    `}>
                    {rating}
                </span>
            </div>
            <p className={s.movie__title}>{title}</p>
        </a>
    )
}