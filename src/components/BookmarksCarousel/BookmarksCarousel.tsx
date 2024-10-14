import Carousel from '../carousel/Carousel.tsx';
import { useBookmarks } from '../../context/BookmarkContext.tsx';

function BookmarksCarousel() {
  const { faves } = useBookmarks();

  // Check if data is loaded
  if (!faves || !Array.isArray(faves)) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <Carousel data={faves} labelledBy="bookmarked-carousel" />
    </div>
  );
}

export default BookmarksCarousel;
