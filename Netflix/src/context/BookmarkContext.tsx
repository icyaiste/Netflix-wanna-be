import { Movie, bookmarkContextInterface } from '../interfaces/Interfaces';
import {
  useState,
  useEffect,
  createContext,
  ReactNode,
  useContext,
} from 'react';

// context for sending bookmarked info around
const bookmarkContext = createContext<bookmarkContextInterface>(null!);

function BookmarkProvider({ children }: { children: ReactNode }) {
  const [faves, setFaves] = useState<Movie[]>([]);
  //   console.log(faves);

  // Fetches localStorage faves on site load
  useEffect(() => {
    console.log('fetching favorites');
    const storedFaves = localStorage.getItem('faves');
    if (storedFaves) {
      try {
        const parsedFaves = JSON.parse(storedFaves);
        setFaves(parsedFaves);
      } catch (error) {
        console.error('Failed to parse faves from localStorage:', error);
      }
    }
  }, []);

  return (
    <>
      <bookmarkContext.Provider value={{ faves, setFaves }}>
        {children}
      </bookmarkContext.Provider>
    </>
  );
}

// makes sure context doesn't make more than one state
export const useBookmarks = () => {
  const currentBookmarkContext = useContext(bookmarkContext);

  return currentBookmarkContext;
};

export default BookmarkProvider;
