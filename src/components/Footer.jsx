import { info } from "../data";

function Footer() {
  return (
    <footer className="footer">
      <p>
        © {new Date().getFullYear()} {info.name}. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;