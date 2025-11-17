import {OneMovieCard} from "@/common/components/OneMovieCard/OneMovieCard.tsx";
import s from "./CategoryBlock.module.css"
import {Button} from "@/common/components/Button/Button.tsx";
import type {MovieResult} from "@/features/movie/api/movieApi.types.ts";

type Props = {
    titleCategory: string | undefined
    needButton?: boolean
    buttonHandler?: ()=> void
    countMovies?: number
    moviesArray: MovieResult[] | undefined
}

export const CategoryBlock = ({
                                  titleCategory,
                                  needButton,
                                  buttonHandler,
                                  countMovies,
                                  moviesArray,
                              }: Props) => {

    const moviesToShow = moviesArray?.slice(
        0,
        countMovies && countMovies > 0 ? countMovies : moviesArray.length
    )

    return (
        <div className={s.cattegory}>
            <div className={s.cattegory__top}>
                <h2 className={s.cattegory__title}>{titleCategory}</h2>
                {needButton && <Button onclickHandler={buttonHandler} titleButton={'View more'} />}
            </div>
            <div className={s.cattegory__body}>
                {moviesToShow?.map((movie) => (
                    <OneMovieCard
                        key={movie.id}
                        titleMovie={movie.title}
                        imageUrlMovie={movie.poster_path}
                        ratingMovie={movie.vote_average}
                        urlMovie={''}
                    />
                ))}
            </div>
        </div>
    )
}
