import s from "./MovieCard.module.css"
import {useNavigate, useParams} from "react-router";
import {
    useGetCreditsMovieQuery,
    useGetDetailsMovieQuery,
    useGetSimilarMoviesQuery
} from "@/features/movie/api/moviesApi.ts";
import {Button} from "@/common/components/Button/Button.tsx";
import {Rating} from "@/common/components/Rating/Rating.tsx";
import {CategoryBlock} from "@/common/components/CategoryBlock/CategoryBlock.tsx";
import {NO_IMG} from "@/common/constants";

export const MovieCard = () => {
    const { id } = useParams();
    const movieId = Number(id);
    const {data:movie} = useGetDetailsMovieQuery(movieId);
    const {data:credits} = useGetCreditsMovieQuery(movieId);
    const {data:similar} = useGetSimilarMoviesQuery(movieId);
    const navigate = useNavigate();

    const imgUrlMovie = movie?.poster_path ? `${import.meta.env.VITE_IMG_URL}/${movie?.poster_path}` : NO_IMG;

    const timeString = (minutes?: number) => {
        if (!minutes) return "—";
        const h = Math.floor(minutes / 60);
        const m = minutes % 60;
        return `${h}h ${m}m`;
    };

    return (
        <section>
            <div className={`container ${s.movie__container}`}>

                <div className="layout">
                    <aside className="sidebar">
                        <img className={s.poster} alt="Playdate poster"
                             src={imgUrlMovie}/>
                    </aside>

                    <main className="content">

                        <div className={s.movie__header}>
                            <h2 className={s.movie__title}>{movie?.title}</h2>
                            <Button titleButton={'Back'} onclickHandler={() => navigate(-1)} />
                        </div>

                        <p className={s.movie__word}>
                            Release year: {movie?.release_date?.slice(0, 4) ?? "N/A"}
                            <Rating rating={Number(movie?.vote_average?.toFixed(1) ?? 0)} />
                            Runtime: {timeString(movie?.runtime)}
                        </p>
                        <p className={s.movie__text}>
                            {movie?.overview}
                        </p>

                        {/*Жанры*/}
                        {movie?.genres && movie.genres.length > 0 && (
                            <div className={s.genres}>
                                <h3 className={s.genres__title}>Genres</h3>
                                <div className={s.genres__box}>
                                    {movie.genres.map((genre) => (
                                        <span key={genre.id} className={s.genres__name}>{genre.name}</span>
                                    ))}
                                </div>
                            </div>
                        )}
                        {/*Жанры*/}

                    </main>
                </div>

                <div className={s.cattegory}>
                    <div className={s.cattegory__top}>
                        <h2 className="cattegory__title">Cast</h2>
                    </div>
                    <div className={s.cattegory__body}>
                        {credits?.cast?.slice(0, 6).map((credit) =>
                            {
                                const imgUrlCast = credit.profile_path ? `${import.meta.env.VITE_IMG_URL}/${credit.profile_path}` : NO_IMG;
                                return (
                                    <div key={credit.id} className={s.actor}>
                                        <div className={s.actor__box}>
                                            <img className={s.actor__img} alt={credit.name} loading="lazy"
                                                 src={imgUrlCast}/>
                                        </div>
                                        <p className={s.actor__name}>{credit.name}</p>
                                        <p className={s.actor__film_name}>{credit.character}</p>
                                    </div>
                                )
                            }
                        )}
                    </div>
                </div>

                <CategoryBlock titleCategory={'Similar Movies'} countMovies={6} moviesArray={similar?.results} />

            </div>
        </section>
    )
}