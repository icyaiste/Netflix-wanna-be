import "./App.css";
import { useNavigate } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Carousel from "./components/carousel/Carousel";
import movies from "./movies/movies.json";

function App() {
  // const [count, setCount] = useState(0)
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/favs");
  };

  return (
    <>
      <main>
        <Header />
        {/* <header>
          <h1 className="text-red-500 text-left">Netflix from Wish</h1>
          <nav>
            <a href="">Categories</a>
            <a href="">Bookmarks</a>
          </nav>
        </header> */}
        <section className="h-full w-full">
          <h1>Trending</h1>
          <Carousel data={movies} />
          <section>
            <h1>Recommended</h1>
          </section>
          <section>
            <h1>Bookmarks</h1>
            <button onClick={handleNavigate}>Bookmarked</button>
          </section>
        </section>
        <Footer />
      </main>
    </>
  );
}

export default App;
