import { Link } from 'react-router-dom';
import ScrollAnimation from '../components/ScrollAnimation';
import '../styles/Tools.css';

// Lista de herramientas (puedes agregar más)
const placeholderTools = [
  {
    id: 1,
    title: "Laminadora en frío 350mm",
    description: 'Máquina Laminadora en Frío',
    image: '/images/herramientas/laminadora350.jpg',
    specs: ["Ancho máximo de laminación 350mm",
    ],
  },
  {
    id: 2,
    title: "Laminadora en frío 650mm",
    description: "Máquina Laminadora en Frío",
    image: '/images/herramientas/laminadora1000.jpg',
    specs: [
      "Ancho máximo de laminación 650mm",
    ],
  },
  {
    id: 3,
    title: "Laminadora en frío 750mm",
    description:"Máquina Laminadora en Frío",
    image: '/images/herramientas/laminadora650.jpg',
    specs: ["Ancho máximo de laminación 750mm"],
  },
  {
    id: 4,
    title: "Laminadora en frío 1000mm",
    description:"Máquina Laminadora en Frío",
    image: '/images/herramientas/laminadora1000.jpg',
    specs: ["Ancho máximo de laminación 10000mm"],
  },
  {
    id: 5,
    title: "Engrapadora",
    description: 'Pistola de unión neumática',
    image: '/images/herramientas/Vnailer.jpg',
    specs: ["Impulsa clavos en V de tamaño 7,10. 12,15mm",
            "Compacto: Con solo 2,5 kg"
    ],
  },
  {
    id: 6,
    title: "Engrapadora",
    description: 'V-nailer, marco de imagen neumático, Joiner.',
    image: '/images/herramientas/VnailerVerde.jpg',
    specs: ["Impulsa clavos en V de 7mm a 15mm",
      "Tiene capacidad para 200 piezas de clavos",
      "Solo 2,5 kg de peso"
    ],
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
    id: 22,
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
    id: 23,
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
    id: 24,
    title: "MDF",
    description: "Macocel",
    image: "/images/grapas/MDF.jpg",
    specs: ["Perzonabilizable", "Fácil instalación", "Resistente al tiempo"],
  },
  {
    id: 25,
    title: "Caballete",
    description: "Caballete Pequeño",
    image: "/images/grapas/caballetepe.jpg",
    specs: ["5.9inch 15cm de altura", "Tablero de fibra de madera"],
  },
  {
    id: 26,
    title: "Caballete",
    description: "Caballete Mediano",
    image: "/images/grapas/caballetemed.jpg",
    specs: ["20inch 50.8cm de altura", "Tablero de madera"],
  },
  {
    id: 27,
    title: "Caballete",
    description: "Caballete Grande",
    image: "/images/grapas/caballetegran.jpg",
    specs: ["59inch 150cm de altura", "Tablero de madera"],
  },
  {
    id: 28,
    title: "Cinta Adhesiva Doble Cara Más Adhesivo",
    description: "Cinta adhesiva doble cara ",
    image: "/images/grapas/cintadoblecara.jpg",
    specs: ["Rollo un 1320cm x 5000cm"],
  },
  {
    id: 29,
    title: "Cinta Adhesiva Doble Cara Más Adhesivo",
    description: "Cinta adhesiva doble cara ",
    image: "/images/grapas/cintadoblecara.jpg",
    specs: ["Rollo un 635cm x 5000cm"],
  },
];

export default function Tools() {
  return (
    <div className="tools-page">
      <h1 className="page-title">Nuestras Herramientas</h1>

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
