import { useState } from "react";
import "../App.css";

// save in MoodChanger.jsx
function MoodChanger() {
  // mood stores current mood, default happy
  // setMood is a function for updating mood
  const [mood, setMood] = useState("Happy"); 

  // Calls setMood with a fixed value of 'ecstatic'
  // begin with 'handle' prefix by convention
  const handleWinLotto = () => {
    setMood("ecstatic");
    console.log(mood);
  };

  // Calls setMood with a conditional state value
  const handleRunningLate = () => {
    let newMood = "stressed";
    if (mood === "stressed") newMood = "really stressed";
    else if (mood === "really stressed") newMood = "giving up";
    setMood(newMood);
  };

  function changeMood() {
    if (mood === "Happy") setMood("Sad");
    else if (mood === "Sad") setMood("Happy");
  }

  return (
    <div className="mood">
      <div>Current Mood: {mood}</div>
      <button onClick={() => setMood("tired")}>Stay Up Late</button>
      {/* Using custom event handler functions */}
      <button onClick={handleRunningLate}>Running Late</button>
      <button onClick={handleWinLotto}>Win Lotto</button>
    </div>
  );
}

export default MoodChanger;
