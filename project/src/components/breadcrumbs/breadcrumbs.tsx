import { Link } from 'react-router-dom';

type BreadcrumbsProps = {
  id: number | string;
  name: string;
};

function Breadcrumbs({ id, name }: BreadcrumbsProps): JSX.Element {
  return (
    <nav className="breadcrumbs">
      <ul className="breadcrumbs__list">
        <li className="breadcrumbs__item">
          <Link className="breadcrumbs__link" to={`/films/${id}`}>
            {name}
          </Link>
        </li>
        <li className="breadcrumbs__item">
          <Link className="breadcrumbs__link" to={`/films/${id}/review`}>
            Add review
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Breadcrumbs;
