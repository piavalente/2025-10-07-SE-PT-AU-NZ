import { useState } from "react";

function Emoji() {
  const [emotion, setEmotion] = useState("😄");
  //variable emotion, function to update setEmotion
  //😄 is the initial value of the emotion
  //setEmotion = update the emotion

  const handleEmotion = () => {
    if (emotion === "😄") {
      setEmotion("😢");
    } else {
      setEmotion("😄");
    }
  };

  return (
    <>
      <h1 style = {{fontSize: "100px"}}>{emotion}</h1>
      <button onClick={handleEmotion}>Change Emotion</button>
    </>
  );
}

export default Emoji;
