import { CarouselProps } from '../../interfaces/Interfaces';
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Bookmark from '../bookmark/Bookmark';

function Carousel({ data, labelledBy }: CarouselProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  const nextSlide = () => {
    const isLastSlide = currentSlide === data.length - 1;
    const newSlide = isLastSlide ? 0 : currentSlide + 1;
    setCurrentSlide(newSlide);
  };

  const prevSlide = () => {
    const isFirstSlide = currentSlide === 0;
    const newSlide = isFirstSlide ? data.length - 1 : currentSlide - 1;
    setCurrentSlide(newSlide);
  };

  const handleNavigateToFilmInfo = (title: string) => {
    navigate(`/info/${title}`);
  };

  return (
    <section
      className="relative flex justify-center items-center w-full overflow-hidden"
      aria-label={labelledBy}
    >
      {/* Left Arrow */}
      <BsArrowLeftCircleFill
        className="absolute left-4 w-6 sm:w-8 text-white hover:cursor-pointer z-10"
        onClick={prevSlide}
      />
      {/* Carousel Slides */}
      <div
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {data.map((movie, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-[80vw] sm:w-[225px] h-[330px] p-[7px]"
          >
            {/*responsive,mobilefriendly */}
            <Bookmark movie={movie} />
            <img
              src={movie.thumbnail}
              alt={movie.title}
              className="w-full h-[90%] object-contain rounded-lg shadow-md"
              onClick={() => handleNavigateToFilmInfo(movie.title)}
            />
            <section className="h-[35px] w-full flex justify-between items-center">
              <p className="ml-2 text-red-600 text-base sm:text-xl font-medium">
                {movie.rating}
              </p>
              <h2 className="text-base sm:text-xl font-semibold">
                {movie.year}
              </h2>
            </section>
          </div>
        ))}
      </div>

      {/* Right Arrow */}
      <BsArrowRightCircleFill
        className="absolute right-4 w-6 sm:w-8 text-white hover:cursor-pointer z-10"
        onClick={nextSlide}
      />
    </section>
  );
}

export default Carousel;
