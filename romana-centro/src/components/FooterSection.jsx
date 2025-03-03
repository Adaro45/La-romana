// Componente FooterSection.jsx
import { Link } from 'react-router-dom';
import './styles/FooterSection.css';

const FooterSection = () => {
  return (
    <footer className="footer-container">
      {/* Sección de características destacadas */}
      <section className="features-section">
        
        <div className="feature-card">
          <img src="/icons/support.png" alt="Atención" className="feature-icon icon"  />
          <h3>Atención 24/7</h3>
          <p>Soporte especializado siempre disponible</p>
        </div>
        
        <div className="feature-card">
          <img src="/icons/check.png" alt="Ecológico" className="feature-icon icon" />
          <h3>100% de Compromiso</h3>
          <p>Servicio seguro y confiable</p>
        </div>
      </section>

      {/* Sección de enlaces del footer */}
      <section className="footer-links">
        <div className="footer-column">
          <h4>Info</h4>
          <Link to="/">Inicio</Link>
          <Link to="/contacto">Pedidos Personalizados</Link>
          <a href="/documents/Términos de Servicio Romana Centro.pdf" download="TerminosDeServicio.pdf">
  Términos del servicio
</a>
        </div>
        
        <div className="footer-column">
          <h4>Empresa</h4>
          <Link to="/nosotros">Acerca de nosotros</Link>
        </div>
        
        <div className="footer-column">
          <h4>Contacto</h4>
          <p>Tel: +525648210476</p>
          <p>Email: romanacentro@yahoo.com</p>
          <div className="social-icons">
            <a href="facebook.com"><img src="/icons/facebook.png" alt="Facebook" className='icon' /></a>
            <a href="instagram.com"><img src="/icons/instagram.png" alt="Instagram"  className='icon'/></a>
          </div>
        </div>
      </section>

      {/* Derechos de autor */}
      <div className="copyright">
        <img src="/images/logoheader.png" alt="Romana Centro" className="footer-logo" />
        <p>© 2025 Romana Centro. Todos los derechos reservados</p>
      </div>
    </footer>
  );
};

export default FooterSection;