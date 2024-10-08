import Carousel from '../carousel/Carousel.tsx';
import data from '../../movies/movies.json';

function Trending() {
  const trendingMovies = data.filter((movie) => movie.isTrending);

  // Check if data is loaded
  if (!data || !Array.isArray(data)) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <Carousel data={trendingMovies} labelledBy="Trending" />
    </div>
  );
}

export default Trending;