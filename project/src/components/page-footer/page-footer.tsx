import { memo } from 'react';
import Logo from '../logo/logo';

function PageFooter(): JSX.Element {
  return (
    <footer className="page-footer">
      <Logo isLight />

      <div className="copyright">
        <p>©2021 What to watch Ltd.</p>
      </div>
    </footer>
  );
}

export default memo(PageFooter);
