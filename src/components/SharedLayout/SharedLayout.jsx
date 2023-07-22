import Loader from 'components/Loader/Loader';
import css from './SharedLayout.module.css';
import { Link, Outlet } from 'react-router-dom';
import { Suspense } from 'react';

const SharedLayout = () => {
  return (
    <div className={css.container}>
      <header className={css.header}>
        <nav>
          <Link className={css.Link} to="/" end>
            Home
          </Link>
          <Link className={css.Link} to="/movies">
            Movies
          </Link>
        </nav>
      </header>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default SharedLayout;
