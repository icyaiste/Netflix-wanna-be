import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { Movie } from "../../interfaces/Interfaces";

function FilmInfo() {
  const { title } = useParams<{ title?: string }>();
  console.log("Retrieved title from URL:", title);
  const [movie, setMovie] = useState<Movie | null>(null);
  const [loading, setLoading] = useState(true);

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
    <div>
      <h1>Film info here</h1>
      <img src={movie.thumbnail} alt={movie.title} />
      <h1>Title: {movie.title}</h1>
      <p>Year: {movie.year}</p>
      <p>Rating: {movie.rating}</p>
      <p>Actors: {movie.actors.join(', ')}</p>
      <p>Genre: {movie.genre}</p>
      <p>Synopsis: {movie.synopsis}</p>
      <button>Go back</button>
    </div>
  );
}

export default FilmInfo;
