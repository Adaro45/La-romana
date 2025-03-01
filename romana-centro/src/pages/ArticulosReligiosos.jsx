import { Link } from "react-router-dom";
import ScrollAnimation from "../components/ScrollAnimation";
import "./styles/Products.css";
import { articulosreligiosos as products} from "../files";

  

export default function Products() {
  return (
    <div className="products-page">
      <div className="products-grid">
        {products.map((product) => (
          <ScrollAnimation key={product.id}>
            <article className="product-card">
              <div className="card-image-container">
                <img src={product.image} alt={product.title} loading="lazy" />
              </div>
              <div className="card-content">
                <h3>{product.title}</h3>
                <p>{product.description}</p>
                {product.specs && (
                  <div className="product-specs">
                    <h4>Detalles del producto:</h4>
                    <ul>
                      {product.specs.map((spec, index) => (
                        <li key={index}>{spec}</li>
                      ))}
                    </ul>
                  </div>
                )}
                <Link to="/contacto" className="card-button">
                  Consultar opciones
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