import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlay, faPause, faForward, faBackward} from '@fortawesome/free-solid-svg-icons;'

function Controls(props) {
    return (
        <div className='controls'>
            <button className='previous-btn' onClick={() => props.SkipSong(false)}>
                <FontAwesomeIcon icon={faBackward} />
            </button>
            <button className='play-btn' onClick={() => props.setisPlaying(!props.isPlaying)}/>
                <FontAwesomeIcon icon={props.isPlaying ? faPause : faPlay} />
            <button className='next-btn' onClick={() => props.SkipSong()}>
                <FontAwesomeIcon icon={faForward} />
            </button>
        </div>
    )
}

export default Controls;
