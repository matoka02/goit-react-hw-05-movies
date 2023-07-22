import SharedLayout from './SharedLayout/SharedLayout';
import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';

const HomePage = lazy(()=>import('../pages/HomePage'));
const MovieDetailsPage = lazy(()=>import('../pages/MovieDetailsPage'));
const Movies = lazy(()=>import('../pages/Movies'));
const Cast = lazy(()=>import('../components/Cast/Cast'));
const Reviews = lazy(()=>import('../components/Reviews/Reviews'));

export const App = () => {
  return (
    <Routes>
      <Route path='/' element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route path='movies' element={<Movies />} />
        <Route path='movies/:movieId' element={<MovieDetailsPage />} >
          <Route path='cast' element={<Cast />}/>
          <Route path='reviews' element={<Reviews />}/>
        </Route>
      </Route>
    </Routes>
  );
};


