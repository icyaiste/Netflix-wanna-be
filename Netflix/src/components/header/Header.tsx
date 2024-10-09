import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DropdownIcon from '../../assets/menu-icon-white-2.jpg';
import NotflixLogo from '../../assets/notflix.webp';
import BookmarkEmpty from '../../assets/bookmark-empty.jpg';
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
    <section className="flex flex-col md:flex-row items-center justify-between w-full p-4 bg-black rounded-lg">
      {/* Hamburger Menu */}
      <div className="relative md:order-1 flex md:flex-none items-center m-2">
        <img
          aria-label="icon"
          src={DropdownIcon}
          onClick={toggleDropdown}
          className="w-[2rem] h-[2.5rem] cursor-pointer"
          alt="Dropdown Icon"
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
              className="text-white font-raleway border border-black cursor-pointer hover:text-blue-300 hover:bg-gray-600 hover:shadow-md p-2 rounded"
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

      {/* Logo Section */}
      <div className="flex justify-center md:justify-start md:order-2 w-full md:w-auto">
        <img
          src={NotflixLogo}
          alt="Notflix Logo"
          className="w-[18rem] h-auto md:w-[20rem]" // Adjusted size for mobile and larger screens
        />
      </div>

      {/* Search Box */}
      <section className="w-full md:w-auto mt-4 md:mt-0 md:order-3">
        <input
          role="searchbox"
          className="w-full md:w-[15rem] bg-white text-black border rounded-3xl p-2"
          placeholder="Search"
          value={query}
          onChange={(e) => handleSearch(e.target.value)}
        />
        <ul>
          {query && searchedMovies.length > 0 && (
            <ul className="z-[1] absolute bg-black border-white border rounded-lg justify-center mt-2 p-2 w-full md:w-[54rem] flex flex-wrap">
              {searchedMovies.map((movie) => (
                <div
                  className="border rounded border-white bg-red-800 p-2 flex flex-col place-items-center m-2 w-full md:w-[16rem]"
                  key={movie.title}
                >
                  <img
                    className="w-[6rem] h-[9rem] md:w-[10rem] md:h-[16rem]"
                    src={movie.thumbnail}
                    alt={movie.title}
                  />
                  <p className="text-xl">
                    {movie.year} / {movie.rating}
                  </p>
                  <article>
                    <p className="text-white-600">{movie.title}</p>
                    <p className="text-green-200">{movie.genre}</p>
                  </article>
                  <section className="flex place-items-center">
                    <img
                      className="w-[2rem] h-[2rem] m-1"
                      src={BookmarkEmpty}
                      alt="Bookmark Icon"
                    />
                    <button
                      role="button"
                      onClick={() => handleNavigateToFilmInfo(movie.title)}
                      className="text-center m-1 text-sm bg-blue-600 p-1"
                    >
                      Learn more
                    </button>
                  </section>
                </div>
              ))}
            </ul>
          )}

          {query && searchedMovies.length === 0 && (
            <ul className="absolute bg-black border-red-600 rounded-lg mt-2 p-2">
              <li>No movies found</li>
            </ul>
          )}
        </ul>
      </section>

      {/* Navigation Links */}
      <section className="flex space-x-4 mt-4 md:mt-0 md:order-4">
        <h2
          onClick={goToHome}
          className="text-gray-400 cursor-pointer hover:text-blue-300"
        >
          Home
        </h2>
        <h2
          aria-label="Categories Header"
          onClick={goToCategories}
          className="text-gray-400 cursor-pointer hover:text-blue-300"
        >
          Categories
        </h2>
        <h2
          onClick={goToBookmarks}
          className="text-gray-400 cursor-pointer hover:text-blue-300"
        >
          Bookmarks
        </h2>
      </section>
    </section>
  );
}
