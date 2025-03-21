import { Link } from 'react-router-dom';
import ScrollAnimation from '../components/ScrollAnimation';
import './styles/Tools.css';
// Lista de herramientas (puedes agregar más)
import { placeholderTools } from '../files';

export default function Tools() {
  return (
    <div className="tools-page">
      <div className="tools-grid">
        {placeholderTools.map((tool) => (
          <ScrollAnimation key={tool.id}>
            <Link to={`/producto/${tool.id}`} className="product-link">
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
                  <div className="product-specs-card">
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
            </Link>
          </ScrollAnimation>
        ))}
      </div>
    </div>
  );
}
