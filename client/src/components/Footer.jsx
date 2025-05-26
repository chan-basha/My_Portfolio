
// File: src/components/Footer.jsx
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <p className="footer-text">&copy; {new Date().getFullYear()} Shaik Chan Basha. All rights reserved.</p>
      <div className="footer-icons">
        <a href="https://github.com/chan-basha" target="_blank" rel="noopener noreferrer">
          <FaGithub size={20} />
        </a>
        <a href="https://www.linkedin.com/in/shaikchanbasha" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={20} />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
