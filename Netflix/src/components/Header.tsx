import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DropdownIcon from "../assets/drop_down_list_icon_155460.png";
import NotflixLogo from "../assets/notflix.webp";

export default function Header() {
  const [search, setSearch] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  // const [isSearching, setIsSearching] = useState(false);

  const navigate = useNavigate();
  const goToCategories = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    navigate("/categories");
  };

  const goToBookmarks = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    navigate("/favs");
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSubmit = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const value = e.target.value;
    setSearch(value);
    console.log(value);
    // const formData = new FormData(event.currentTarget);
    // const search = formData.get('search') as string;
    // console.log(search);
  };

  return (
    <section className="grid grid-cols[1fr, 1fr, 2fr, 1fr] grid-rows-1 m-1 p-1 w-full h-[12rem] place-items-center bg-black ">
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
            isOpen ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0"
          }`}
          style={{ transformOrigin: "top" }}
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
          value={search}
          onChange={handleSubmit}
        />
      </section>
      <section className="flex col-start-4">
        <h2 className="mr-6 text-gray-400 cursor-pointer hover:text-blue-300">
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
