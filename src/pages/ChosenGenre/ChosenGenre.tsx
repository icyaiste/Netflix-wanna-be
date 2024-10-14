import { useParams } from 'react-router-dom';
import moviesData from '../../movies/movies.json';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import { useNavigate } from 'react-router-dom';

const ChosenGenre = () => {
  const { selectedGenre } = useParams();

  const filteredMovies = moviesData.filter((movie) =>
    movie.genre.split(', ').includes(selectedGenre || ''),
  );

  const navigate = useNavigate();

  const handleNavigateToFilmInfo = (title: string) => {
    navigate(`/info/${title}`);
  };

  return (
    <div>
      <Header />
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-10">
        {selectedGenre} Movies
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-4">
        {/*responsive,mobilefriendly */}
        {filteredMovies.map((movie) => (
          <div
            key={movie.title}
            className="relative bg-cover bg-center rounded-lg shadow-lg hover:cursor-pointer hover:brightness-75 transition duration-300 ease-in-out"
            onClick={() => handleNavigateToFilmInfo(movie.title)}
          >
            <img
              src={movie.thumbnail}
              alt={movie.title}
              className="md:h-[46rem] w-full object-cover rounded-t-lg"
            />
            <h2 className="text-center text-lg sm:text-xl font-bold mt-2">
              {movie.title}
            </h2>
            <hr className="border-gray-500" />
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};
export default ChosenGenre;
