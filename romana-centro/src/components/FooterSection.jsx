import { Link } from "react-router-dom"
import "./styles/FooterSection.css"

const FooterSection = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer-container">
      <div className="footer-top">
        <div className="container">
          <div className="footer-logo-container">
            <img src="/images/logoheader.png" alt="Romana Centro" className="footer-logo" />
            <p className="footer-tagline">Tu aliado en el arte de enmarcar desde 1990</p>
          </div>

          <div className="footer-features">
            <div className="feature-card">
              <div className="feature-icon">
                <img src="/icons/support.png" alt="Atención" className="icon" />
              </div>
              <h3>Atención Personalizada</h3>
              <p className="footer-p">Soporte especializado siempre disponible</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <img src="/icons/check.png" alt="Calidad" className="icon" />
              </div>
              <h3>Calidad Garantizada</h3>
              <p className="footer-p">Materiales y productos de primera calidad</p>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-middle">
        <div className="container">
          <div className="footer-links">
            <div className="footer-column">
              <h4>Información</h4>
              <Link to="/">Inicio</Link>
              <Link to="/contacto">Pedidos Personalizados</Link>
              <a href="/documents/Términos de Servicio Romana Centro.pdf" download="TerminosDeServicio.pdf">
                Términos del servicio
              </a>
              <Link to="/nosotros">Acerca de nosotros</Link>
            </div>

            <div className="footer-column">
              <h4>Productos</h4>
              <Link to="/productos/molduras">Molduras</Link>
              <Link to="/productos/herramientas">Herramientas</Link>
              <Link to="/productos/terminados/espejos">Espejos</Link>
              <Link to="/productos/terminados/articulos-religiosos">Artículos Religiosos</Link>
            </div>

            <div className="footer-column">
              <h4>Contacto</h4>
              <p>Tel: +525648210476</p>
              <p>Email: romanacentro@yahoo.com</p>
              <p>Dirección: Donceles 71 A, Col. Centro, Cuauhtémoc, CDMX</p>
              <div className="social-icons">
                <a href="https://facebook.com/romanacentro" target="_blank" rel="noopener noreferrer">
                  <img src="/icons/facebook.png" alt="Facebook" className="icon" />
                </a>
                <a href="https://instagram.com/romanacentro" target="_blank" rel="noopener noreferrer">
                  <img src="/icons/instagram.png" alt="Instagram" className="icon" />
                </a>
                <a href="https://wa.me/525648210476" target="_blank" rel="noopener noreferrer">
                  <img src="/icons/whatsapp.png" alt="WhatsApp" className="icon" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p>© {currentYear} Romana Centro. Todos los derechos reservados</p>
          <div className="footer-bottom-links">
            <a href="#">Política de Privacidad</a>
            <a href="#">Términos y Condiciones</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default FooterSection

