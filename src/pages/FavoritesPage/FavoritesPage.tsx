import {CategoryBlock} from "@/common/components/CategoryBlock/CategoryBlock.tsx";
import s from './FavoritesPage.module.css';
import type {FavoriteMovie} from "@/common/types";
import {useLocalStorage} from "@/common/hooks";

export const FavoritesPage = () => {

    const items = useLocalStorage<FavoriteMovie[]>('movies', []);

    return (
        <section className={'section'}>
            <div className="container">
                <h2>Favorites</h2>
                {
                    items.length > 0
                        ? <CategoryBlock moviesArray={items} needButton={false} titleCategory="Favorite Movies"/>
                        : <p className={s.text}>Add movies to favorites to see them on this page.</p>
                }
            </div>
        </section>
    )
}