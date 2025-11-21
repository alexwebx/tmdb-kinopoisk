import s from "./Rating.module.css";

type Props = {
    rating:number
    card?:boolean
}

export const Rating = ({rating, card}:Props) => {

    const colorClass = rating >= 8
        ? s.ratingGreen
        : rating >= 6
            ? s.ratingYellow
            : s.ratingRed;

    const cardClass = card ? s.movie__rating_card : '';

    return  (
        <span className={`${s.movie__rating} ${colorClass} ${cardClass}`}>{rating}</span>
    )
}