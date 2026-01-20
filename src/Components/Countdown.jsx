import { useEffect, useState } from "react";

export default function Countdown() {
  const weddingDate = new Date("Apr 4, 2026 10:30:00").getTime();
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = Date.now();
      const diff = weddingDate - now;

      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        clearInterval(timer);
        return;
      }

      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [weddingDate]);

  return (
    <section id="countdown" className="mb-16 md:mb-24 animate-on-scroll">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="section-title">Can't wait to Officially call you mine forever</h2>
        <div className="grid grid-cols-4 gap-4 text-center">
          <div>
            <div className="font-bold text-5xl md:text-7xl text-gray-800">
              {String(timeLeft.days).padStart(2, "0")}
            </div>
            <span className="text-sm md:text-base text-gray-500">Days</span>
          </div>
          <div>
            <div className="font-bold text-5xl md:text-7xl text-gray-800">
              {String(timeLeft.hours).padStart(2, "0")}
            </div>
            <span className="text-sm md:text-base text-gray-500">Hours</span>
          </div>
          <div>
            <div className="font-bold text-5xl md:text-7xl text-gray-800">
              {String(timeLeft.minutes).padStart(2, "0")}
            </div>
            <span className="text-sm md:text-base text-gray-500">Minutes</span>
          </div>
          <div>
            <div className="font-bold text-5xl md:text-7xl text-gray-800">
              {String(timeLeft.seconds).padStart(2, "0")}
            </div>
            <span className="text-sm md:text-base text-gray-500">Seconds</span>
          </div>
        </div>
      </div>
    </section>
  );
}

