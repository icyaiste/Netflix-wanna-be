import './App.css';
import { useNavigate } from 'react-router-dom';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Trending from './components/trending/Trending';
import Recommended from './components/recommended/Recommended';

function App() {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/favs');
  };

  return (
    <>
      <main>
        <Header />
        <section className="h-full w-full px-4 sm:px-8 md:px-16 lg:px-24 py-6">
          <section className="mb-8">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
              Trending
            </h1>
            {/*responsive,mobilefriendly */}
            <Trending />
          </section>

          <section className="mb-8">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
              Recommended
            </h1>
            {/*responsive,mobilefriendly */}
            <Recommended />
          </section>

          <section className="mb-8">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
              Bookmarks
            </h1>
            {/*responsive,mobilefriendly */}
            <button
              onClick={handleNavigate}
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 
            px-4 rounded-lg transition-all duration-300 ease-in-out text-sm sm:text-md md:text-lg"
            >
              {/*responsive,mobilefriendly */}
              View Bookmarked
            </button>
          </section>
        </section>
        <Footer />
      </main>
    </>
  );
}

export default App;
