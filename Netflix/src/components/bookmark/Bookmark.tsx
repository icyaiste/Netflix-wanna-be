import { useEffect } from 'react';
import { BookmarkProps } from '../../interfaces/Interfaces';
import { useBookmarks } from '../../context/BookmarkContext';

function Bookmark({ movie }: BookmarkProps) {
  const { faves, setFaves } = useBookmarks();
  const isFavorite = faves.includes(movie)
  //every time state updates push into local storage
  useEffect(() => {
    try {
      localStorage.setItem('faves', JSON.stringify(faves));
    } catch (error) {
      console.log(error);
    }
  }, [faves]);

  //when button gets clicked update state
  function toggleBookmark() {
    const isFavorite = faves.some((fave) => fave.title === movie.title);

    if (isFavorite) {
      // Remove the movie from favorites if it's already a favorite
      const newArray = faves.filter((fave) => fave.title !== movie.title);

      setFaves(newArray);
    } else {
      // Add the movie to favorites
      setFaves((prevFaves) => [...prevFaves, movie]);
    }
  }

  //button
  return (
    <div className="absolute bottom--1 right-2">
      <button
        onClick={toggleBookmark}
        className={`text-xl bg-transparent ${isFavorite ? 'text-yellow-500' : 'text-gray-300'} transition-all`}
        aria-label={isFavorite ? 'Remove Bookmark' : 'Add Bookmark'}
      >
        <i
          className={isFavorite ? 'fas fa-bookmark' : 'far fa-bookmark'}
        ></i>
      </button>
    </div>
  );
}

export default Bookmark;
