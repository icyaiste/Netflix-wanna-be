import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DropdownIcon from '../../assets/drop_down_list_icon_155460.png';
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

  return (
    <section className="grid grid-cols-[1fr, 1fr, 2fr, 1fr] grid-rows-1 m-1 p-1 w-full h-[12rem] place-items-center bg-black ">
      <div className="col-start-3 col-span-1 w-[20rem]">
        <img src={NotflixLogo} alt="" />
      </div>
      <div className="relative col-start-1 row-start-1 place-self-start-center m-2 bg-gray-600 rounded p-1">
        <img
          src={DropdownIcon}
          onClick={toggleDropdown}
          className="w-10 h-10 cursor-pointer"
          alt=""
        />
        {/* Dropdown Menu */}
        <div
          className={`absolute left-0 mt-2 w-48 bg-white border rounded-lg shadow-lg transition-all duration-300 ease-in-out origin-top transform ${
            isOpen ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0'
          }`}
          style={{ transformOrigin: 'top' }}
        >
          <ul className="flex flex-col">
            <li
              className=" text-black cursor-pointer hover:text-blue-300 hover:bg-gray-700 hover:shadow-md p-2 rounded"
              onClick={goToCategories}
            >
              Categories
            </li>
            <li
              className="text-black cursor-pointer hover:text-blue-300 hover:bg-gray-700 hover:shadow-md p-2 rounded"
              onClick={goToBookmarks}
            >
              Bookmarks
            </li>
            <li className="text-black cursor-pointer hover:text-blue-300 hover:bg-gray-700 hover:shadow-md p-2 rounded">
              Profile
            </li>
            <li className="text-black cursor-pointer hover:text-blue-300 hover:bg-gray-700 hover:shadow-md p-2 rounded">
              Settings
            </li>
          </ul>
        </div>
      </div>
      <section className="col-start-2 row-start-1">
        <input
          type="text"
          className="w-[15rem] h-1/3 bg-white text-black border rounded-3xl p-2"
          placeholder="Search"
          value={query}
          onChange={(e) => handleSearch(e.target.value)}
        />
        <ul>
          {/* Conditionally render <ul> only if query is not empty and there are matching movies */}
          {query && searchedMovies.length > 0 && (
            <ul className="absolute bg-black border-white border rounded-lg justify-center mt-2 p-2 w-[54rem] flex flex-wrap">
              {searchedMovies.map((movie) => (
                <div
                  className="border rounded border-white bg-red-800 p-2 flex flex-col place-items-center m-2 w-[16rem]"
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
                    <img
                      className="w-[2rem] h-[2rem] m-1 text-sm"
                      src={BookmarkEmpty}
                    />
                    <button className="text-center m-1 text-sm bg-blue-600">
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
