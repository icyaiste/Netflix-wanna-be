import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Movie } from "../../interfaces/Interfaces";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

function FilmInfo() {
  const { title } = useParams<{ title?: string }>();
  console.log("Retrieved title from URL:", title);
  const [movie, setMovie] = useState<Movie | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const [isBookmarked, setIsBookmarked] = useState(false);

  useEffect(() => {
    const loadMovies = async () => {
      try {
        const res = await import("../../movies/movies.json");
        const movies: Movie[] = res.default;
        console.log("movie:", movies);
        const foundMovie = movies.find((movie) => movie.title === title);
        console.log("thats the title:", title);
        if (foundMovie) {
          setMovie(foundMovie);

          const bookmarks = JSON.parse(
            localStorage.getItem("bookmarkedMovies") || "[]",
          );
          setIsBookmarked(bookmarks.includes(foundMovie.title));
        }
      } catch (error) {
        console.error("Error loading movies:", error);
      } finally {
        setLoading(false);
      }
    };
    loadMovies();
  }, [title]);

  const toggleBookmark = () => {
    setIsBookmarked((prev) => !prev);
    const bookmarks = JSON.parse(
      localStorage.getItem("bookmarkedMovies") || "[]",
    );
    if (isBookmarked) {
      const updatedBookmarks = bookmarks.filter(
        (b: string) => b !== movie?.title,
      );
      localStorage.setItem(
        "bookmarkedMovies",
        JSON.stringify(updatedBookmarks),
      );
    } else {
      bookmarks.push(movie?.title);
      localStorage.setItem("bookmarkedMovies", JSON.stringify(bookmarks));
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!movie) {
    return <div>Movie not found.</div>;
  }

  return (
    <section className="min-h-screen bg-black rounded-md p-2 m-2 text-white">
      <Header />
      <div className="flex flex-col items-center justify-center w-full max-w-lg mx-auto p-4 sm:p-6 md:p-10 lg:p-12">
        <img
          src={movie.thumbnail}
          alt={movie.title}
          className="w-full h-auto object-contain rounded-lg shadow-lg shadow-gray-300 mb-4"
        />
        <div className="text-center font-poppins">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">
            {movie.title}
          </h1>
          <p className="text-lg text-gray-400 italic">
            {movie.year} | {movie.rating}
          </p>
        </div>
        <div className="bg-gray-700 p-4 sm:p-6 rounded-lg shadow-sm w-full mt-4 font-karma relative">
          <div className="flex flex-col mb-3">
            <p className="text-gray-200">
              <span className="font-bold text-xl">Actors:</span>{" "}
              {movie.actors.join(", ")}
            </p>
            <p className="text-gray-200">
              <span className="font-bold text-xl">Genre:</span> {movie.genre}
            </p>
            <p className="text-gray-200 mb-6">
              <span className="font-bold text-xl">Synopsis:</span>{" "}
              {movie.synopsis}
            </p>
          </div>

          <div className="absolute bottom-2 right-2">
            <button
              onClick={toggleBookmark}
              className={`text-xl mt-3 bg-transparent ${isBookmarked ? "text-yellow-500" : "text-gray-300"} transition-all`}
              aria-label={isBookmarked ? "Remove Bookmark" : "Add Bookmark"}
            >
              <i
                className={isBookmarked ? "fas fa-bookmark" : "far fa-bookmark"}
              ></i>
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
}

export default FilmInfo;
