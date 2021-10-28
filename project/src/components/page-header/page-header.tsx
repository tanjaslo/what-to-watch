import classNames from 'classnames';

type PageHeaderProps = {
  children: React.ReactNode,
  filmCardHead?: boolean;
  userPageHead?: boolean;
}

function PageHeader({children, filmCardHead, userPageHead}: PageHeaderProps): JSX.Element {
  const INITIAL_CLASS = 'page-header';

  const fullClassName = classNames(
    INITIAL_CLASS,
    {'film-card__head': filmCardHead,
      'user-page__head': userPageHead,
    },
  );

  return (
    <header className={fullClassName}>
      {children}
    </header>
  );
}

export default PageHeader;
