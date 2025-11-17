import s from './OneMovieCard.module.css';
import { useState, type MouseEvent } from "react";

export type OneMovieCardProps = {
    titleMovie: string
    imageUrlMovie: string | null
    ratingMovie: number
    isFavoriteMovie?: boolean
    urlMovie: string
}

export function OneMovieCard({titleMovie, imageUrlMovie, ratingMovie, isFavoriteMovie, urlMovie}: OneMovieCardProps){
    const [favorite, setFavorite] = useState(isFavoriteMovie || false)

    const favoriteHandler = (e: MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation()
        e.preventDefault()
        setFavorite(!favorite);
    }

    const rating = Number(ratingMovie.toFixed(1))

    const colorClass =
        rating >= 8
            ? s.movie__rating_green
            : rating >= 6
                ? s.movie__rating_yellow
                : s.movie__rating_red;

    return (
        <a href={urlMovie} className={s.movie}>
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

                <img src={`https://image.tmdb.org/t/p/w1280${imageUrlMovie}`} alt={titleMovie}/>
                <span
                    className={`
                    ${s.movie__rating} 
                    ${s.movie__rating_card} 
                    ${colorClass}
                    `}>
                    {rating}
                </span>
            </div>
            <p className={s.movie__title}>{titleMovie}</p>
        </a>
    )
}