import { Link } from "react-router-dom";
import ScrollAnimation from "../components/ScrollAnimation";
import "../styles/Products.css";

const products = [
    {
      id: 1,
      title: "Espejo dorado y moderno",
      // type: "Espejos",
      description: "Espejo dorado y moderno con diseño minimalista.",
      specs: ["Espejo dorado y moderno", "Diseño minimalista.","Precio por pieza: 60 MXN"],
      image: "/images/Espejos/1.webp",
    },
    {
      id: 2,
      title: "Espejo dorado",
      // type: "Espejos",
      description: "Espejo dorado con marco contemporáneo.",
      specs: ["Espejo dorado con marco contemporáneo.","Precio por pieza: 60 MXN"],
      image: "/images/Espejos/2.webp",
    },
    {
      id: 3,
      title: "Espejo dorado",
      // type: "Espejos",
      description: "Espejo dorado ideal para ambientes modernos.",
      specs: ["Espejo dorado", "Ideal para ambientes modernos.","Precio por pieza: 60 MXN"],
      image: "/images/Espejos/3.webp",
    },
    {
      id: 4,
      title: "Espejo dorado",
      // type: "Espejos",
      description: "Diseño moderno en espejo dorado.",
      specs: ["Diseño moderno en espejo dorado", "Elegante y sutil.","Precio por pieza: 60 MXN"],
      image: "/images/Espejos/4.webp",
    },
    {
      id: 5,
      title: "Espejo dorado",
      // type: "Espejos",
      description: "Espejo dorado con acabado brillante.",
      specs: ["Espejo dorado con acabado brillante.","Precio por pieza: 60 MXN"],
      image: "/images/Espejos/5.webp",
    },
  ];

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