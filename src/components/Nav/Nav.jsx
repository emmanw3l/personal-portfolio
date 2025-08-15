import { useState, useEffect } from "react";
import "./Nav.css";
import { motion } from "framer-motion";
import { variants3 } from "../../animations/variants";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [theme, setTheme] = useState("light");

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.body.className = newTheme; // Apply theme to body
    localStorage.setItem("theme", newTheme);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
      document.body.className = savedTheme;
    }
  }, []);

  useEffect(() => {
    function scrollNav() {
      setIsScrolled(window.scrollY > 10);
      setIsOpen(false);
    }
    window.addEventListener("scroll", scrollNav);
    return () => {
      window.removeEventListener("scroll", scrollNav);
    };
  }, []);

  return (
    <div className={`nav ${isScrolled ? "nav-scroll" : ""}`}>
      <div className={`nav-info ${isScrolled ? "nav-info-scrolled" : ""}`}>
        <div className="logo">
          <motion.p
            variants={variants3}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            custom={1}
          >
            <a href="#">My portfolio</a>
          </motion.p>
        </div>

        <div className={`links ${isOpen ? "open-links" : ""}`}>
          <motion.a variants={variants3} initial="initial" whileInView="animate" viewport={{ once: true }} custom={3} href="#about">
            About
          </motion.a>
          <motion.a variants={variants3} initial="initial" whileInView="animate" viewport={{ once: true }} custom={4} href="#skills">
            Skills
          </motion.a>
          <motion.a variants={variants3} initial="initial" whileInView="animate" viewport={{ once: true }} custom={5} href="#projects">
            Projects
          </motion.a>
          <motion.a variants={variants3} initial="initial" whileInView="animate" viewport={{ once: true }} custom={6} href="#contact">
            Contact
          </motion.a>
        </div>

        {/* Light/Dark Mode Button */}
        <button className="theme-toggle-btn" onClick={toggleTheme}>
          {theme === "dark" ? "🌙" : "☀️"}
        </button>

        <div className={`hamburger-menu ${isOpen ? "open" : ""}`} onClick={toggleMenu}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </div>
    </div>
  );
}
