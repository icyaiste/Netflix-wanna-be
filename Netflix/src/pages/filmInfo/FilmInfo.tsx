import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Movie } from '../../interfaces/Interfaces';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import Bookmark from '../../components/bookmark/Bookmark';

function FilmInfo() {
  const { title } = useParams<{ title?: string }>();
  console.log('Title from useParams:', title); 
  const [movie, setMovie] = useState<Movie | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadMovies = async () => {
      try {
        //importera filmer från movies.json filen
        const res = await import('../../movies/movies.json');
        //ge en variable till impoterade filmen
        const movies: Movie[] = res.default;
       // console.log("thats the whole list of movies:",movies);
        //hitta filmen med den aktuella title
        const foundMovie = movies.find((movie) => movie.title.toLowerCase() === title?.toLowerCase());
        console.log('thats the title:', title);
        console.log('Found movie:', foundMovie);
        //om hittar filmen
        if (foundMovie) {
          //säta filmen i state
          setMovie(foundMovie);
        }
      } catch (error) {
        console.error('Error loading movies:', error);
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
    <section className="min-h-screen bg-black rounded-md p-2 m-2 text-white">
      {/*responsive,mobilefriendly */}
      <Header />
      <div className="flex flex-col items-center justify-center w-full max-w-lg mx-auto p-4">
        <img
          src={movie.thumbnail}
          alt={movie.title}
          className="w-full h-auto object-contain rounded-lg shadow-lg shadow-gray-300 mb-4"
        />
        {/*responsive,mobilefriendly */}
        <div className="text-center font-poppins">
          <h1 className="text-2xl sm:text-3xl  font-bold mb-2">
            {movie.title}
          </h1>
          <p data-testid="movie-year" className="text-lg sm:text-xl text-gray-400 italic">
          {movie.year} | {movie.rating}
          </p>
        </div>
        <div className="bg-gray-800 p-4 rounded-lg w-full mt-4 font-karma relative">
          <div className="flex flex-col mb-3">
            <p className="text-gray-200">
              <span className="font-bold text-xl">Actors:</span>{' '}
              {movie.actors.join(', ')}
            </p>
            <p className="text-gray-200">
              <span className="font-bold text-xl">Genre:</span> {movie.genre}
            </p>
            <p className="text-gray-200 mb-6">
              <span className="font-bold text-xl">Synopsis:</span>{' '}
              {movie.synopsis}
            </p>
            <div className="absolute bottom-12 right-2">
          <Bookmark movie={movie} />
          </div>
          </div>
          
        </div>
      </div>
      <Footer />
    </section>
  );
}

export default FilmInfo;
