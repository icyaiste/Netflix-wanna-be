import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DropdownIcon from '../../assets/menu-icon-white-2.jpg';
import NotflixLogo from '../../assets/notflix.webp';
// import BookmarkFull from "../../assets/bookmark-full.webp";
import films from '../../movies/movies.json';
import Fuse from 'fuse.js';
import { Movie } from '../../interfaces/Interfaces';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState<string>('');
  const [searchedMovies, setSearchedMovies] = useState<Movie[]>(films);

  const navigate = useNavigate();
  const goToCategories = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    navigate('/categories');
  };

  const goToBookmarks = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    navigate('/favs');
  };

  const goToHome = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    navigate('/');
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const fuse = new Fuse(films, {
    keys: ['title', 'actors', 'genre'],
    threshold: 0.3,
  });

  const handleSearch = (searchTerm: string) => {
    setQuery(searchTerm);
    if (searchTerm.trim() === '') {
      setSearchedMovies(films);
    } else {
      const fuseResults = fuse.search(searchTerm);
      setSearchedMovies(fuseResults.map((result) => result.item));
    }
  };

  const handleNavigateToFilmInfo = (title: string) => {
    navigate(`/info/${title}`);
  };

  return (
    <section className="grid grid-cols-[1fr, 1fr, 2fr, 1fr] grid-rows-1 m-1 p-1 w-full h-[12rem] place-items-center bg-black ">
      <div className="col-start-3 col-span-1 w-[20rem]">
        <img src={NotflixLogo} alt="" />
      </div>
      <div className="relative col-start-1 row-start-1 place-self-start-center m-2 bg-black rounded p-1">
        <img
          aria-label="icon"
          src={DropdownIcon}
          onClick={toggleDropdown}
          className="w-[3.5rem] h-[3.5rem] cursor-pointer"
          alt=""
        />
        {/* Dropdown Menu */}
        <div
          aria-label="dropdown"
          className={`z-[1] absolute left-0 mt-2 w-48 bg-red-700 border border-black rounded-lg shadow-lg transition-all duration-100 ease-in-out origin-top transform ${
            isOpen ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0'
          }`}
          style={{ transformOrigin: 'top' }}
        >
          <ul className="flex flex-col">
            <li
              className=" text-white font-raleway border border-black cursor-pointer hover:text-blue-300 hover:bg-gray-600 hover:shadow-md p-2 rounded"
              onClick={goToCategories}
            >
              Categories
            </li>
            <li
              className="text-white font-raleway border border-black cursor-pointer hover:text-blue-300 hover:bg-gray-600 hover:shadow-md p-2 rounded"
              onClick={goToBookmarks}
            >
              Bookmarks
            </li>
            <li className="text-white font-raleway border border-black cursor-pointer hover:text-blue-300 hover:bg-gray-600 hover:shadow-md p-2 rounded">
              Profile
            </li>
            <li className="text-white font-raleway border border-black cursor-pointer hover:text-blue-300 hover:bg-gray-600 hover:shadow-md p-2 rounded">
              Settings
            </li>
          </ul>
        </div>
      </div>
      <section className="col-start-2 row-start-1">
        <input
          role="searchbox"
          className="w-[15rem] h-1/3 bg-white text-black border rounded-3xl p-2"
          placeholder="Search"
          value={query}
          onChange={(e) => handleSearch(e.target.value)}
        />
        <ul>
          {/* Conditionally render <ul> only if query is not empty and there are matching movies */}
          {query && searchedMovies.length > 0 && (
            <ul className="z-[1] absolute bg-black border-white border rounded-lg justify-center mt-2 p-2 w-[54rem] flex flex-wrap">
              {searchedMovies.map((movie) => (
                <div
                  className="border rounded border-white bg-red-900 p-2 flex flex-col place-items-center m-2 w-[16rem]"
                  key={movie.title}
                >
                  <img
                    className="w-[10rem] h-[16rem]"
                    src={movie.thumbnail}
                    alt=""
                  />
                  <p className="text-xl">
                    {movie.year} / {movie.rating}
                  </p>
                  <article className="">
                    <p className="text-white-600">{movie.title}</p>
                    <p className="text-green-200">{movie.genre}</p>
                  </article>
                  <section className="flex place-items-center">
                    <button
                      role="button"
                      onClick={() => handleNavigateToFilmInfo(movie.title)}
                      className="bg-gray-800 hover:bg-gray-500 text-white font-semibold py-2 px-4 m-1 border border-gray-400 rounded shadow"
                    >
                      Learn more
                    </button>
                  </section>
                </div>
              ))}
            </ul>
          )}

          {/* Optionally, display a "No movies found" message if there are no matches */}
          {query && searchedMovies.length === 0 && (
            <ul className="absolute bg-black border-red-600 rounded-lg mt-2 p-2">
              <li>No movies found</li>
            </ul>
          )}
        </ul>
      </section>
      <section className="flex col-start-4">
        <h2
          onClick={goToHome}
          className="mr-6 text-gray-400 cursor-pointer hover:text-blue-300"
        >
          Home
        </h2>
        <h2
          aria-label="Categories Header"
          onClick={goToCategories}
          className="mr-6 text-gray-400 cursor-pointer hover:text-blue-300"
        >
          Categories
        </h2>
        <h2
          onClick={goToBookmarks}
          className="mr-6 text-gray-400 cursor-pointer hover:text-blue-300"
        >
          Bookmarks
        </h2>
      </section>
    </section>
  );
}
