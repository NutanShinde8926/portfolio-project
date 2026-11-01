import { useState } from "react";
import { info } from "../data";

const links = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Resume", href: "#resume" },
  { name: "Contact", href: "#contact" },
];

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <a href="#home" className="logo">
        {info.name}
      </a>

      <button
        className="menu-btn"
        aria-label="Toggle menu"
        onClick={() => setOpen(!open)}
      >
        {open ? "✕" : "☰"}
      </button>

      <ul className={open ? "nav-links show" : "nav-links"}>
        {links.map((link) => (
          <li key={link.name}>
            <a href={link.href} onClick={() => setOpen(false)}>
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;