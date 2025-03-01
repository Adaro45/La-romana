import { Link } from 'react-router-dom';
import ScrollAnimation from '../components/ScrollAnimation';
import './styles/Tools.css';
// Lista de herramientas (puedes agregar más)
import { placeholderTools } from '../files';

export default function Tools() {
  return (
    <div className="tools-page">
      <h1 className="page-title-herramientas">Nuestras Herramientas</h1>

      <div className="tools-grid">
        {placeholderTools.map((tool) => (
          <ScrollAnimation key={tool.id}>
            <article className="tool-card">
              <div className="card-image-container">
                <img 
                  src={tool.image} 
                  alt={tool.title} 
                  loading="lazy"
                />
              </div>
              <div className="card-content">
                <h3>{tool.title}</h3>
                <p>{tool.description}</p>
                {tool.specs && (
                  <div className="tool-specs">
                    <h4>Detalles del producto:</h4>
                    <ul>
                      {tool.specs.map((spec, index) => (
                        <li key={index}>{spec}</li>
                      ))}
                    </ul>
                  </div>
                )}
                <Link to="/contacto" className="card-button">
                  Consultar información
                </Link>
              </div>
            </article>
          </ScrollAnimation>
        ))}
      </div>

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
