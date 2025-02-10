import { Link } from 'react-router-dom';
import ScrollAnimation from '../components/ScrollAnimation';
import '../styles/FinishedProducts.css';

// Definición manual del arreglo de productos terminados
const finishedProducts = [
  {
    id: 1,
    title: "Virgen de Guadalupe",
    description: "Virgen maternal, consuelo y fe en México.",
    image: "/images/terminados/1.JPG",
    specs: [
      "Molduras ornamentadas realzan obra con elegante detalle.",
      "Tamaños estándar",
      "Personalización disponible",
      "Materiales premium"
    ]
  },
  {
    id: 2,
    title: "La última cena",
    description: "Comida final, preludio de redención y comunión.",
    image: "/images/terminados/2.JPG",
    specs: [
      "Molduras ornamentadas realzan obra con elegante detalle.",
      "Tamaños estándar",
      "Personalización disponible",
      "Materiales premium"
    ]
  },
  {
    id: 3,
    title: "Virgen de Guadalupe",
    description: "Virgen maternal, consuelo y fe en México.",
    image: "/images/terminados/3.JPG",
    specs: [
      "Molduras ornamentadas realzan obra con elegante detalle.",
      "Tamaños estándar",
      "Personalización disponible",
      "Materiales premium"
    ]
  },
  {
    id: 4,
    title: "La Sagrada Familia",
    description: "Familia divina, unión y amor sagrado eterno..",
    image: "/images/terminados/4.JPG",
    specs: [
      "Molduras ornamentadas realzan obra con elegante detalle.",
      "Tamaños estándar",
      "Personalización disponible",
      "Materiales premium"
    ]
  },
  {
    id: 5,
    title: "María y Jesús",
    description: "Amor maternal y divino en tierno encuentro.",
    image: "/images/terminados/5.JPG",
    specs: [
      "Molduras ornamentadas realzan obra con elegante detalle.",
      "Tamaños estándar",
      "Personalización disponible",
      "Materiales premium"
    ]
  },
  {
    id: 6,
    title: "Virgen de Guadalupe",
    description: "Encarnación de fe y esperanza mexicana",
    image: "/images/terminados/6.JPG",
    specs: [
        "Molduras ornamentadas realzan obra con elegante detalle.",
      "Tamaños estándar",
      "Personalización disponible",
      "Materiales premium"
    ]
  },
  {
    id: 6,
    title: "El milagro de Jesucristo",
    description: "Milagro que inspira fe y asombro divino.",
    image: "/images/terminados/7.JPG",
    specs: [
        "Molduras ornamentadas realzan obra con elegante detalle.",
      "Tamaños estándar",
      "Personalización disponible",
      "Materiales premium"
    ]
  }
];

export default function FinishedProducts() {
  return (
    <div className="finished-products-page">
      <h1 className="page-title">Productos Terminados</h1>
      <div className="products-grid">
        {finishedProducts.map(product => (
          <ScrollAnimation key={product.id}>
            <article className="product-card">
              <div className="card-image-container">
                <img 
                  src={product.image} 
                  alt={product.title} 
                  loading="lazy" 
                />
              </div>
              <div className="card-content">
                <h3>{product.title}</h3>
                <p>{product.description}</p>
                {product.specs && (
                  <div className="product-specs">
                    <h4>Especificaciones:</h4>
                    <ul>
                      {product.specs.map((spec, index) => (
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
