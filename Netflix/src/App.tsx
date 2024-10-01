// import { useState } from 'react';
import "./App.css";
import { useNavigate } from "react-router-dom";
import Header from "./components/Header";

function App() {
  // const [count, setCount] = useState(0)

  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/favs');
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
        <section>
          <section>
            <h1>Trending</h1>
           
          </section>
          <section>
            <h1>Recommended</h1>
          </section>
          <section>
            <h1>Bookmarks</h1>
            <button onClick={handleNavigate}>Bookmarked</button>
          </section>
        </section>
      </main>
    </>
  );
}

export default App;
