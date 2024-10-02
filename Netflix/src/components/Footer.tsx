import { useNavigate } from "react-router-dom"

export default function Footer() {

  const navigate = useNavigate()
  const goToCategories = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    navigate("/categories");
  };

  const goToBookmarks = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    navigate("/favs");
  };

  const goToHome = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    navigate("/")
  }

  return (
    <footer className="w-full h-[13rem] grid grid-cols-3 grid-rows-3 bg-black rounded-md p-2 m-2">
      <section className="col-span-1 place-items-center">
        <p className="text-xl">Navigate</p>
        <ul className="flex flex-col">
          <button onClick={goToHome} className="w-1/3 bg-red-700 border-md border-gray-700 place-self-center m-1">Home</button>
          <button onClick={goToCategories} className="w-1/3 bg-red-700 border-md border-gray-700 place-self-center m-1">Categories</button>
          <button onClick={goToBookmarks} className="w-1/3 bg-red-700 border-md border-gray-700 place-self-center m-1">Bookmarks</button>
        </ul>
      </section>
      <section className="row-start-3 col-start-2">
        <p>Copyright @ 2024</p>
      </section>
      <section className="row-start-1 col-start-3">
        <p className="mb-5 text-xl">Contact</p>
        <ul className="">
          <li>info.Notflix@gmail.com</li>
          <li>Chat with us</li>
          <li>djviudhvud</li>
        </ul>
      </section>
    </footer>
  )
}
