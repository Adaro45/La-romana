"use client"

import { Link } from "react-router-dom"
import { lazy, Suspense, useEffect } from "react"
// import { LazyLoadImage } from "react-lazy-load-image-component"
import "./styles/HomePage.css"
import { detailsmolduras, placeholderTools as herramientas} from "../files"
import ScrollAnimation from "../components/ScrollAnimation"

const SlideShowSection = lazy(() => import("../components/SlideShowSection"))

export default function HomePage() {
  // Efecto para animación de entrada
  useEffect(() => {
    const heroElements = document.querySelectorAll(".hero > *")
    heroElements.forEach((el, index) => {
      setTimeout(() => {
        el.classList.add("fade-in")
      }, 200 * index)
    })
  }, [])

  return (
    <div className="home-container">
      <section className="hero">
        <img
          src="./images/log.png"
          alt="Romana Centro"
          className="logo-image-hero"
          effect="blur"
          width="300"
          height="150"
        />

        <h2 className="hero-subtitle">"Tu aliado en el arte de enmarcar"</h2>
        <h1 className="hero-title">Materiales y Soluciones para el Laminado y Enmarcado</h1>
        <div className="cta-buttons">
          <Link to="/productos" className="btn-primary">
            Ver Catálogo
          </Link>
          <Link to="/contacto" className="btn-secondary">
            Contactar Asesor
          </Link>
        </div>
      </section>

      <section className="features">
        <ScrollAnimation>
          <h2>Descubre Nuestro Catálogo</h2>

          {/* Nueva sección de características */}
          <div className="features-cards">
            <div className="feature-card">
              <div className="feature-icon">
                <img src="/icons/check.png" alt="Atención" className="features-icons" />
              </div>
              <h3>Calidad Premium</h3>
              <p>Materiales seleccionados con los más altos estándares de calidad para tus proyectos.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <img src="/icons/national.png" alt="Calidad" className="features-icons" />
              </div>
              <h3>Apoyo en la Entrega</h3>
              <p>Ayudamos a que tus productos lleguen a su destino.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <img src="/icons/support.png" alt="Envíos" className="features-icons" />
              </div>
              <h3>Asesoría Especializada</h3>
              <p>Equipo de expertos disponible para guiarte en la selección de productos ideales.</p>
            </div>
          </div>

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
        </ScrollAnimation>
      </section>

      <section className="testimonials">
        <div className="container">
          <h2 className="section-title">Lo que dicen nuestros clientes</h2>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>
                  "Romana Centro ha sido nuestro proveedor de confianza por más de 5 años. La calidad de sus molduras es
                  incomparable."
                </p>
              </div>
              <div className="testimonial-author">
                <div className="testimonial-avatar">
                  <span>MG</span>
                </div>
                <div className="testimonial-info">
                  <h4>Miguel González</h4>
                  <p>Taller de Enmarcado Artístico</p>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>
                  "El servicio de asesoría personalizada me ayudó a elegir los materiales perfectos para mi galería.
                  ¡Totalmente recomendado!"
                </p>
              </div>
              <div className="testimonial-author">
                <div className="testimonial-avatar">
                  <span>LR</span>
                </div>
                <div className="testimonial-info">
                  <h4>Laura Ramírez</h4>
                  <p>Galería de Arte Contemporáneo</p>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>
                  "Las herramientas que adquirí en Romana Centro han mejorado significativamente la eficiencia de mi
                  negocio."
                </p>
              </div>
              <div className="testimonial-author">
                <div className="testimonial-avatar">
                  <span>JV</span>
                </div>
                <div className="testimonial-info">
                  <h4>Javier Vázquez</h4>
                  <p>Estudio Fotográfico</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nueva sección de llamada a la acción */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>¿Listo para transformar tus proyectos?</h2>
            <p>Descubre nuestra amplia gama de productos y servicios diseñados para profesionales del enmarcado.</p>
            <div className="cta-buttons">
              <Link to="/productos" className="btn-primary">
                Explorar Productos
              </Link>
              <Link to="/contacto" className="btn-secondary">
                Contactar Ahora
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

