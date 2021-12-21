import classNames from 'classnames';
import { SyntheticEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import { Film } from '../../types/film';
import { TabItem } from '../../const';
import FilmCardOverview from './film-card-overview/film-card-overview';
import FilmCardReviews from './film-card-reviews/film-card-reviews';
import FilmCardDetails from './film-card-details/film-card-details';

type TabListProps = {
  film: Film;
};

const renderTabContent = (tabItem: string, film: Film) => {
  switch (tabItem) {
    case TabItem.OVERVIEW: {
      return <FilmCardOverview film={film} />;
    }
    case TabItem.REVIEWS: {
      return <FilmCardReviews />;
    }
    case TabItem.DETAILS: {
      return <FilmCardDetails film={film} />;
    }
  }
};

function Tabs({ film }: TabListProps): JSX.Element {
  const [activeTab, setActiveTab] = useState<string>(TabItem.OVERVIEW);

  const INITIAL_CLASSNAME = 'film-nav__item';

  const activeClassname = classNames(INITIAL_CLASSNAME, {
    'film-nav__item--active': activeTab,
  });

  const tabsList = Object.values(TabItem);

  const handleTabItemClick = (evt: SyntheticEvent<HTMLElement>) => {
    evt.preventDefault();
    const newActiveTab = evt.currentTarget.dataset.value as string;
    setActiveTab(newActiveTab);
  };

  return (
    <>
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">
          {tabsList.map((item, i) => {
            const tabName = `${item[0].toUpperCase()}${item.slice(1)}`;

            return (
              <li
                key={item + String(i)}
                className={
                  item === activeTab ? activeClassname : INITIAL_CLASSNAME
                }
              >
                <Link
                  className="film-nav__link"
                  to={`#${item}`}
                  data-value={item}
                  onClick={handleTabItemClick}
                >
                  {tabName}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      {renderTabContent(activeTab, film)}
    </>
  );
}

export default Tabs;
