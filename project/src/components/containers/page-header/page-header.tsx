import classNames from 'classnames';
import React from 'react';
import Logo from '../../logo/logo';
import UserBlock from '../../user-block/user-block';

type PageHeaderProps = {
  children?: React.ReactNode;
  filmCardHead?: boolean;
  userPageHead?: boolean;
  title?: string;
};

function PageHeader({
  children,
  filmCardHead,
  userPageHead,
  title,
}: PageHeaderProps): JSX.Element {
  const INITIAL_CLASS = 'page-header';

  const fullClassName = classNames(INITIAL_CLASS, {
    'film-card__head': filmCardHead,
    'user-page__head': userPageHead,
  });

  return (
    <header className={fullClassName}>
      <Logo />
      {children}
      <UserBlock />
      {title && <h1 className="page-title user-page__title">{title}</h1>}
    </header>
  );
}

export default PageHeader;
