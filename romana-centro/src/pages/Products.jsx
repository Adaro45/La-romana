import { Link } from "react-router-dom";
import ScrollAnimation from "../components/ScrollAnimation";
import "../styles/Products.css";

const products = [
  {
    id: 1,
    title: "Florencia",
    description: "Moldura para enmarcado de alta resistencia",
    image: "/images/molduras/florencia.JPG",
    specs: ["Colores: Vino, Nogal, Bronce, Titanio, Plata","Cortada a medida", "Barra entera (2.9m)", "Caja de 20 barras","Precio por barra: 120 MX","Poliestireno"],
  },
  {
    id: 2,
    title: "Romana",
    description: "Moldura para enmarcado de alta resistencia",
    image: "/images/molduras/romana.JPG",
    specs: ["Colores: Vino, Nogal, Plata, Oro, Oro 89","Cortada a medida", "Barra entera (2.9m)", "Caja de 20 barras","Precio por barra: 120 MX","Poliestireno"],
  },
  {
    id: 3,
    title: "Nápoles",
    description: "Moldura para enmarcado de alta resistencia",
    image: "/images/molduras/napoles.JPG",
    specs: ["Colores: Negro, Chocolate, Vino, Nogal,Titanio", "Barra entera (2.9m)", "Caja de 24 barras","Precio por barra: 120 MX","Poliestireno"],
  },
  {
    id: 4,
    title: "Milán",
    description: "Moldura para enmarcado de alta resistencia",
    image: "/images/molduras/milan.JPG",
    specs: ["Colores: Negro, Plata, Bronce", "Barra entera (2.9m)", "Caja de 20 barras","Precio por barra: 120 MX","Poliestireno"],
  },
  {
    id: 5,
    title: "Venecia",
    description: "Moldura para enmarcado de alta resistencia",
    image: "/images/molduras/Venecia.JPG",
    specs: ["Colores: Oro","Cortada a medida", "Barra entera (2.9m)", "Caja de 20 barras","Precio por barra: 120 MX","Poliestireno"],
  },
  {
    id: 21,
    title: "Grapas flexipunta",
    description: "Grapa flexipunta",
    image: "/images/grapas/1.jpg",
    specs: [
      "Caja con 4300 grapas",
      "Grapa para ensambladora de marcos",
      "Garantía del vendedor: 1 meses",
    ],
  },
  {
    id: 21,
    title: "Grapas 7mm",
    description: "Grapa encolada de 7mm",
    image: "/images/grapas/2.jpg",
    specs: [
      "Caja con 4300 grapas",
      "Grapa para ensambladora de marcos",
      "Garantía del vendedor: 1 meses",
    ],
  },
  {
    id: 21,
    title: "Grapas 10mm",
    description: "Grapa encolada de 10mm",
    image: "/images/grapas/2.jpg",
    specs: [
      "Caja con 4300 grapas",
      "Grapa para ensambladora de marcos",
      "Garantía del vendedor: 1 meses",
    ],
  },
  {
    id: 21,
    title: "Grapas 12mm",
    description: "Grapa encolada de 12mm",
    image: "/images/grapas/2.jpg",
    specs: [
      "Caja con 4300 grapas",
      "Grapa para ensambladora de marcos",
      "Garantía del vendedor: 1 meses",
    ],
  },
  {
    id: 22,
    title: "MDF",
    description: "Macocel",
    image: "/images/grapas/MDF.jpg",
    specs: ["Perzonabilizable", "Fácil instalación", "Resistente al tiempo"],
  },
  {
    id: 23,
    title: "Caballete",
    description: "Caballete Pequeño",
    image: "/images/grapas/caballetepe.jpg",
    specs: ["5.9inch 15cm de altura", "Tablero de fibra de madera"],
  },
  {
    id: 24,
    title: "Caballete",
    description: "Caballete Mediano",
    image: "/images/grapas/caballetemed.jpg",
    specs: ["20inch 50.8cm de altura", "Tablero de madera"],
  },
  {
    id: 25,
    title: "Caballete",
    description: "Caballete Grande",
    image: "/images/grapas/caballetegran.jpg",
    specs: ["59inch 150cm de altura", "Tablero de madera"],
  },
  {
    id: 26,
    title: "Cinta Adhesiva Doble Cara Más Adhesivo",
    description: "Cinta adhesiva doble cara ",
    image: "/images/grapas/cintadoblecara.jpg",
    specs: ["Rollo un 1320cm x 5000cm"],
  },
  {
    id: 27,
    title: "Cinta Adhesiva Doble Cara Más Adhesivo",
    description: "Cinta adhesiva doble cara ",
    image: "/images/grapas/cintadoblecara.jpg",
    specs: ["Rollo un 635cm x 5000cm"],
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