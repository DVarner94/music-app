import React, { useState, useRef } from 'react';
// import styles
import './styles/app.scss';
// import components
import Player from './components/Player';
import Song from './components/Song';
import Library from './components/Library';
// import songs
import data from './data';



function App() {
  // ref
  const audioRef = useRef(null);

  // State 
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="App">
      <Song currentSong={currentSong} />
      <Player
        setIsPlaying={setIsPlaying}
        isPlaying={isPlaying}
        currentSong={currentSong}
        audioRef={audioRef}
      />
      <Library songs={songs} setCurrentSong={setCurrentSong} setSongs={setSongs} isPlaying={isPlaying} audioRef={audioRef} />
    </div>
  );
}

export default App;
