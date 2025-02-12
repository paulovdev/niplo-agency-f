import { useCursor } from "@/context/cursor-context";
import { usePlayVideo } from "@/context/several-context";
import { useRef } from "react";
import { IoMdPause, IoMdPlay } from "react-icons/io";

const Several = () => {
  const { setCursorVariant } = useCursor();
  const { isPlaying, setIsPlaying } = usePlayVideo();
  const ref = useRef(null);

  const handleEnter = () => {
    setCursorVariant("playReel");
  };

  const handleLeave = () => {
    setCursorVariant("default");
  };

  const togglePlayPause = () => {
    if (ref.current) {
      if (isPlaying) {
        ref.current.pause();
      } else {
        ref.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section className="pb-[100px] flex items-center justify-center max-tablet:p-0 ">
      <video
        ref={ref}
        src="/vid-7.mp4"
        width={800}
        height={800}
        className="w-full h-[850px] rounded-[1.5rem] object-cover cursor-default max-tablet:h-[550px] max-tablet:rounded-[1rem]"
        loop
        muted
        onClick={togglePlayPause}
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
      />

      <div className="absolute size-fit left-[47%] max-tablet:left-[45%] pointer-events-none">
        {isPlaying ? (
          <IoMdPause
            color="#fff"
            className="text-[8rem] max-tablet:text-[6rem]"
          />
        ) : (
          <IoMdPlay
            color="#fff"
            className="text-[8rem] max-tablet:text-[6rem]"
          />
        )}
      </div>
    </section>
  );
};

export default Several;
