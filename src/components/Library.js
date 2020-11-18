import React, { useRef } from 'react';
import LibrarySong from './LibrarySong'

const Library = ({ isPlaying, audioRef, songs, setCurrentSong }) => {
    return (
        <div className="library">
            <h2>Library</h2>
            <div className="library-songs">
                {songs.map((song) =>
                    <LibrarySong
                        isPlaying={isPlaying}
                        songs={songs}
                        setCurrentSong={setCurrentSong}
                        song={song}
                        id={song.id}
                        key={song.id}
                        audioRef={audioRef}
                    />
                )}
            </div>
        </div>
    )
};

export default Library;