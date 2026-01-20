import { useState } from "react";

const images = [
    "/1.JPG",
    "/2.JPG",
    "/3.JPG"
];

const imageLabels = ["The Proposal", "Our First Trip", "Beach Days"];

export default function Gallery() {
  const [active, setActive] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  return (
    <>
      <section id="gallery" className="mb-16 md:mb-24">
        <h2 className="section-title animate-on-scroll">Our Moments</h2>
        <div className="grid grid-cols-3 gap-4 max-w-6xl mx-auto">
          {images.map((img, i) => (
            <div
              key={i}
              className="gallery-item animate-on-scroll cursor-pointer rounded-lg overflow-hidden"
              onClick={() => {
                setActive(img);
                setCurrentIndex(i);
              }}
              style={{ transitionDelay: `${(i + 1) * 100}ms` }}
            >
              <img src={img} alt={`Gallery ${i + 1}`} />
              <div className="gallery-overlay">{imageLabels[i]}</div>
            </div>
          ))}
        </div>
      </section>

      {active && (
        <div className="lightbox show" onClick={() => setActive(null)}>
          <span className="lightbox-close" onClick={() => setActive(null)}>×</span>
          <span className="lightbox-nav prev" onClick={handlePrev}>❮</span>
          <img src={images[currentIndex]} alt="Gallery" />
          <span className="lightbox-nav next" onClick={handleNext}>❯</span>
        </div>
      )}
    </>
  );
}

