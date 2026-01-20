import { useEffect, useRef } from "react";

export default function VideoOpener({ onOpen }) {
  const videoRef = useRef(null);
  const audioRef = useRef(null);

  useEffect(() => {
    document.body.classList.add("body-no-scroll");
    
    return () => {
      document.body.classList.remove("body-no-scroll");
    };
  }, []);

  const handleClick = () => {
    // Play the video
    if (videoRef.current) {
      videoRef.current.play().catch(err => console.error("Video playback failed:", err));
    }

    // Play the music
    if (audioRef.current) {
      audioRef.current.play().catch(err => console.error("Audio playback failed:", err));
    }

    const videoOpener = document.getElementById("video-opener");
    const mainContent = document.querySelector(".main-content-wrapper");
    
    if (videoOpener && mainContent) {
      setTimeout(() => {
        videoOpener.style.opacity = "0";
        mainContent.style.opacity = "1";
        document.body.classList.remove("body-no-scroll");
        
        setTimeout(() => {
          videoOpener.style.display = "none";
        }, 800);
      }, 6500);
    }
    
    onOpen();
  };

  return (
    <>
      <audio ref={audioRef} loop>
        <source src="/Mangalyam.mp3" type="audio/mpeg" />
      </audio>

      <div id="video-opener">
        <video muted loop id="envelope-video" ref={videoRef}>
          <source
            src="https://github.com/farazc60/Project-Images/raw/refs/heads/main/ribbon.mp4"
            type="video/mp4"
          />
        </video>

        <button id="open-video-button" onClick={handleClick}>
          <div className="text-2xl mb-2 animate-bounce-slow">💍</div>
          Click to Open
        </button>
      </div>
    </>
  );
}
