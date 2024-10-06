import { CarouselProps } from "../../interfaces/Interfaces";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import { useState } from "react";

function Carousel({ data }: CarouselProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

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

  return (
    <main className="relative flex justify-center items-center w-full overflow-hidden">
      {/* Left Arrow */}
      <BsArrowLeftCircleFill
        className="absolute left-4 w-8 h-8 text-white rounded-full shadow-lg hover:cursor-pointer z-10"
        onClick={prevSlide}
      />

      {/* Carousel Slides */}
      <div
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${currentSlide * 10}%)` }}
      >
        {data.map((movie, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-[250px] h-[330px] p-[7px]"
          >
            <img
              src={movie.thumbnail}
              alt={movie.title}
              className="w-full h-[90%] object-contain rounded-lg shadow-md"
            />
            <section className="h-[35px] w-[240px] flex">
              <p className="ml-2 text-red-600 text-xl font-medium">
                {movie.rating}
              </p>
              <h2 className="mr-auto ml-[20%] text-xl font-semibold">
                {movie.year}
              </h2>
            </section>
          </div>
        ))}
      </div>

      {/* Right Arrow */}
      <BsArrowRightCircleFill
        className="absolute right-4 w-8 h-8 text-white rounded-full shadow-lg hover:cursor-pointer z-10"
        onClick={nextSlide}
      />
    </main>
  );
}

export default Carousel;
