import { Link } from "react-router-dom";
import ScrollAnimation from "../components/ScrollAnimation";
import "../styles/Products.css";

const products = [
  {
    id: 1,
    title: "Romana",
    description: "Moldura para enmarcado de alta resistencia",
    image: "/images/molduras/romana.JPG",
    specs: ["Colores: Vino, Nogal, Plata, Oro, Oro 89","Cortada a medida", "Barra entera (2.9m)", "Caja de 20 barras","Precio por barra: 120 MXN","Precio por caja: 2400 MXN","Poliestireno"],
  },
  {
    id: 2,
    title: "Florencia",
    description: "Moldura para enmarcado de alta resistencia",
    image: "/images/molduras/florencia.JPG",
    specs: ["Colores: Vino, Nogal, Cobre, Titanio, Plata","Cortada a medida", "Barra entera (2.9m)", "Caja de 17 barras","Precio por barra: 120 MXN","Precio por caja: 2040 MXN","Poliestireno"],
  },
  {
    id: 3,
    title: "Nápoles",
    description: "Moldura para enmarcado de alta resistencia",
    image: "/images/molduras/napoles.JPG",
    specs: ["Colores: Negro, Chocolate, Vino, Nogal,Titanio", "Barra entera (2.9m)", "Caja de 24 barras","Precio por barra: 120 MXN","Precio por caja: 2880 MXN","Poliestireno"],
  },
  {
    id: 4,
    title: "Milán",
    description: "Moldura para enmarcado de alta resistencia",
    image: "/images/molduras/milan.JPG",
    specs: ["Colores: Negro, Plata, Bronce", "Barra entera (2.9m)", "Caja de 34 barras","Precio por barra: 120 MXN","Precio por caja: 4080 MXN","Poliestireno"],
  },
  {
    id: 5,
    title: "Venecia",
    description: "Moldura para enmarcado de alta resistencia",
    image: "/images/molduras/Venecia.JPG",
    specs: ["Colores: Oro","Cortada a medida", "Barra entera (2.9m)", "Caja de 26 barras","Precio por barra: 120 MXN","Precio por caja: 3120 MXN","Poliestireno"],
  },
  
];

export default function Products() {
  return (
    <div className="products-page">
      <div className="products-grid">
        {products.map((product) => (
          <ScrollAnimation key={product.id}>
            <article className={`product-card ${product.title === "Romana" ? "exclusive" : ""}`}>
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