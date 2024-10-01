import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DropdownIcon from '../assets/drop_down_list_icon_155460.png'

export default function Header() {
    const  [search, setSearch] = useState('')
    // const [isSearching, setIsSearching] = useState(false);

    const navigate = useNavigate()
    const goToCategories = (event: React.MouseEvent<HTMLLIElement>) => {
        event.preventDefault();
        navigate("/categories");
    };

    const goToBookmarks = (event: React.MouseEvent<HTMLLIElement>) => {
        event.preventDefault();
        navigate("/favs");
    };

    const handleSubmit = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        const value = e.target.value;
        setSearch(value);
        console.log(value)
        // const formData = new FormData(event.currentTarget);
        // const search = formData.get('search') as string;
        // console.log(search);
    }
    
    return (
        <section className="grid grid-cols-3 grid-rows-2 m-1 p-1 w-full h-full place-items-center bg-red-700 border rounded-2xl bg-border-black">
            <h1 className="col-span-1 text-black place-items-center">Netflix from wish</h1>
            <div className="col-start-3">
                <img src={DropdownIcon} className="w-10 h-10" alt=""/>
                <ul>
                    <li onClick={goToCategories}>Categories</li>
                    <li onClick={goToBookmarks}>Bookmarks</li>
                    <li>Profile</li>
                    <li>Settings</li>
                </ul>
            </div>
            <section className="col-start-2 row-start-2 ">
                <input 
                type="text"
                className="w-full h-1/3 border rounded p-2"
                placeholder="Search"
                value={search}
                onChange={handleSubmit}/>
            </section>
        </section>
    )
}