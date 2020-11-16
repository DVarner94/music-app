import React from 'react';

const Song = ({ currentSong }) => {
    return (
        <div className="song-container">
            <h1 src={currentSong.cover}></h1>
            <h2>{currentSong.name}</h2>
            <h3>{currentSong.artist}</h3>
        </div>
    )
};

export default Song;