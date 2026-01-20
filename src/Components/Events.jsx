export default function Events() {
  return (
    <section id="events" className="mb-16 md:mb-24">
      <h2 className="section-title animate-on-scroll">Wedding Events</h2>
      <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
        <div className="card text-center animate-on-scroll" style={{ transitionDelay: "100ms" }}>
          <div className="p-8">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">
              <div className="text-3xl mb-2 animate-bounce-slow">💍</div>
              Wedding Ceremony
            </h3>
            <p className="text-gray-600 mb-1">April 04, 2026</p>
            <p className="text-gray-600 mb-4">10:30 AM - 11:30 AM</p>
            <p className="font-semibold text-gray-700">Palakkeezh Bhagavathy Temple</p>
            <p className="text-gray-500 mt-2">
              <a href="https://maps.app.goo.gl/Vum2fm6WWMR7bGRy8" target="_blank" rel="noopener noreferrer">
                📌 Get Directions
              </a>
            </p>
          </div>
        </div>

        <div className="card text-center animate-on-scroll" style={{ transitionDelay: "200ms" }}>
          <div className="p-8">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">
              <div className="text-4xl mb-2 animate-bounce-slow">🎉</div>
              The Reception
            </h3>
            <p className="text-gray-600 mb-1">Saturday, April 04, 2026</p>
            <p className="text-gray-600 mb-4">4:30 PM - 8:30 PM</p>
            <p className="font-semibold text-gray-700">Galaxy Auditorium Athicode</p>
            <p className="text-gray-500 mt-2">
              <a href="https://maps.app.goo.gl/86xYcWY2AcAzFCbS7" target="_blank" rel="noopener noreferrer">
                📌 Get Directions
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
