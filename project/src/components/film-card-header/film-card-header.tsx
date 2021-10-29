import { Film } from '../../types/film';
import Breadcrumbs from '../breadcrumbs/breadcrumbs';
import FilmCardBg from '../film-card-bg/film-card-bg';
import FilmCardPoster from '../film-card-poster/film-card-poster';
import Logo from '../logo/logo';
import PageHeader from '../page-header/page-header';
import UserBlock from '../user-block/user-block';

type FilmCardHeaderProps = {
  film: Film;
}

function FilmCardHeader({film}: FilmCardHeaderProps): JSX.Element {
  const {id, name} = film;

  return (
    <div className="film-card__header">
      <FilmCardBg film={film} />

      <PageHeader>
        <Logo />
        <Breadcrumbs id={id} name={name} />
        <UserBlock />
      </PageHeader>

      <FilmCardPoster film={film} small />
    </div>
  );
}

export default FilmCardHeader;
