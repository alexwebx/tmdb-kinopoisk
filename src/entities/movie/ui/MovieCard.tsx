import s from "./MovieCard.module.css"

export const MovieCard = () => {
    return (
        <section>
            <div className={`container ${s.movie__container}`}>

                <div className="layout">
                    <aside className="sidebar">
                        <img className={s.poster} alt="Playdate poster"
                             src="http://image.tmdb.org/t/p/w342/fGodXWqJkkkbSebPIlxLSygV8GY.jpg"/>
                    </aside>

                    <main className="content">

                        <div className={s.movie__header}>
                            <h2 className={s.movie__title}>Playdate</h2>
                            <button className="cattegory__btn">Back</button>
                        </div>

                        <p className={s.movie__word}>Release year: 2025<span className="movie__rating movie__rating-green">7.9</span>Runtime: 1h 33m</p>
                        <p className={s.movie__text}>
                            When out-of-work accountant Brian joins stay-at-home dad Jeff for a playdate with their sons, he expects a laid-back afternoon. Instead, they're chased by mercenaries, and Brian—totally unprepared—must survive one absurd obstacle after another.
                        </p>

                        <div className={s.genres}>
                            <h3 className={s.genres__title}>Genres</h3>
                            <div className={s.genres__box} >
                                <span className={s.genres__name}>Action</span>
                                <span className={s.genres__name}>Action</span>
                                <span className={s.genres__name}>Action</span>
                            </div>
                        </div>

                    </main>
                </div>

                <div className="cattegory">
                    <div className="cattegory__top">
                        <h2 className="cattegory__title">Cast</h2>
                    </div>
                    <div className="cattegory__body">
                        <div className="actor">
                            <div className="actor__box">
                                <img className={s.actor__img} alt="Kevin James portrait" loading="lazy"
                                     src="http://image.tmdb.org/t/p/w185/3WPW5duZyQcjveefxwLULgIyhM0.jpg"/>
                            </div>
                            <p className={s.actor__name}>Kevin James</p>
                            <p className={s.actor__film_name}>Brian</p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}