import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../main.css';

export default function Layout({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navLinksRef = useRef(null);
  const hamburgerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (isMenuOpen) {
        // Si el click NO está dentro del contenedor de links ni en el botón, se cierra el menú
        if (
          navLinksRef.current &&
          !navLinksRef.current.contains(e.target) &&
          hamburgerRef.current &&
          !hamburgerRef.current.contains(e.target)
        ) {
          setIsMenuOpen(false);
        }
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isMenuOpen]);

  return (
    <>
      <header className="sticky-header">
        <nav>
          <Link to="/" className="logo">
            <img 
              src="/images/logoheader.png" 
              alt="Romana Centro" 
              className="logo-image"
            />
          </Link>
          
          <button 
            ref={hamburgerRef}
            className={`hamburger ${isMenuOpen ? 'active' : ''}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </button>

          <div ref={navLinksRef} className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
            <Link to="/" onClick={() => setIsMenuOpen(false)}>Inicio</Link>
            <Link to="/productos" onClick={() => setIsMenuOpen(false)}>Productos</Link>
            <Link to="/productos/herramientas" onClick={() => setIsMenuOpen(false)}>Herramientas</Link>
            <Link to="/contacto" onClick={() => setIsMenuOpen(false)}>Contacto</Link>
          </div>
        </nav>
      </header>
      <main>{children}</main>
    </>
  );
}
