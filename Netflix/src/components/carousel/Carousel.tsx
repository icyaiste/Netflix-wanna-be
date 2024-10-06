import { CarouselProps } from "../../interfaces/Interfaces";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Carousel({ data }: CarouselProps) {
  console.log("Total number of slides:", data.length);
  console.log(data);
  const [currentSlide, setCurrentSlide] = useState(0); // Start from the first slide
  const navigate = useNavigate();
  
  const visibleSlides = 6; // Number of slides to show at once
  const slideWidth = 225; // The width of a single slide
  const totalSlides = data.length; // Total number of slides

  // Calculate the maximum slide index
  const maxSlideIndex = totalSlides - visibleSlides;

  const nextSlide = () => {
    if (currentSlide < maxSlideIndex) {
      setCurrentSlide(currentSlide + 1); // Move to the next slide
    } else {
      setCurrentSlide(0); // Loop back to the first slide
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1); // Move to the previous slide
    } else {
      setCurrentSlide(maxSlideIndex); // Go to the last set of slides
    }
  };

  const handleNavigateToFilmInfo = (title: string) => {
    navigate(`/info/${title}`);
  };

  return (
    <main className="relative flex justify-center items-center w-full overflow-hidden bg-black">
      {/* Left Arrow */}
      <BsArrowLeftCircleFill
        className={`absolute left-4 w-8 h-8 text-white rounded-full shadow-lg hover:cursor-pointer z-20`}
        onClick={prevSlide} 
      />

      {/* Carousel Slides */}
      <div
        className="flex transition-transform duration-700" // You can keep the transition duration as desired
        style={{
          transform: `translateX(-${currentSlide * slideWidth}px)`, // Move by the width of one slide
          width: `${totalSlides * slideWidth}px`, // Total width based on the number of slides
        }}
      >
        {data.map((movie, index) => (
          <div
            key={index}
            className="flex-col flex-shrink-0 w-[225px] h-[330px] p-[7px]"
          >
            <img
              src={movie.thumbnail}
              alt={movie.title}
              className="w-full h-[90%] object-contain rounded-lg shadow-md hover:cursor-pointer"
              onClick={() => handleNavigateToFilmInfo(movie.title)}
            />
            <section className="h-[35px] w-[95%] flex justify-between items-center">
              <p className="ml-2 text-red-600 text-xl font-medium justify-self-start">
                {movie.rating}
              </p>
              <h2 className="text-xl font-semibold w-[50px] mr-[35%]">
                {movie.year}
              </h2>
            </section>
          </div>
        ))}
      </div>

      {/* Right Arrow */}
      <BsArrowRightCircleFill
        className={`absolute right-4 w-8 h-8 text-white rounded-full shadow-lg hover:cursor-pointer z-20 ${currentSlide >= maxSlideIndex ? 'opacity-50 cursor-not-allowed' : ''}`}
        onClick={currentSlide >= maxSlideIndex ? undefined : nextSlide} // Disable click when at the end
      />
    </main>
  );
}

export default Carousel;
