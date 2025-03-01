import { Link } from "react-router-dom";
import "./styles/FinishedProducts.css";

export default function FinishedProducts() {
  return (
    <div className="finished-products-page">
      <div className="development-banner">
        <p>¡Sitio en desarrollo!</p>
        <p>Estamos ampliando nuestro catálogo. Para más información:</p>
        <Link to="/contacto" className="banner-button">
          Contactar a un asesor
        </Link>
      </div>
    </div>
  );
}
