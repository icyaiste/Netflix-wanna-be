import { useParams } from "react-router-dom";
import moviesData from "../../movies/movies.json";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

const ChosenGenre = () => {
  const { selectedGenre } = useParams();

  const filteredMovies = moviesData.filter((movie) =>
    movie.genre.split(", ").includes(selectedGenre || ""),
  );

  return (
    <div>
      <Header />
      <h1 className="text-4xl font-bold text-center mb-10">
        {selectedGenre} Movies
      </h1>
      <div className="grid grid-cols-3 gap-x-3 gap-y-3">
        {filteredMovies.map((movie) => (
          <div
            key={movie.title}
            className="h-100% w-100% bg-cover bg-center pb-20 rhadow-xl text-black "
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
