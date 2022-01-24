import { memo } from 'react';
import { Film } from '../../types/film';
import FilmCardBg from '../film-card-bg/film-card-bg';
import FilmCardPoster from '../film-card-poster/film-card-poster';
import PageHeader from '../ui/page-header/page-header';
import Breadcrumbs from '../breadcrumbs/breadcrumbs';

type FilmCardHeaderProps = {
  film: Film;
};

function FilmCardHeader({ film }: FilmCardHeaderProps): JSX.Element {
  const { id, name } = film;

  return (
    <div className="film-card__header">
      <FilmCardBg film={film} />
      <PageHeader>
        <Breadcrumbs id={id} name={name} />
      </PageHeader>
      <FilmCardPoster film={film} small />
    </div>
  );
}

export default memo(FilmCardHeader);
