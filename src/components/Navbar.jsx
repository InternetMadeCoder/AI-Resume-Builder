import { useEffect, useState } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="container">
        <div className="navbar-content">
          <a href="/" className="navbar-brand">
            <span className="navbar-brand-text">
              <span className="highlight">Resume</span> Rocket
            </span>
          </a>
          <div className="navbar-right">
            {/* Optional: Add navigation items or buttons here */}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
