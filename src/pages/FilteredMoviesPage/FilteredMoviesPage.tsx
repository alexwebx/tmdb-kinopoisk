import s from './FilteredMoviesPage.module.css'
export const FilteredMoviesPage = () => {
    return (
        <section>
            <div className="container">

                <div className={s.layout}>
                    <aside className={s.sidebar}>
                        <h2 className={s.filter__title}>Filters / Sort</h2>

                        <div className={s.sortby}>
                            <p className={s.sortby__text}>Sort by</p>
                            <select className={s.sortby__select}>
                                <option value="value1" selected>Значение 1</option>
                                <option value="value2">Значение 2</option>
                                <option value="value3">Значение 3</option>
                            </select>
                        </div>

                        <div className={s.rating}>
                            <div className={s.rating__box}>
                                <p className={s.rating__word}>Rating</p>
                                <p className={s.rating__count}>0.0 - 10.0</p>
                            </div>

                            <input min="0" max="10" step="0.1" className={s.rating__input} type="range" value="0"/>
                        </div>

                        <div className={s.cat}>
                            <button className="cattegory__btn">Action</button>
                            <button className="cattegory__btn">Action</button>
                            <button className="cattegory__btn">Action</button>
                            <button className="cattegory__btn">Action</button>
                            <button className="cattegory__btn">Action</button>
                            <button className="cattegory__btn">Action</button>
                            <button className="cattegory__btn">Action</button>
                        </div>

                        <button className="cattegory__btn active">Reset filters</button>

                    </aside>

                    <main className={s.content}>

                    </main>
                </div>

            </div>
        </section>
    )
}