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
      console.log([...faves, movie]);
      setFaves((prevFaves) => [...prevFaves, movie]);
    }
  }

    //when button gets clicked udate state
    function mark() {
        for (let i = 0; i < faves?.length; i++) {
            if (movie.title === faves[i].title) {
                const newArray = faves.splice(i, 1)
                setFaves(newArray)
                return
            }
        }
        setFaves([...faves, movie])
    };

    //button
    return (
        <div>
            <button onClick={mark}>*</button>
        </div>
    )
};

export default Bookmark