import ScrollAnimation from '../components/ScrollAnimation';
import '../styles/Products.css';

const placeholderProducts = [...Array(6)].map((_, i) => ({
  id: i,
  title: `Producto ${i + 1}`,
  description: 'Descripción breve del producto...',
  image: '/images/placeholder-product.jpg'
}));

export default function Products() {
  return (
    <div className="products-container">
      <h1>Nuestros Productos</h1>
      <div className="products-grid">
        {placeholderProducts.map((product) => (
          <ScrollAnimation key={product.id}>
            <div className="product-card">
              <img src={product.image} alt={product.title} />
              <h3>{product.title}</h3>
              <p>{product.description}</p>
              <div className="dev-notice">Próximamente más detalles</div>
            </div>
          </ScrollAnimation>
        ))}
      </div>
    </div>
  );
}