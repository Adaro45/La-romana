// src/pages/AboutUs.jsx
import React from "react";
import "./styles/AboutUs.css";

const AboutUs = () => {
  return (
    <div className="aboutus-page">
      <header className="aboutus-header">
        <h1>Acerca de Nosotros</h1>
      </header>
      <section className="aboutus-content">
        <p>
          En <strong>Romana Centro</strong> somos líderes en la distribución de
          materiales y maquinaria para laminado y enmarcado, dedicados a brindar
          soluciones integrales a talleres artísticos y profesionales del sector
          fotográfico en México. Con más de 30 años de experiencia, nos enorgullece
          ofrecer productos de alta calidad que combinan tradición y tecnología.
        </p>
        <p>
          Nuestra misión es transformar espacios y realzar obras de arte a través del
          enmarcado profesional. Nos esforzamos por proporcionar un servicio
          personalizado, asesorando a nuestros clientes para que encuentren la solución
          perfecta que complemente sus proyectos creativos.
        </p>
        <p>
          En Romana Centro valoramos la integridad, la innovación y la excelencia.
          Creemos que cada obra merece un marco que la proteja y la destaque. Por ello,
          trabajamos con materiales de vanguardia y equipos de última generación para
          satisfacer las necesidades de una industria en constante evolución.
        </p>
        <p>
          Visítenos en nuestro local en Ciudad de México o contáctenos para más
          información. Estamos aquí para transformar su visión en realidad.
        </p>
      </section>
      <footer className="aboutus-footer">
        <p>&copy; {new Date().getFullYear()} Romana Centro. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

export default AboutUs;
