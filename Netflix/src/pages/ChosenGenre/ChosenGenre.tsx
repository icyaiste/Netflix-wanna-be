import { useParams } from "react-router-dom";
import moviesData from "../../movies/movies.json";

function ChosenGenre() {
  const { genreName } = useParams(); 


  const filteredMovies = moviesData.filter(movie => movie.genre === genreName);
  

  return (
    <div>
      <h1>{genreName} Movies</h1>
      <div className="grid grid-cols-3 gap-x-3 gap-y-3">
        {filteredMovies.map((movie) => (
          <div key={movie.title} className="box-border h-64 w-64 bg-cover bg-center rounded-lg shadow-xl text-black ">
            <img src={movie.thumbnail} alt={movie.title} className="h-full w-full object-cover rounded-lg" />
            <h2>{movie.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ChosenGenre;