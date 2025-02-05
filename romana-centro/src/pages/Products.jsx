import { Link } from "react-router-dom";
import ScrollAnimation from "../components/ScrollAnimation";
import "../styles/Products.css";

const products = [
  {
    id: 1,
    title: "Moldura Clásica Dorada",
    description: "Moldura para enmarcado de alta resistencia",
    image: "/images/molduras/1.JPG",
    specs: ["Cortada a medida", "Barra entera (3m)", "Acabado: Brillante"],
  },
  {
    id: 2,
    title: "Marco Clásico Estilo Francés",
    description: "Moldura para enmarcado de alta resistencia",
    image: "/images/molduras/2.JPG",
    specs: ["Cortada a medida", "Barra entera (3m)", "Acabado: Brillante"],
  },
  {
    id: 3,
    title: "Brisa Nórdica",
    description: "Moldura para enmarcado de alta resistencia",
    image: "/images/molduras/3.JPG",
    specs: ["Cortada a medida", "Barra entera (3m)", "Acabado: Brillante"],
  },
  {
    id: 4,
    title: "Atardecer Terracota",
    description: "Moldura para enmarcado de alta resistencia",
    image: "/images/molduras/4.JPG",
    specs: ["Cortada a medida", "Barra entera (3m)", "Acabado: Brillante"],
  },
  {
    id: 5,
    title: "Neblina Plateada",
    description: "Moldura para enmarcado de alta resistencia",
    image: "/images/molduras/5.JPG",
    specs: ["Cortada a medida", "Barra entera (3m)", "Acabado: Brillante"],
  },
  {
    id: 6,
    title: "Selva Esmeralda",
    description: "Moldura para enmarcado de alta resistencia",
    image: "/images/molduras/6.JPG",
    specs: ["Cortada a medida", "Barra entera (3m)", "Acabado: Brillante"],
  },
  {
    id: 7,
    title: "Cielo Grafito",
    description: "Moldura para enmarcado de alta resistencia",
    image: "/images/molduras/7.JPG",
    specs: ["Cortada a medida", "Barra entera (3m)", "Acabado: Brillante"],
  },
  {
    id: 8,
    title: "Aurora Boreal",
    description: "Moldura para enmarcado de alta resistencia",
    image: "/images/molduras/8.JPG",
    specs: ["Cortada a medida", "Barra entera (3m)", "Acabado: Brillante"],
  },
  {
    id: 9,
    title: "Mármol Lunar",
    description: "Moldura para enmarcado de alta resistencia",
    image: "/images/molduras/9.JPG",
    specs: ["Cortada a medida", "Barra entera (3m)", "Acabado: Brillante"],
  },
  {
    id: 10,
    title: "Cobre Envejecido",
    description: "Moldura para enmarcado de alta resistencia",
    image: "/images/molduras/10.JPG",
    specs: ["Cortada a medida", "Barra entera (3m)", "Acabado: Brillante"],
  },
  {
    id: 11,
    title: "Océano Profundo",
    description: "Moldura para enmarcado de alta resistencia",
    image: "/images/molduras/11.JPG",
    specs: ["Cortada a medida", "Barra entera (3m)", "Acabado: Brillante"],
  },
  {
    id: 12,
    title: "Ceniza Volcánica",
    description: "Moldura para enmarcado de alta resistencia",
    image: "/images/molduras/12.JPG",
    specs: ["Cortada a medida", "Barra entera (3m)", "Acabado: Brillante"],
  },
  {
    id: 13,
    title: "Bosque Otoñal",
    description: "Moldura para enmarcado de alta resistencia",
    image: "/images/molduras/13.JPG",
    specs: ["Cortada a medida", "Barra entera (3m)", "Acabado: Brillante"],
  },
  {
    id: 14,
    title: "Acero Brumoso",
    description: "Moldura para enmarcado de alta resistencia",
    image: "/images/molduras/14.JPG",
    specs: ["Cortada a medida", "Barra entera (3m)", "Acabado: Brillante"],
  },
  {
    id: 15,
    title: "Jardín Botánico",
    description: "Moldura para enmarcado de alta resistencia",
    image: "/images/molduras/15.JPG",
    specs: ["Cortada a medida", "Barra entera (3m)", "Acabado: Brillante"],
  },
  {
    id: 16,
    title: "Desierto Arenoso",
    description: "Moldura para enmarcado de alta resistencia",
    image: "/images/molduras/16.JPG",
    specs: ["Cortada a medida", "Barra entera (3m)", "Acabado: Brillante"],
  },
  {
    id: 17,
    title: "Cielo Nocturno",
    description: "Moldura para enmarcado de alta resistencia",
    image: "/images/molduras/17.JPG",
    specs: ["Cortada a medida", "Barra entera (3m)", "Acabado: Brillante"],
  },
  {
    id: 18,
    title: "Piedra Musgosa",
    description: "Moldura para enmarcado de alta resistencia",
    image: "/images/molduras/18.JPG",
    specs: ["Cortada a medida", "Barra entera (3m)", "Acabado: Brillante"],
  },
  {
    id: 19,
    title: "Viento Helado",
    description: "Moldura para enmarcado de alta resistencia",
    image: "/images/molduras/19.JPG",
    specs: ["Cortada a medida", "Barra entera (3m)", "Acabado: Brillante"],
  },
  {
    id: 21,
    title: "Grapas",
    description: "Grapa flexipunta",
    image: "/images/grapas/1.jpg",
    specs: [
        "Caja con 4300 grapas", 
        "Grapa para ensambladora de marcos", 
        "Garantía del vendedor: 1 meses"
    ],
  },
  {
    id: 21,
    title: "Grapas",
    description: "Grapa encolada de 7mm",
    image: "/images/grapas/2.jpg",
    specs: [
        "Caja con 4300 grapas", 
        "Grapa para ensambladora de marcos", 
        "Garantía del vendedor: 1 meses"
    ],
  },
  {
    id: 21,
    title: "Grapas",
    description: "Grapa encolada de 10mm",
    image: "/images/grapas/2.jpg",
    specs: [
        "Caja con 4300 grapas", 
        "Grapa para ensambladora de marcos", 
        "Garantía del vendedor: 1 meses"
    ],
  },
  {
    id: 21,
    title: "Grapas",
    description: "Grapa encolada de 12mm",
    image: "/images/grapas/2.jpg",
    specs: [
        "Caja con 4300 grapas", 
        "Grapa para ensambladora de marcos", 
        "Garantía del vendedor: 1 meses"
    ],
},
    {
        id: 22,
        title: "MDF",
        description: "Macocel",
        image: "/images/grapas/MDF.jpg",
        specs: [
            "Perzonabilizable", 
            "Fácil instalación", 
            "Resistente al tiempo"
        ],
  },
  {
    id: 23,
    title: "Caballete",
    description: "Caballete Pequeño",
    image: "/images/grapas/caballetepe.jpg",
    specs: [
        "5.9inch 15cm de altura", 
        "Tablero de fibra de madera"
    ],
},
{
    id: 24,
    title: "Caballete",
    description: "Caballete Mediano",
    image: "/images/grapas/caballetemed.jpg",
    specs: [
        "20inch 50.8cm de altura", 
        "Tablero de madera"
    ],
},
{
    id: 25,
    title: "Caballete",
    description: "Caballete Grande",
    image: "/images/grapas/caballetegran.jpg",
    specs: [
        "59inch 150cm de altura", 
        "Tablero de madera"
    ],
},
{
    id: 26,
    title: "Cinta Doble Cara",
    description: "Cinta adhesiva doble cara ",
    image: "/images/grapas/cintadoblecara.jpg",
    specs: [
        "Rollo un 1320cm x 5000cm"
    ],
},
{
    id: 27,
    title: "Cinta Doble Cara",
    description: "Cinta adhesiva doble cara ",
    image: "/images/grapas/cintadoblecara.jpg",
    specs: [
        "Rollo un 635cm x 5000cm"
    ],
},
];

export default function Products() {
  return (
    <div className="products-page">
      <h1 className="page-title">Nuestros Productos</h1>

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
                    <h4>Presentaciones disponibles:</h4>
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
