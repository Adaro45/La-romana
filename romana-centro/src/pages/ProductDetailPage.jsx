// import React from "react";
// import { useParams, Link } from "react-router-dom";
// import "./styles/ProductDetailPage.css";

// // Importamos o accedemos a la misma lista de productos
// import { placeholderTools } from "../files"; // Ejemplo: un archivo donde exportas tu array
// export default function ProductDetailPage() {
//   const { id } = useParams(); // ID de la URL
//   // Buscamos el producto con el ID correspondiente
//   const product = products.find((p) => p.id === parseInt(id));

//   if (!product) {
//     return (
//       <div className="product-detail-page">
//         <h2>Producto no encontrado</h2>
//         <Link to="/productos">Volver a productos</Link>
//       </div>
//     );
//   }

//   return (
//     <div className="product-detail-page">
//       <div className="product-images">
//         {/* Imagen principal */}
//         <img src={product.image} alt={product.title} className="main-image" />

//         {/* Si tuvieras varias imágenes, podrías mostrarlas en miniatura */}
//         {/* product.images?.map(...) */}
//       </div>

//       <div className="product-info">
//         <h1>{product.title}</h1>
//         <p className="description">{product.description}</p>

//         {product.specs && (
//           <div className="product-specs">
//             <h4>Detalles del producto:</h4>
//             <ul>
//               {product.specs.map((spec, index) => (
//                 <li key={index}>{spec}</li>
//               ))}
//             </ul>
//           </div>
//         )}

//         <div className="product-actions">
//           {/* Botones para comprar, contactar, etc. */}
//           <Link to="/contacto" className="buy-button">
//             Consultar opciones
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }
