import Header from '../../components/header/Header';
import Carousel from '../../components/carousel/Carousel';
import Footer from '../../components/footer/Footer';

import { useBookmarks } from '../../context/BookmarkContext';


function Bookmarked() {
  const { faves } = useBookmarks();

  return (
    <div>
      <Header />
      <div>
        <h1>Bookmarks</h1>
        <Carousel data = {faves}/>
      </div>

    </div>
  );
}

export default Bookmarked;
