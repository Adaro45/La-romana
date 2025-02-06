import { Link } from 'react-router-dom';
import ScrollAnimation from '../components/ScrollAnimation';
import '../styles/HomePage.css';

export default function HomePage() {
  return (
    <div className="home-container">
      <section className="hero">
      <img 
              src="/images/log.png" 
              alt="Romana Centro" 
              className="logo-image-contact"
            />
        <h1>Materiales y Soluciones para el Laminado y Enmarque</h1>
        <div className="cta-buttons">
          <Link to="/productos" className="btn-primary">Ver Catálogo</Link>
          <Link to="/contacto" className="btn-secondary">Contactar Asesor</Link>
        </div>
      </section>

      <ScrollAnimation>
        <section className="features">
          <h2>¿Qué Ofrecemos?</h2>
          <div className="feature-grid">
            {[
              { 
                title: 'Maquinaria',
                description: 'Equipos profesionales para laminado y enmarque',
                link: '/herramientas'
              },
              { 
                title: 'Insumos',
                description: 'Materiales especializados de alta calidad',
                link: '/productos?category=insumos'
              },
              { 
                title: 'Productos Terminados',
                description: 'Contacte con nuestros asesores para ver el catálogo disponible',
                link: '/contacto'
              }
            ].map((item) => (
              <Link to={item.link} key={item.title} className="feature-card">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </Link>
            ))}
          </div>
        </section>
      </ScrollAnimation>
    </div>
  );
}