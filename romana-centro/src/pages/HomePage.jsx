import { Link } from 'react-router-dom';
import ScrollAnimation from '../components/ScrollAnimation';
import './styles/HomePage.css';
import SlideShowSection from "../components/SlideShowSection";
import {products as molduras,detailsmolduras, placeholderTools as herramientas, terminados } from "../files";

export default function HomePage() {
  return (
    <div className="home-container">
      <section className="hero">
      <img 
              src="/images/log.png" 
              alt="Romana Centro" 
              className="logo-image-contact"
            />
            <h2 >"Tu aliado en el arte de enmarcar"</h2>
          <h1>Materiales y Soluciones para el Laminado y Enmarcado</h1>
        <div className="cta-buttons">
          <Link to="/productos" className="btn-primary">Ver Catálogo</Link>
          <Link to="/contacto" className="btn-secondary">Contactar Asesor</Link>
        </div>
      </section>

      <section className="features">
          <h2>Descubre Nuestro Catálogo</h2>
          {/* Slide para Molduras (Insumos) */}
          <SlideShowSection
            category="Molduras"
            items={detailsmolduras}
            description="Explora nuestra amplia selección de molduras de alta calidad para enmarcados."
            buttonLabel="Ver Molduras"
            buttonLink="/productos/molduras"
            reverse={false}
          />
          {/* Slide para Herramientas (Maquinaria) */}
          <SlideShowSection
            category="Herramientas"
            items={herramientas}
            description="Conoce nuestra maquinaria especializada para laminado y enmarcado."
            buttonLabel="Ver Herramientas"
            buttonLink="/productos/herramientas"
            reverse={true}
          />
          {/* Slide para Productos Terminados */}
          <SlideShowSection
            category="Productos Terminados"
            items={terminados}
            description="Descubre nuestros productos terminados, listos para embellecer tus espacios."
            buttonLabel="Ver Productos Terminados"
            buttonLink="/productos/terminados"
            reverse={false}
          />
        </section>
    </div>
  );
}