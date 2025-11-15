import s from "./SearchPage.module.css"
export const SearchPage = () => {
    return (
        <section>
            <div className="container">
                <div className={s.search__wrapper}>
                    <h2 className={s.search__title}>Search Results</h2>
                    <div className={s.search__box}>
                        <input type="search" className={s.search__input} placeholder="Search for a movie" />
                        <button className={s.search__btn}>Search</button>
                    </div>
                    <p className={s.search__result}>Results for "q"</p>
                    <p className={s.search__word}>Enter a movie title to start searching.</p>
                </div>

            </div>
        </section>
    )
}