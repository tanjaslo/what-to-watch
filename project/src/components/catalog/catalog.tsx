import { Film } from '../../types/film';
import FilmsList from '../films-list/films-list';
import GenresList from '../genres-list/genres-list';

type CatalogProps = {
  films: Film[];
  isMainPage?: boolean;
}

function Catalog({films, isMainPage}: CatalogProps): JSX.Element {
  return (
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>

      {isMainPage ? (
        <>
          <GenresList />
          <FilmsList films={films} />
          <div className="catalog__more">
            <button className="catalog__button" type="button">Show more</button>
          </div>
        </>
      ) : (
        <FilmsList films={films} />
      )}
    </section>
  );
}

export default Catalog;
