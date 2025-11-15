import s from './MainPage.module.css'


export const MainPage = ()=> {
    return (
        <section>

            <div className={s.offer}>
                <div className="container">
                    <div className={s.offer__box}>
                        <h1 className={s.offer__title}>Welcome</h1>
                        <p className={s.offer__text}>Browse highlighted titles from TMDB</p>
                    </div>
                </div>
            </div>

            <div className="container">

            </div>
        </section>
    )
}


