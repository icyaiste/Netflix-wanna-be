import { useEffect, useState } from "react";
import { useParams , useNavigate} from 'react-router-dom';
import { Movie } from "../../interfaces/Interfaces";

function FilmInfo() {
  const { title } = useParams<{ title?: string }>();
  console.log("Retrieved title from URL:", title);
  const [movie, setMovie] = useState<Movie | null>(null);
  const [loading, setLoading] = useState(true);
const navigate= useNavigate();
  useEffect(() => {
    const loadMovies = async () => {
      try {
        const res = await import('../../movies/movies.json'); 
        const movies: Movie[] = res.default;
       console.log("movie:",movies);
        const foundMovie = movies.find(movie => movie.title === title);
        console.log("thats the title:", title);
        if (foundMovie) {
          setMovie(foundMovie);
        }
      } catch (error) {
        console.error("Error loading movies:", error);
      } finally {
        setLoading(false); 
      }
    };
    loadMovies();
  }, [title]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!movie) {
    return <div>Movie not found.</div>;
  }

  return (
<div className="flex flex-col items-center justify-center max-w-lg mx-auto p-4 sm:p-8 bg-gray-900 min-h-screen text-white overflow-hidden">
  <img 
    src={movie.thumbnail} 
    alt={movie.title} 
    className="w-full h-[40vh] object-contain rounded-lg shadow-xl mb-2" 
  />
  <div className="text-center font-poppins">
    <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">
      {movie.title}
    </h1>
    <p className="text-lg text-gray-500 italic">
      {movie.year} | {movie.rating}
    </p>
  </div> 
  <div className="bg-gray-50 p-4 sm:p-6 rounded-lg shadow-lg w-full mt-4 font-karma">
    <p className="text-gray-700 mb-3">
      <span className="font-semibold">Actors:</span> {movie.actors.join(', ')}
    </p>
    <p className="text-gray-700 mb-3">
      <span className="font-semibold">Genre:</span> {movie.genre}
    </p>
    <p className="text-gray-700 mb-3">
      <span className="font-semibold">Synopsis:</span> {movie.synopsis}
    </p>
  </div>
  <button 
    onClick={() => navigate(-1)} 
    className="mt-6 px-6 py-2 bg-gradient-to-r from-red-700 to-red-500 text-white font-semibold rounded-full shadow-lg hover:from-red-500 hover:to-red-700 focus:outline-none focus:ring-2 focus:ring-red-400 transition-all font-raleway"
  >
    Go back
  </button>
</div>

  );
  
}

export default FilmInfo;

