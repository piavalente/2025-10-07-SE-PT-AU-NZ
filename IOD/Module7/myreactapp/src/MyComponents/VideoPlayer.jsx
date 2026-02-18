import { useState, useRef } from 'react';

export default function VideoPlayer() {
  const [isPlaying, setIsPlaying] = useState(false); //is it playing or not playing - initial value FALSE -not playing
  
  const videoRef = useRef(null); // 1. Create the ref

  function handleClick() {
    // use the current property of the ref object TO ACCESS PLAY AND PAUSE functions
    isPlaying 
      ? videoRef.current.pause() 
      : videoRef.current.play(); // 3. Use the ref to call DOM functions
      
    setIsPlaying(!isPlaying); // switch between playing and paused
  }
  

  return (
    <div className="VideoPlayer componentBox">
      {/* button to play or pause the video */}
      <button onClick={handleClick}>{isPlaying ? 'Pause' : 'Play'}</button>
      {/* 2. Initialise the ref */}
      <video width="250" ref={videoRef}>
        <source
          type="video/mp4"
          src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
        />
      </video>
    </div>
  );
}
