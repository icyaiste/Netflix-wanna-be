import { useEffect } from 'react';
import { BookmarkProps } from '../../interfaces/Interfaces';
import { useBookmarks } from '../../context/BookmarkContext';

function Bookmark({ movie }: BookmarkProps) {
  const { faves, setFaves } = useBookmarks();

  //every time state updates push into local storage
  useEffect(() => {
    try {
      localStorage.setItem('faves', JSON.stringify(faves));
    } catch (error) {
      console.log(error);
    }
  }, [faves]);

  //when button gets clicked update state
  function mark() {
    const isFavorite = faves.some((fave) => fave.title === movie.title);

    if (isFavorite) {
      // Remove the movie from favorites if it's already a favorite
      console.log('removed bookmark');
      const newArray = faves.filter((fave) => fave.title !== movie.title);

      setFaves(newArray);
    } else {
      // Add the movie to favorites
      console.log('added bookmark');
      setFaves((prevFaves) => [...prevFaves, movie]);
    }
  }

  //button
  return (
    <div>
      <button
        className="text-sm sm:text-md p-2 sm:p-3 bg-gray-200 hover:bg-gray-300 rounded-lg shadow-md focus:outline-none"
        onClick={mark}
      >
        *
      </button>
    </div>
  );
}

export default Bookmark;
