import "./App.css";
import { useNavigate } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Carousel from "./components/carousel/Carousel";
import { slides } from "./components/carousel/carouselData.json";

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
          <Carousel data={slides} />
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
