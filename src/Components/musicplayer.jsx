// import { useRef, useState, useEffect } from "react";

// export default function MusicPlayer() {
//   const audioRef = useRef(null);
//   const [isPlaying, setIsPlaying] = useState(false);

//   useEffect(() => {
//     const audio = audioRef.current;
//     if (!audio) return;

//     // Handle play state
//     const handlePlay = () => setIsPlaying(true);
//     const handlePause = () => setIsPlaying(false);
//     const handleEnded = () => setIsPlaying(false);

//     audio.addEventListener("play", handlePlay);
//     audio.addEventListener("pause", handlePause);
//     audio.addEventListener("ended", handleEnded);

//     return () => {
//       audio.removeEventListener("play", handlePlay);
//       audio.removeEventListener("pause", handlePause);
//       audio.removeEventListener("ended", handleEnded);
//     };
//   }, []);

//   const toggleMusic = () => {
//     if (!audioRef.current) return;

//     if (isPlaying) {
//       audioRef.current.pause();
//     } else {
//       audioRef.current.play().catch(err => console.error("Audio playback failed:", err));
//     }
//   };

//   return (
//     <>
//       {/* Background Music */}
//       <audio ref={audioRef} loop>
//         <source src="/Mangalyam.mp3" type="audio/mpeg" />
//         Your browser does not support the audio element.
//       </audio>

//       {/* Music Button */}
//       <div id="music-player" onClick={toggleMusic}>
//         <i
//           className={`fas ${isPlaying ? "fa-pause" : "fa-play"}`}
//           id="music-icon"
//         ></i>
//       </div>
//     </>
//   );
// }


// import { useRef, useEffect } from "react";

// export default function MusicPlayer() {
//   const audioRef = useRef(null);

//   useEffect(() => {
//     const audio = audioRef.current;
//     if (!audio) return;

//     const startMusic = () => {
//       audio.play().catch(() => {});
//       document.removeEventListener("click", startMusic);
//     };

//     // Play on first user interaction
//     document.addEventListener("click", startMusic);

//     return () => {
//       document.removeEventListener("click", startMusic);
//     };
//   }, []);

//   return (
//     <>
//       <audio
//         ref={audioRef}
//         src="/Mangalyam.mp3"
//         controls
//         loop
//       />
//     </>
//   );
// }


import { useRef, useEffect } from "react";
import "./musicplayer.css";

export default function MusicPlayer() {
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const startMusic = () => {
      audio.play().catch(() => {});
      document.removeEventListener("click", startMusic);
    };

    document.addEventListener("click", startMusic);

    return () => {
      document.removeEventListener("click", startMusic);
    };
  }, []);

  return (
    <audio
      ref={audioRef}
      src="/Mangalyam.mp3"
      controls
      loop
      className="floating-audio"
    />
  );
}
