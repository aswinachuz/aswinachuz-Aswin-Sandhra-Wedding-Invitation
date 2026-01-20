import { useState } from "react";

export default function RSVP() {
  const [formData, setFormData] = useState({ name: "", email: "", attending: "" });
  const [msg, setMsg] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const submit = (e) => {
    e.preventDefault();
    setSubmitting(true);

    setTimeout(() => {
      const { name, attending } = formData;
      if (attending === "yes") {
        setMsg(`Thank you, ${name}! We can't wait to celebrate with you.`);
      } else {
        setMsg(`We're so sorry you can't make it, ${name}. You will be missed!`);
      }
      setFormData({ name: "", email: "", attending: "" });
      setSubmitting(false);
    }, 1000);
  };

  return (
    <section id="rsvp" className="mb-16 md:mb-24 animate-on-scroll">
      <h2 className="section-title">RSVP</h2>
      <div className="max-w-xl mx-auto card p-8 md:p-12">
        <p className="text-center text-lg mb-6">Please kindly respond by April 04, 2026.</p>
        <form onSubmit={submit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="form-input"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="form-input"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 font-semibold mb-2">
              Will you be attending?
            </label>
            <div className="flex items-center space-x-4">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="attending"
                  value="yes"
                  checked={formData.attending === "yes"}
                  onChange={handleChange}
                  className="mr-2"
                  required
                />
                Yes, with pleasure!
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="attending"
                  value="no"
                  checked={formData.attending === "no"}
                  onChange={handleChange}
                  className="mr-2"
                />
                Regretfully decline
              </label>
            </div>
          </div>
          <div className="text-center">
            <button
              type="submit"
              disabled={submitting}
              className="btn-primary w-full md:w-auto"
            >
              {submitting ? "Sending..." : "Submit"}
            </button>
          </div>
        </form>
        {msg && (
          <div
            className="text-center mt-4 font-semibold"
            style={{ color: formData.attending === "yes" ? "#34D399" : "#F87171" }}
          >
            {msg}
          </div>
        )}
      </div>
    </section>
  );
}
