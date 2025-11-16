import s from './MainPage.module.css'
import {Search} from "@/common/components/Search/Search.tsx";


export const MainPage = ()=> {
    return (
        <section>

            <div className={s.offer}>
                <div className="container">
                    <div className={s.offer__box}>
                        <h1 className={s.offer__title}>Welcome</h1>
                        <Search/>
                        <p className={s.offer__text}>Browse highlighted titles from TMDB</p>
                    </div>
                </div>
            </div>

            <div className="container">

            </div>
        </section>
    )
}


