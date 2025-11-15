import s from "./SearchPage.module.css"
import {Search} from "@/common/components/Search/Search.tsx";
export const SearchPage = () => {
    return (
        <section>
            <div className="container">
                <div className={s.search__wrapper}>
                    <h2 className={s.search__title}>Search Results</h2>
                    <Search/>
                    <p className={s.search__result}>Results for "q"</p>
                    <p className={s.search__word}>Enter a movie title to start searching.</p>
                </div>

            </div>
        </section>
    )
}