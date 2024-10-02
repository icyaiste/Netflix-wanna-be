import { useEffect, useState } from "react";
import Header from "../../components/Header";


function Bookmarked() {

  const [faves, setFaves] = useState([]);

  useEffect(() => {
    const faves = JSON.parse(localStorage.getFaves('faves'));
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
        {/** foreach? <moviecard />*/}
      </div>

    </div>
  );
}

export default Bookmarked;
