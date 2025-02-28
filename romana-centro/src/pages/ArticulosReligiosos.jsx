import { Link } from "react-router-dom";
import ScrollAnimation from "../components/ScrollAnimation";
import "../styles/Products.css";

const products = [
  {
    id: 1,
    title: "Virgen de Guadalupe",
    description: "Virgen maternal, consuelo y fe en México.",
    image: "/images/terminados/1.JPG",
    specs: [
      "Molduras ornamentadas  con elegante detalle.",
      "Dimensiones: 7 x 16 cm",
      "Corte con láser.",
      "Materiales premium",
    ],
  },
  {
    id: 2,
    title: "La última cena",
    description: "Comida final, preludio de redención y comunión.",
    image: "/images/terminados/2.JPG",
    specs: [
      "Marco de Venecia oro.",
      "Dimensiones: 25 x 35.5 cm",
      "Personalización disponible",
      "Materiales premium",
    ],
  },
  {
    id: 3,
    title: "Virgen de Guadalupe",
    description: "Virgen Sagrado Corazón.",
    image: "/images/terminados/3.JPG",
    specs: [
      "Marco de Venecia oro.",
      "Dimensiones: 25 x 35.5 cm",
      "Personalización disponible",
      "Materiales premium",
    ],
  },
  {
    id: 4,
    title: "La Sagrada Familia",
    description: "Familia divina, unión y amor sagrado eterno..",
    image: "/images/terminados/4.JPG",
    specs: [
      "Marco de Venecia oro.",
      "Dimensiones: 25 x 35.5 cm",
      "Personalización disponible",
      "Materiales premium",
    ],
  },
  {
    id: 5,
    title: "María y Jesús",
    description: "Amor maternal y divino en tierno encuentro.",
    image: "/images/terminados/5.JPG",
    specs: [
      "Marco de Venecia oro.",
      "Dimensiones: 25 x 35.5 cm",
      "Personalización disponible",
      "Materiales premium",
    ],
  },
  {
    id: 6,
    title: "Virgen de Guadalupe",
    description: "Encarnación de fe y esperanza mexicana",
    image: "/images/terminados/6.JPG",
    specs: [
      "Molduras ornamentadas con elegante detalle.",
      "Dimensiones: 7 x 16 cm",
      "Corte con láser.",
      "Materiales premium",
    ],
  },
  {
    id: 7,
    title: "El milagro de Jesucristo",
    description: "Milagro que inspira fe y asombro divino.",
    image: "/images/terminados/7.JPG",
    specs: [
      "Moldura de Milán Plata con acetato plateado.",
      "Tamaños estándar",
      "Personalización disponible",
      "Materiales premium",
    ],
  },
  {
    id: 1,
    title: "Cuadro grande con detalles exquisitos y acabado elegante.",
    // type: "Grandes",
    description: "Cuadro grande con detalles exquisitos y acabado elegante.",
    specs: ["Cuadro grande con detalles exquisitos y acabado elegante."],
    image: "/images/Grandes/1.webp",
  },
  {
    id: 2,
    title: "Marco grande, ornamentado con molduras de lujo.",
    // type: "Grandes",
    description: "Marco grande, ornamentado con molduras de lujo.",
    specs: ["Marco grande, ornamentado con molduras de lujo."],
    image: "/images/Grandes/2.webp",
  },
  {
    id: 3,
    title: "Diseño elegante en moldura grande, perfecto para obras de arte.",
    // type: "Grandes",
    description:
      "Diseño elegante en moldura grande, perfecto para obras de arte.",
    specs: ["Diseño elegante en moldura grande, perfecto para obras de arte."],
    image: "/images/Grandes/3.webp",
  },
  {
    id: 4,
    title: "Marco de gran tamaño con acabado refinado y detalles elaborados.",
    // type: "Grandes",
    description:
      "Marco de gran tamaño con acabado refinado y detalles elaborados.",
    specs: ["Marco de gran tamaño con acabado refinado y detalles elaborados."],
    image: "/images/Grandes/4.webp",
  },
  {
    id: 5,
    title: "Cuadro grande, estilo clásico con toques modernos.",
    // type: "Grandes",
    description: "Cuadro grande, estilo clásico con toques modernos.",
    specs: ["Cuadro grande, estilo clásico con toques modernos."],
    image: "/images/Grandes/5.webp",
  },
  {
    id: 6,
    title: "Detalle elegante en marco grande, ideal para piezas destacadas.",
    // type: "Grandes",
    description:
      "Detalle elegante en marco grande, ideal para piezas destacadas.",
    specs: ["Detalle elegante en marco grande, ideal para piezas destacadas."],
    image: "/images/Grandes/6.webp",
  },
  {
    id: 7,
    title: "Acabado elegante en moldura grande, resalta la belleza de la obra.",
    // type: "Grandes",
    description:
      "Acabado elegante en moldura grande, resalta la belleza de la obra.",
    specs: [
      "Acabado elegante en moldura grande, resalta la belleza de la obra.",
    ],
    image: "/images/Grandes/7.webp",
  },
  {
    id: 8,
    title: "Cuadro grande con gran detalle y un toque de modernidad.",
    // type: "Grandes",
    description: "Cuadro grande con gran detalle y un toque de modernidad.",
    specs: ["Cuadro grande con gran detalle y un toque de modernidad."],
    image: "/images/Grandes/8.webp",
  },
  {
    id: 9,
    title: "Cuadro mediana con detalles elegantes y acabado refinado.",
    // type: "Medianos",
    description: "Cuadro mediana con detalles elegantes y acabado refinado.",
    specs: ["Cuadro mediana con detalles elegantes y acabado refinado."],
    image: "/images/Medianos/1.webp",
  },
  {
    id: 10,
    title: "Marco mediano, diseño sofisticado para realzar cualquier obra.",
    // type: "Medianos",
    description:
      "Marco mediano, diseño sofisticado para realzar cualquier obra.",
    specs: ["Marco mediano, diseño sofisticado para realzar cualquier obra."],
    image: "/images/Medianos/2.webp",
  },
  {
    id: 11,
    title: "Cuadro mediana, combinando tradición y modernidad.",
    // type: "Medianos",
    description: "Cuadro mediana, combinando tradición y modernidad.",
    specs: ["Cuadro mediana, combinando tradición y modernidad."],
    image: "/images/Medianos/3.webp",
  },
  {
    id: 12,
    title: "Detalle sutil en moldura mediana, con acabado elegante.",
    // type: "Medianos",
    description: "Detalle sutil en moldura mediana, con acabado elegante.",
    specs: ["Detalle sutil en moldura mediana, con acabado elegante."],
    image: "/images/Medianos/4.webp",
  },
  {
    id: 13,
    title: "Marco mediano con un diseño pulido y sofisticado.",
    // type: "Medianos",
    description: "Marco mediano con un diseño pulido y sofisticado.",
    specs: ["Marco mediano con un diseño pulido y sofisticado."],
    image: "/images/Medianos/5.webp",
  },
  {
    id: 14,
    title: "Cuadro mediana, estilo contemporáneo y elegante.",
    // type: "Medianos",
    description: "Cuadro mediana, estilo contemporáneo y elegante.",
    specs: ["Cuadro mediana, estilo contemporáneo y elegante."],
    image: "/images/Medianos/6.webp",
  },
  {
    id: 15,
    title: "Detalle ornamental en marco mediano, acabado de alta calidad.",
    // type: "Medianos",
    description:
      "Detalle ornamental en marco mediano, acabado de alta calidad.",
    specs: ["Detalle ornamental en marco mediano, acabado de alta calidad."],
    image: "/images/Medianos/7.webp",
  },
  {
    id: 16,
    title: "Diseño elegante en moldura mediana, con gran precisión.",
    // type: "Medianos",
    description: "Diseño elegante en moldura mediana, con gran precisión.",
    specs: ["Diseño elegante en moldura mediana, con gran precisión."],
    image: "/images/Medianos/8.webp",
  },
  {
    id: 17,
    title: "Marco mediano, perfecto para realzar la belleza de la obra.",
    // type: "Medianos",
    description: "Marco mediano, perfecto para realzar la belleza de la obra.",
    specs: ["Marco mediano, perfecto para realzar la belleza de la obra."],
    image: "/images/Medianos/9.webp",
  },
  {
    id: 18,
    title: "Cuadro mediana con un acabado impecable y detalles sutiles.",
    // type: "Medianos",
    description: "Cuadro mediana con un acabado impecable y detalles sutiles.",
    specs: ["Cuadro mediana con un acabado impecable y detalles sutiles."],
    image: "/images/Medianos/10.webp",
  },
  {
    id: 19,
    title: "Cuadro pequeña, con diseño elegante y moderno.",
    // type: "Pequeños",
    description: "Cuadro pequeña, con diseño elegante y moderno.",
    specs: ["Cuadro pequeña, con diseño elegante y moderno."],
    image: "/images/Pequeños/1.webp",
  },
  {
    id: 20,
    title: "Marco pequeño, detalles exquisitos en acabado dorado.",
    // type: "Pequeños",
    description: "Marco pequeño, detalles exquisitos en acabado dorado.",
    specs: ["Marco pequeño, detalles exquisitos en acabado dorado."],
    image: "/images/Pequeños/2.webp",
  },
  {
    id: 21,
    title: "Cuadro pequeña, perfecta para obras de arte íntimas.",
    // type: "Pequeños",
    description: "Cuadro pequeña, perfecta para obras de arte íntimas.",
    specs: ["Cuadro pequeña, perfecta para obras de arte íntimas."],
    image: "/images/Pequeños/3.webp",
  },
  {
    id: 22,
    title: "Diseño moderno en moldura pequeña, con acabados de alta calidad.",
    // type: "Pequeños",
    description:
      "Diseño moderno en moldura pequeña, con acabados de alta calidad.",
    specs: ["Diseño moderno en moldura pequeña, con acabados de alta calidad."],
    image: "/images/Pequeños/4.webp",
  },
  {
    id: 23,
    title: "Marco pequeño, estilo elegante y sofisticado.",
    // type: "Pequeños",
    description: "Marco pequeño, estilo elegante y sofisticado.",
    specs: ["Marco pequeño, estilo elegante y sofisticado."],
    image: "/images/Pequeños/5.webp",
  },
  {
    id: 24,
    title: "Cuadro pequeña con acabado dorado, realza la decoración.",
    // type: "Pequeños",
    description: "Cuadro pequeña con acabado dorado, realza la decoración.",
    specs: ["Cuadro pequeña con acabado dorado, realza la decoración."],
    image: "/images/Pequeños/6.webp",
  },
  {
    id: 25,
    title: "Detalle elegante en moldura pequeña, con un toque moderno.",
    // type: "Pequeños",
    description: "Detalle elegante en moldura pequeña, con un toque moderno.",
    specs: ["Detalle elegante en moldura pequeña, con un toque moderno."],
    image: "/images/Pequeños/7.webp",
  },
  {
    id: 26,
    title: "Marco pequeño, acabado refinado y detalle ornamental.",
    // type: "Pequeños",
    description: "Marco pequeño, acabado refinado y detalle ornamental.",
    specs: ["Marco pequeño, acabado refinado y detalle ornamental."],
    image: "/images/Pequeños/8.webp",
  },
  {
    id: 27,
    title: "Cuadro pequeña, diseño minimalista y elegante.",
    // type: "Pequeños",
    description: "Cuadro pequeña, diseño minimalista y elegante.",
    specs: ["Cuadro pequeña, diseño minimalista y elegante."],
    image: "/images/Pequeños/9.webp",
  },
  {
    id: 28,
    title: "Detalle sutil en marco pequeño, con acabado dorado.",
    // type: "Pequeños",
    description: "Detalle sutil en marco pequeño, con acabado dorado.",
    specs: ["Detalle sutil en marco pequeño, con acabado dorado."],
    image: "/images/Pequeños/10.webp",
  },
  {
    id: 29,
    title: "Cuadro pequeña con diseño exclusivo y elegante.",
    // type: "Pequeños",
    description: "Cuadro pequeña con diseño exclusivo y elegante.",
    specs: ["Cuadro pequeña con diseño exclusivo y elegante."],
    image: "/images/Pequeños/11.webp",
  },
  {
    id: 30,
    title: "Marco pequeño, detalles modernos y sofisticados.",
    // type: "Pequeños",
    description: "Marco pequeño, detalles modernos y sofisticados.",
    specs: ["Marco pequeño, detalles modernos y sofisticados."],
    image: "/images/Pequeños/12.webp",
  },
  {
    id: 31,
    title: "Cuadro pequeña, perfecta para piezas de arte delicadas.",
    // type: "Pequeños",
    description: "Cuadro pequeña, perfecta para piezas de arte delicadas.",
    specs: ["Cuadro pequeña, perfecta para piezas de arte delicadas."],
    image: "/images/Pequeños/13.webp",
  },
  {
    id: 32,
    title: "Detalle ornamental en moldura pequeña, con acabado de lujo.",
    // type: "Pequeños",
    description: "Detalle ornamental en moldura pequeña, con acabado de lujo.",
    specs: ["Detalle ornamental en moldura pequeña, con acabado de lujo."],
    image: "/images/Pequeños/14.webp",
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