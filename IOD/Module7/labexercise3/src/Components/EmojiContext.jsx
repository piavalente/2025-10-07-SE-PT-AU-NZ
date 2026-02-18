import { createContext, useState } from "react";

export const EmojiContext = createContext();

export function EmojiProvider({ children }) {
  const [emotion, setEmotion] = useState("😄");

  return (
    <EmojiContext.Provider value={{ emotion, setEmotion }}>
      {children}
    </EmojiContext.Provider>
  );
}
