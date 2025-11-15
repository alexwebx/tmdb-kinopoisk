import s from "./Search.module.css";

export const Search = () =>{
    return (
        <div className={s.search__box}>
            <input type="search" className={s.search__input} placeholder="Search for a movie" />
            <button className={s.search__btn}>Search</button>
        </div>
    )
}