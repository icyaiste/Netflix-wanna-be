import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Bookmarked from '../pages/bookmarked/Bookmarked';
import Categories from '../pages/categories/Categories';
import FilmInfo from '../pages/filmInfo/FilmInfo';
import ChosenGenre from '../pages/ChosenGenre/ChosenGenre';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/favs',
    element: <Bookmarked />,
  },
  {
    path: '/categories',
    element: <Categories />,
  },
  {
    path: '/info/:title',
    element: <FilmInfo />,
  },
  {
    path: '/genre/:selectedGenre',
    element: <ChosenGenre />,
  },
]);

export default router;
