import { Link } from 'react-router-dom';
import '../styles/main.css';

export default function Layout({ children }) {
  return (
    <>
      <header className="sticky-header">
        <nav>
          <Link to="/" className="logo">           
          <img 
              src="/images/logoheader.png" 
              alt="Romana Centro Logo" 
              className="logo-image"
            /></Link>
          <div className="nav-links">
            <Link to="/">Inicio</Link>
            <Link to="/productos">Productos</Link>
            <Link to="/herramientas">Herramientas</Link>
            <Link to="/contacto">Contacto</Link> 
          </div>
        </nav>
      </header>
      <main>{children}</main>
    </>
  );
}