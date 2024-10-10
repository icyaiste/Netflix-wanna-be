import Header from '../../components/header/Header';
// import Carousel from '../../components/carousel/Carousel';
import Footer from '../../components/footer/Footer';
import Bookmark from '../../components/bookmark/Bookmark';
import { useBookmarks } from '../../context/BookmarkContext';
import { useNavigate } from 'react-router-dom';

function Bookmarked() {
  const { faves } = useBookmarks();
  const navigate = useNavigate();

  const handleNavigateToFilmInfo = (title: string) => {
    navigate(`/info/${title}`);
  };

  return (
    <div>
      <Header />
      <div>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
          Bookmarks
        </h1>
      </div>
      <div className="flex justify-center">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 px-4 py-8">
          {faves.map((movie, index) => (
            <div
              key={index}
              className="flex-col flex-shrink-0 w-[225px] h-[330px] p-[7px] relative"
            >
              <img
                src={movie.thumbnail}
                alt={movie.title}
                className="w-full h-[90%] object-contain rounded-lg shadow-md"
                onClick={() => handleNavigateToFilmInfo(movie.title)}
              />
              <section className="h-[35px] w-[95%] flex justify-between items-center ml-2">
                <p className="ml-2 text-red-600 text-xl font-medium justify-self-start">
                  {movie.rating}
                </p>
                <h2 className=" text-xl font-semibold w-[50px] mr-[35%]">
                  {movie.year}
                </h2>
                <Bookmark movie={movie} />
              </section>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Bookmarked;
