import {OneMovieCard} from "@/common/components/OneMovieCard/OneMovieCard.tsx";
import s from "./CategoryBlock.module.css"
import {Button, type ButtonProps} from "@/common/components/Button/Button.tsx";

type Props = ButtonProps &{
    titleCategory: string
    moviesArray: string[]
}

export const CategoryBlock = (
    {titleCategory,
    titleButton,
    moviesArray}:
    Props) => {
    return (
        <div className={s.cattegory}>
            <div className={s.cattegory__top}>
                <h2 className={s.cattegory__title}>{titleCategory}</h2>
                <Button
                    titleButton={titleButton}
                />
            </div>
            <div className={s.cattegory__body}>
                {moviesArray?.map((movie) => {
                    return (
                        <OneMovieCard
                            titleMovie={movie.titleMovie}
                            imageUrlMovie={movie.imageUrlMovie}
                            ratingMovie={movie.ratingMovie}
                            isFavoriteMovie={movie.isFavoriteMovie}
                            urlMovie={movie.urlMovie}
                        />
                    )
                })}

            </div>
        </div>
    )
}