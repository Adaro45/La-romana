"use client"

import { Link } from "react-router-dom"
import { lazy, Suspense, useEffect } from "react"
// import { LazyLoadImage } from "react-lazy-load-image-component"
import "./styles/HomePage.css"
import { detailsmolduras, placeholderTools as herramientas } from "../files"
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
        <div className="promo-florencia-banner">
          <div className="promo-florencia-content">
            <div className="promo-florencia-badge">¡OFERTA ESPECIAL!</div>
            <h3>Moldura Florencia 89</h3>
            <p className="promo-florencia-price">
              <span className="promo-price-highlight">$99 MXN</span>
              <span className="promo-price-detail">Medidas en Promoción</span>
            </p>
            <p className="promo-florencia-condition">*Solo contacto online</p>
            <div className="promo-florencia-actions">
              <a
                href="https://wa.me/525648210476?text=Hola, me interesa la promoción de Moldura Florencia 89 por $99 MXN "
                target="_blank"
                rel="noopener noreferrer"
                className="promo-btn whatsapp-btn"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                </svg>
                WhatsApp
              </a>
              <a
                href="mailto:romanacentro@yahoo.com?subject=Promoción Moldura Florencia&body=Hola, me interesa la promoción de Moldura Florencia por $99 MXN cualquier medida"
                className="promo-btn email-btn"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                Email
              </a>
            </div>
          </div>
          <div className="promo-florencia-images">
            <div className="promo-image-placeholder">
              <span><img src="images/promocion1.jpg" alt="promo" className="img-promocion" /></span>
            </div>
            <div className="promo-image-placeholder">
              <span><img src="images/promocion2.jpg" alt="promo" className="img-promocion" /></span>
            </div>
            <div className="promo-image-placeholder">
              <span><img src="images/promocion3.jpg" alt="promo" className="img-promocion" /></span>
            </div>
          </div>
        </div>
        <h1 className="hero-title">Materiales y Soluciones para el Laminado y Enmarcado</h1>

        <div className="cta-buttons">
          <Link to="/productos" className="btn-primary">
            Ver Catálogo
          </Link>
          <Link to="/contacto" className="btn-secondary">
            Contactar Asesor
          </Link>
        </div>
        <Link to="/promociones-rollos" className="btn-tertiary">
          Accede a Nuestras Promociones
        </Link>
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
