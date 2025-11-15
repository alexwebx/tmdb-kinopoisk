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
                <div className="cattegory">
                    <div className="cattegory__top">
                        <h2 className="cattegory__title">Popular Movies</h2>
                        <button className="cattegory__btn">View more</button>
                    </div>
                    <div className="cattegory__body">
                        <a href="#" className="movie">
                            <div className="movie__img">
                                <button type="button" className="movie__favorite">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false" fill="currentColor">
                                        <path d="M12 21.35 10.55 20.03C5.4 15.36 2 12.27 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41 0.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.77-3.4 6.86-8.55 11.54L12 21.35z"></path>
                                    </svg>
                                </button>
                                <img src="http://image.tmdb.org/t/p/w185/g4JtvGlQO7DByTI6frUobqvSL3R.jpg" alt="movie"/>
                                <span className="movie__rating">7.9</span>
                            </div>
                            <p className="movie__title">Frankenstein</p>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}


