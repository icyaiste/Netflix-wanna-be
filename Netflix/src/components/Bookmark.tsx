import { useEffect, useState } from "react"

function Bookmark(movie) {

    const [faves, setFaves] = useState<any[]>([]);

    useEffect(() => {
        // Hämtar alla bokmärken och sparar faves
        setFaves(JSON.parse(localStorage.getItem('faves') ?? ""))
    }, []);
    
    //every time state updates push into local storage
    useEffect(() => {
        function setItem<T>(faves: string, value: T): void {
                try {
                    localStorage.setItem(faves, JSON.stringify(value));
                    } catch (error) {
                        console.log(error);
                    }
            }
            
        setItem('faves', faves);
    }, [faves]);

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