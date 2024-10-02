import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DropdownIcon from "../assets/drop_down_list_icon_155460.png";

export default function Header() {
  const [search, setSearch] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  // const [isSearching, setIsSearching] = useState(false);

  const navigate = useNavigate();
  const goToCategories = (event: React.MouseEvent<HTMLLIElement>) => {
    event.preventDefault();
    navigate("/categories");
  };

  const goToBookmarks = (event: React.MouseEvent<HTMLLIElement>) => {
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
    <section className="grid grid-cols-3 grid-rows-2 m-1 p-1 w-full h-[15rem] place-items-center bg-red-700 border-8 rounded-2xl border-black">
      <h1 className="col-span-1 text-black place-items-center">
        Netflix from wish
      </h1>
      <div className="relative col-start-3 bg-gray-600 rounded p-1">
        <img
          src={DropdownIcon}
          onClick={toggleDropdown}
          className="w-10 h-10 cursor-pointer"
          alt=""
        />

        {/* Dropdown Menu */}
        <div
          className={`absolute left-0 mt-2 w-48 bg-gray-600 border rounded-lg shadow-lg transition-all duration-300 ease-in-out origin-top transform ${
            isOpen ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0"
          }`}
          style={{ transformOrigin: "top" }}
        >
          <ul className="flex flex-col">
            <li
              className="cursor-pointer hover:text-blue-300 hover:bg-gray-400 hover:shadow-md p-2 rounded"
              onClick={goToCategories}
            >
              Categories
            </li>
            <li
              className="cursor-pointer hover:text-blue-300 hover:bg-gray-400 hover:shadow-md p-2 rounded"
              onClick={goToBookmarks}
            >
              Bookmarks
            </li>
            <li className="cursor-pointer hover:text-blue-300 hover:bg-gray-400 hover:shadow-md p-2 rounded">
              Profile
            </li>
            <li className="cursor-pointer hover:text-blue-300 hover:bg-gray-400 hover:shadow-md p-2 rounded">
              Settings
            </li>
          </ul>
        </div>
      </div>

      <section className="col-start-2 row-start-2">
        <input
          type="text"
          className="w-full h-1/3 border rounded p-2"
          placeholder="Search"
          value={search}
          onChange={handleSubmit}
        />
      </section>
    </section>
  );
}
