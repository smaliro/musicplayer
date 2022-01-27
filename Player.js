import React, {useState, useRef, useEffect} from 'react';
import Info from './Info';
import Controls from './Controls'


function Player(props) {
    const audioEl = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        if (isPlaying) {
            audioEl.current.play();
        } else {
            audioEl.current.pause();
        }
    });

const SkipSong = (forwards = true) => {
    if (forwards) { 
        props.setCurrentSongIndex (() => {
            let temp = props.CurrentSongIndex;
            temp++;

            if (temp > props.songs.length - 1) {
                temp = 0;
            }

            return temp;
        });
        
    } else { 
        props.setCurrentSongIndex (() => {
            let temp = props.CurrentSongIndex;
            temp--;

            if (temp < 0) {
                temp = props.songs.length - 1;
            }

            return temp;
        });
            }
        }
    
    return (
    <div className='player'>
        <audio src={props.songs[props.CurrentSongIndex].src} ref={audioEl}></audio>
        <h4>Currently Playing</h4>
        <Info song={props.songs[props.CurrentSongIndex]} />
        <Controls 
            isPlaying={isPlaying} 
            setIsPlaying={setIsPlaying} 
            SkipSong={SkipSong} 
        />
    </div>
    );
}

export default Player;
