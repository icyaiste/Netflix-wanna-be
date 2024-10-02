import { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import Carousel from "../../components/carousel/Carousel";

function Bookmarked() {

  const [faves, setFaves] = useState([]);

  useEffect(() => {
    const faves = JSON.parse(localStorage.getItem('faves') ?? "");
    if (faves) {
    setFaves(faves);
    }
  }, [faves]);
  console.log(faves);

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
