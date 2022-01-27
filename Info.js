import React from 'react';

function Info(props) {
    return (
    <div className='song--details'>
        <div className='song-img'>
            <img src={props.song.img_src} alt=''/>
        </div>
        <h3 className='song-title'>{props.song.title}</h3>
    </div>
    );
}

export default Info;
