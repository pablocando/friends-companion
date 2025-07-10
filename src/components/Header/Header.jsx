import { Link } from "react-router-dom";
import { useState } from "react";
import "./Header.css";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <Link to="/" onClick={closeMenu}>
            <img
              src="https://storage.googleapis.com/image-friend/logo/friends-logo.png"
              alt="Logo de Mi Serie"
              className="logo-image"
              onError={(e) => {
                e.target.style.display = "none";
                e.target.nextSibling.style.display = "inline";
              }}
            />
          </Link>
        </div>

        <button
          className={`hamburger ${isMenuOpen ? "active" : ""}`}
          onClick={toggleMenu}
          aria-label="Abrir menú"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`nav ${isMenuOpen ? "nav-open" : ""}`}>
          <ul className="nav-list">
            <li>
              <Link to="/personajes" className="nav-link" onClick={closeMenu}>
                <span className="nav-icon">👥</span>
                Personajes
              </Link>
            </li>
            <li>
              <Link to="/temporadas" className="nav-link" onClick={closeMenu}>
                <span className="nav-icon">📺</span>
                Temporadas
              </Link>
            </li>
            <li>
              <Link to="/invitados" className="nav-link" onClick={closeMenu}>
                <span className="nav-icon">⭐</span>
                Invitados
              </Link>
            </li>
            <li>
              <Link to="/foro" className="nav-link" onClick={closeMenu}>
                <span className="nav-icon">💬</span>
                Foro
              </Link>
            </li>
            <li>
              <Link to="/tienda" className="nav-link" onClick={closeMenu}>
                <span className="nav-icon">🛒</span>
                Tienda
              </Link>
            </li>
          </ul>
        </nav>

        {isMenuOpen && <div className="nav-overlay" onClick={closeMenu}></div>}
      </div>
    </header>
  );
}

export default Header;
