export default function Couple() {
  return (
    <section id="couple" className="mb-16 md:mb-24">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="section-title animate-on-scroll">The Couple</h2>
        <p className="text-lg mb-12 animate-on-scroll text-gray-700" style={{ transitionDelay: "100ms" }}>
          Two hearts, one journey. We are so excited to celebrate our special day with you. We can't wait to start our forever, surrounded by the people we love most.
        </p>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center animate-on-scroll" style={{ transitionDelay: "200ms" }}>
            <img 
              src="/a1.JPG" 
              alt="Aswin"
              className="w-48 h-48 rounded-full mx-auto mb-4 object-cover shadow-lg"
            />
            <h3 className="text-3xl font-bold text-gray-800">Aswin</h3>
            <p className="text-gray-500 mt-2">Son of Mr. & Mrs. Unni Krishnan</p>
          </div>
          <div className="text-center animate-on-scroll" style={{ transitionDelay: "300ms" }}>
            <img 
              src="/s1.JPG" 
              alt="Sandhra"
              className="w-48 h-48 rounded-full mx-auto mb-4 object-cover shadow-lg"
            />
            <h3 className="text-3xl font-bold text-gray-800">Sandhra</h3>
            <p className="text-gray-500 mt-2">Daughter of Mr. & Mrs. Radha Krishnan</p>
          </div>
        </div>
      </div>
    </section>
  );
}
