import './App.css';
import { useNavigate } from 'react-router-dom';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Trending from './components/trending/Trending';

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
        <section className="h-full w-full">
          <h1>Trending</h1>
          <Trending />
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
