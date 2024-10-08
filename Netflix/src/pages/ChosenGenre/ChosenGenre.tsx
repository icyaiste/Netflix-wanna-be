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
      <h1 className="text-4xl font-bold text-center mb-10">
        {selectedGenre} Movies
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-8">
        {filteredMovies.map((movie) => (
          <div
            key={movie.title}
            className="h-100% sm:h-500% w-100% bg-cover bg-center pb-20 rhadow-xl text-black hover:cursor-pointer hover:brightness-75 transition duration-300 ease-in-out"
            onClick={() => handleNavigateToFilmInfo(movie.title)}
          >
            <img
              src={movie.thumbnail}
              alt={movie.title}
              className="h-full w-full object-cover rounded-lg"
            />
            <h2 className="text-center text-xl font-bold">{movie.title}</h2>
            <hr className="border-gray-500" />
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default ChosenGenre;
