import { Film } from '../../types/film';
import FilmsList from '../films-list/films-list';
import GenresList from '../genres-list/genres-list';

type CatalogProps = {
  films: Film[];
}

function Catalog({films}: CatalogProps): JSX.Element {
  return (
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>
      <GenresList />
      <FilmsList films={films} />

      <div className="catalog__more">
        <button className="catalog__button" type="button">Show more</button>
      </div>
    </section>
  );
}

export default Catalog;
