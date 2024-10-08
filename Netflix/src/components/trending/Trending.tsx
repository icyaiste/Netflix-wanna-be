import Carousel from '../carousel/Carousel.tsx';
import { Movie } from '../../interfaces/Interfaces.ts';
import data from '../../movies/movies.json';


//Välja filmer som har property isTrending = true

function Trending() {
  // Function to select even-indexed and shuffled movies
  const selectMovies = (allMovies: Movie[], limit: number): Movie[] => {
    const evenIndexMovies = allMovies.filter((_, index) => index % 2 === 0); // Filter even-indexed movies
    const shuffledMovies = evenIndexMovies.sort(() => Math.random() - 0.5); // Shuffle the filtered array
    return shuffledMovies.slice(0, limit); // Slice the shuffled movies to the limit
  };

  // Check if data is loaded
  if (!data || !Array.isArray(data)) {
    return <h1>Loading...</h1>;
  }

  // Select 5 even-indexed movies for trending
  const trendingMovies = selectMovies(data, 10);

  return (
    <div>
      {/* Pass only the selected trending movies to the Carousel */}
      <Carousel data={trendingMovies} />
    </div>
  );
}

export default Trending;
