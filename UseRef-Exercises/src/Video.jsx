import codeVideo from "./assets/codeHelp.mp4";
import { useRef } from "react";

function Video() {
  const videoRef = useRef(null);

  function start() {
    videoRef.current.play();
  }
  function stop() {
    videoRef.current.pause();
  }

  return (
    <>
      <video
        width="550px"
        ref={videoRef}
        src={codeVideo}
        onMouseOver={start}
        onMouseOut={stop}
      />
    </>
  );
}

export default Video;
