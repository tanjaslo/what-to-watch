type BreadcrumbsProps = {
  id: number | string;
  name: string;
}

function Breadcrumbs({id, name}: BreadcrumbsProps): JSX.Element {
  return (
    <nav className="breadcrumbs">
      <ul className="breadcrumbs__list">
        <li className="breadcrumbs__item">
          <a href={`/films/${id}`} className="breadcrumbs__link">
            {name}
          </a>
        </li>
        <li className="breadcrumbs__item">
          <a href="/" className="breadcrumbs__link">
            Add review
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Breadcrumbs;
