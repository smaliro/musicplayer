import { useEffect, useState } from "react";
import Player from "./components/Player";

function App () {
    const [songs] = useState ( [
        {
        "title": "dream",
        "img_src": "./images/dream.jpg",
        "src": "./music/dream.mp3"
        },
        {
        "title": "dream",
        "img_src": "./images/melody.jpg",
        "src": "./music/melody.mp3"
        },
        {
        "title": "peace",
        "img_src": "./images/peace.jpg",
        "src": "./music/peace.mp3"
        },
    ]);

    const [currentSongIndex, setCurrentSongIndex] = useState(0);
    const [nextSongIndex, setNextSongIndex] = useState(currentSongIndex + 1)

    useEffect (() => {
        setNextSongIndex(() => {
            if (currentSongIndex + 1 > songs.length - 1) {
                return 0;
            } else {
                return currentSongIndex + 1; 
            }
        });

    }, [currentSongIndex, songs.length]);

    return (
        <div className="App">
            <Player 
            currentSongIndex={currentSongIndex}
            setCurrentSongIndex={setCurrentSongIndex}
            nextSongIndex={nextSongIndex}
            songs={songs}
            />
        </div>
    );
}

export default App;