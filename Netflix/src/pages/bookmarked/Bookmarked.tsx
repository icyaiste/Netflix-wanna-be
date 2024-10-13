import Header from '../../components/header/Header';
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
    <div className="">
      <Header />
      <div className="py-2">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
          Bookmarks
        </h1>
      </div>
      <div className="flex justify-center min-h-[27rem]">
        <div className="grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-4 px-2 py-4">
          {faves.map((movie, index) => (
            <div
              key={index}
              className="flex-col flex-shrink-0 w-[190px] h-[330px] p-[7px] relative"
            >
              <img
                src={movie.thumbnail}
                alt={movie.title}
                className="w-full h-[80%] object-contain rounded-lg shadow-md"
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
