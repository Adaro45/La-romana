import { Link } from 'react-router-dom';
import './styles/HomePage.css';
import {detailsmolduras, placeholderTools as herramientas, terminados } from "../files";
import ScrollAnimation from "../components/ScrollAnimation";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { lazy, Suspense } from 'react';
const SlideShowSection = lazy(() => import("../components/SlideShowSection"));
export default function HomePage() {
  return (
    <div className="home-container">
      <section className="hero">
        <LazyLoadImage
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
        <ScrollAnimation>
          <h2>Descubre Nuestro Catálogo</h2>
          <Suspense fallback={<div className="loading-slides">Cargando...</div>}>
          {/* Slide para Molduras (Insumos) */}
          <SlideShowSection
            category="Molduras"
            items={detailsmolduras}
            description="Explora nuestra amplia selección de molduras de alta calidad para enmarcados."
            buttonLabel="Ver Molduras"
            buttonLink="/productos/molduras"
            reverse={false}
          />
          </Suspense>
          {/* Slide para Herramientas (Maquinaria) */}
          <Suspense fallback={<div className="loading-slides">Cargando...</div>}>
          <SlideShowSection
            category="Herramientas"
            items={herramientas}
            description="Conoce nuestra maquinaria especializada para laminado y enmarcado."
            buttonLabel="Ver Herramientas"
            buttonLink="/productos/herramientas"
            reverse={true}
          />
          </Suspense>

          {/* Slide para Productos Terminados */}
          <Suspense fallback={<div className="loading-slides">Cargando...</div>}>

          <SlideShowSection
            category="Productos Terminados"
            items={terminados}
            description="Descubre nuestros productos terminados, listos para embellecer tus espacios."
            buttonLabel="Ver Productos Terminados"
            buttonLink="/productos/terminados"
            reverse={false}
          />
          </Suspense>
          
        </ScrollAnimation>
        </section>
    </div>
  );
}