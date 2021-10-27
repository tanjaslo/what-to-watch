import { Link, useLocation } from 'react-router-dom';
import { NavigationItem } from '../../const';

const INITIAL_CLASSNAME = 'film-nav__item';

function FilmNavList(): JSX.Element {
  const location = useLocation();

  return (
    <nav className="film-nav film-card__nav">
      <ul className="film-nav__list">
        {
          Object.values(NavigationItem).map((navigationItem) => {
            const activeClassname = location.hash.slice(1) === navigationItem ? `${INITIAL_CLASSNAME}--active` : '';
            const fullClassname = `${INITIAL_CLASSNAME} ${activeClassname}`;
            const path = `${location.pathname}#${navigationItem}`;
            const caption = `${navigationItem[0].toUpperCase()}${navigationItem.slice(1)}`;

            return (
              <li key={navigationItem} className={fullClassname}>
                <Link to={path} className="film-nav__link">{caption}</Link>
              </li>
            );
          })
        }
      </ul>
    </nav>
  );
}

export default FilmNavList;
