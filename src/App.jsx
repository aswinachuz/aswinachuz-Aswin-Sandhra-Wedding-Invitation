import { useState, useEffect } from "react";
import { Analytics } from "@vercel/analytics/react";
import VideoOpener from "./Components/Videoopener";
import MusicPlayer from "./Components/musicplayer";
import CustomCursor from "./Components/Customcursor";
import Countdown from "./Components/Countdown";
import Couple from "./Components/Couple";
import Events from "./Components/Events";
import Gallery from "./Components/gallery";
import RSVP from "./Components/Rsvp";
import "./styles.css";

export default function App() {
  const [opened, setOpened] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.15 });

    document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Analytics />
      <CustomCursor />

      {!opened && <VideoOpener onOpen={() => setOpened(true)} />}

      <div className={`main-content-wrapper ${opened ? "opacity-100" : ""}`}>
        {/* HERO */}
        <header className="hero-bg h-screen flex items-center justify-center text-white text-center">
          <div className="bg-black bg-opacity-40 p-8 md:p-16 rounded-lg animate-float">
            <h3 className="text-xl md:text-2xl mb-4 tracking-widest" style={{ fontFamily: "'Poppins', sans-serif" }}>
              Join us in Celebrating the Wedding of
            </h3>
            <h1 className="text-6xl md:text-8xl font-bold mb-2">Aswin & Sandhra</h1>
            <p className="text-xl md:text-2xl font-light">April 04, 2026</p>
          </div>
        </header>

        {/* Main Content */}
        <main className="container mx-auto px-6 py-16 md:py-24">
          <Countdown />
          <Couple />
          <Events />
          <Gallery />
          <RSVP />
        </main>

        {/* Footer */}
        <footer className="bg-gray-100 py-8 mt-16 md:mt-24">
          <div className="container mx-auto text-center text-gray-600">
            <h2 className="text-4xl font-bold mb-2 text-gray-800" style={{ fontFamily: "'Playfair Display', serif" }}>
              Aswin & Sandhra
            </h2>
            <p>April 04, 2026 | Palakkeezh Bhagavathy Temple, Palakkad</p>
            <p className="mt-4">With love, from our hearts to yours.</p>
          </div>
        </footer>

        <MusicPlayer />
      </div>
    </>
  );
}
