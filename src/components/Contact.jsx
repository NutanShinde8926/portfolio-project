import { useState } from "react";
import { info } from "../data";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // demo only: message is not sent anywhere
    setSent(true);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="section">
      <h2 className="title">Contact</h2>
      <div className="contact">
        <div className="contact-info">
          <p>Feel free to contact me for work, internships or just to say hi.</p>
          <p>Email: {info.email}</p>
          <p>
            <a href={info.github} target="_blank" rel="noreferrer">
              GitHub
            </a>{" "}
            |{" "}
            <a href={info.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit" className="btn">
            Send Message
          </button>
          {sent && <p className="success">Thank you! Your message is sent.</p>}
        </form>
      </div>
    </section>
  );
}

export default Contact;