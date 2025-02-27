import { createContext, useContext, useState } from "react";

const PlayingVideo = createContext();

export const PlayingVideoProvider = ({ children }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <PlayingVideo.Provider
      value={{
        isPlaying,
        setIsPlaying,
      }}
    >
      {children}
    </PlayingVideo.Provider>
  );
};

export const usePlayVideo = () => useContext(PlayingVideo);
