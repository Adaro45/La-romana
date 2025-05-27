"use client"

import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { useCart } from "../context/CartContext"
import emailjs from "@emailjs/browser"
import "./styles/PromocionesRollos.css"
import Cart from "../components/Cart"
import ScrollAnimation from "../components/ScrollAnimation"
const QRCode = typeof window !== "undefined" ? require("react-qr-code").default : null

export default function PromocionesRollos() {
  const { addToCart } = useCart()
  const [copied, setCopied] = useState(false)
  const [activeTab, setActiveTab] = useState("ofertas")
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })
  const [formData, setFormData] = useState({
    nombre: "",
    telefono: "",
    email: "",
    interes: "",
    mensaje: "",
  })
  const [formStatus, setFormStatus] = useState({
    submitting: false,
    success: false,
    error: false,
    message: "",
  })

  const currentUrl = window.location.href

  const rollosProductos = [
    {
      id: 17,
      title: "Rollo de Textura Piel",
      description: "Rollo de Textura Piel Más Adhesivo",
      image: "/images/herramientas/txt-ejemplo.png",
      specs: ["Rollo un 25'x40m"],
      Precio_unidad: 1300,
      precioOferta: 1100,
      CantXcaja: 1,
      details: {
        zoom: "/images/detalles/piel.webp",
        zoom_detalle: "/images/detalles/pieldetalle.webp",
      },
    },
    {
      id: 18,
      title: "Rollo de Textura Lino Fino",
      description: "Rollo de Textura Lino Fino Más Adhesivo",
      image: "/images/herramientas/txt-ejemplo.png",
      specs: ["Rollo un 25'x40m"],
      Precio_unidad: 1300,
      precioOferta: 1100,
      CantXcaja: 1,
      details: {
        zoom: "/images/detalles/linofino.webp",
        zoom_detalle: "/images/detalles/linofinodetalle.webp",
      },
    },
    {
      id: 19,
      title: "Rollo de Textura Santex",
      description: "Rollo de Textura Santex Más Adhesivo",
      image: "/images/herramientas/txt-ejemplo.png",
      specs: ["Rollo un 25'x40m"],
      Precio_unidad: 1300,
      precioOferta: 1100, 
      CantXcaja: 1,
      details: {
        zoom: "/images/detalles/santex.JPG",
        zoom_detalle: "/images/detalles/santexdetalle.webp",
      },
    },
    {
      id: 20,
      title: "Rollo de Textura Canvas",
      description: "Rollo de Textura Canvas Más Adhesivo",
      image: "/images/herramientas/txt-ejemplo.png",
      specs: ["Rollo un 25'x40m"],
      Precio_unidad: 1300,
      precioOferta: 1100, 
      CantXcaja: 1,
      details: {
        zoom: "/images/detalles/canvas.webp",
        zoom_detalle: "/images/detalles/canvasdetalle.webp",
      },
    },
       {
      id: 15,
      title: "Cinta Adhesiva Doble Cara",
      description: "Cinta adhesiva doble cara",
      image: "/images/grapas/cintadoblecara.png",
      specs: ["Rollo un 25'x40m"],
      Precio_unidad: 2600,
      precioOferta: 2400,
      CantXcaja: 1,
      details: {
        zoom: "/images/grapas/cintadoblecara.png",
        zoom_detalle: "/images/detalles/adehesivodetalle.webp",
      },
    },
    {
      id: 16,
      title: "Cinta Adhesiva Doble Cara",
      description: "Cinta adhesiva doble cara",
      image: "/images/grapas/cintadoblecara.png",
      specs: ["Rollo un 50'x40m"],
      Precio_unidad: 1300,
      precioOferta: 1100, 
      CantXcaja: 1,
      details: {
        zoom: "/images/grapas/cintadoblecara.png",
        zoom_detalle: "/images/detalles/adehesivodetalle.webp",
      },
    },
  ]

  // Paquetes promocionales
  const paquetesPromocionales = [
    {
      id: "pack1",
      title: "Pack Texturas Premium",
      description: "Incluye 1 rollo de Textura Piel y 1 rollo de Textura Canvas",
      image: "/images/herramientas/txt-ejemplo.png",
      productos: [rollosProductos[0], rollosProductos[3]],
      precioRegular: 4800,
      precioOferta: 4400, // 15% descuento
    },
    {
      id: "pack2",
      title: "Pack Texturas Clásicas",
      description: "Incluye 1 rollo de Textura Lino Fino y 1 rollo de Textura Santex",
      image: "/images/herramientas/txt-ejemplo.png",
      productos: [rollosProductos[1], rollosProductos[2]],
      precioRegular: 4800,
      precioOferta: 4400, // 15% descuento
    },
    {
      id: "pack4",
      title: "Pack Completo",
      description: "Incluye 1 rollo de Textura a elección y 1 Cinta Adhesiva Doble Cara",
      image: "/images/grapas/cintadoblecara.png",
      productos: [rollosProductos[0], rollosProductos[6]],
      precioRegular: 4800,
      precioOferta: 4400, // 20% descuento
    },
    {
      id: "pack5",
      title: "Pack Profesional",
      description: "Incluye 2 rollos de Textura a elección con 25% de descuento",
      image: "/images/herramientas/txt-ejemplo.png",
      customPack: true,
      precioRegular: 4800,
      precioOferta: 4400, // 25% descuento
    },
  ]

  // Actualizar el contador de tiempo
  useEffect(() => {
    // Fecha final de la promoción (30 días a partir de ahora)
    const endDate = new Date()
    endDate.setDate(endDate.getDate() + 30)

    const timer = setInterval(() => {
      const now = new Date()
      const difference = endDate - now

      const days = Math.floor(difference / (1000 * 60 * 60 * 24))
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((difference % (1000 * 60)) / 1000)

      setCountdown({ days, hours, minutes, seconds })

      if (difference < 0) {
        clearInterval(timer)
        setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  // Inicializar EmailJS
  useEffect(() => {
    // Inicializar EmailJS con tu User ID
    // Nota: Deberías reemplazar 'YOUR_USER_ID' con tu ID real de EmailJS
    emailjs.init("YOUR_USER_ID")
  }, [])

  // Manejar la copia de URL
  const handleCopyUrl = () => {
    navigator.clipboard.writeText(currentUrl)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  // Agregar producto al carrito
  const handleAddToCart = (product) => {
    addToCart(product)
  }

  // Agregar paquete al carrito
  const handleAddPackToCart = (pack) => {
    if (pack.customPack) {
      // Lógica para paquetes personalizados se implementaría aquí
      alert("Por favor, contacta con un asesor para configurar tu Pack Profesional personalizado.")
    } else {
      // Agregar cada producto del paquete al carrito
      pack.productos.forEach((product) => {
        addToCart(product)
      })
    }
  }

  // Manejar cambios en el formulario
  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  // Manejar envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault()

    // Quitar el foco del elemento activo para cerrar el teclado en móviles
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur()
    }

    setFormStatus({ ...formStatus, submitting: true, error: false, success: false })

    try {
      // Preparar el template con los datos del formulario
      const templateParams = {
        to_email: "romanacentro@yahoo.com",
        from_name: formData.nombre,
        from_email: formData.email,
        telefono: formData.telefono,
        interes: formData.interes,
        mensaje: formData.mensaje,
        reply_to: formData.email,
      }

      // Enviar el correo usando EmailJS
      // Nota: Deberías reemplazar 'YOUR_SERVICE_ID' y 'YOUR_TEMPLATE_ID' con tus IDs reales
      await emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", templateParams)

      // Actualizar estado para mostrar mensaje de éxito
      setFormStatus({
        submitting: false,
        success: true,
        error: false,
        message: "¡Mensaje enviado con éxito! Nos pondremos en contacto contigo pronto.",
      })

      // Limpiar el formulario
      setFormData({
        nombre: "",
        telefono: "",
        email: "",
        interes: "",
        mensaje: "",
      })

      // Hacer scroll al mensaje de éxito
      setTimeout(() => {
        const successMessage = document.querySelector(".form-success-message")
        if (successMessage) {
          successMessage.scrollIntoView({ behavior: "smooth", block: "center" })
        }
      }, 100)

      // Ocultar el mensaje de éxito después de 5 segundos
      setTimeout(() => {
        setFormStatus((prev) => ({ ...prev, success: false, message: "" }))
      }, 5000)
    } catch (error) {
      console.error("Error al enviar el correo:", error)
      setFormStatus({
        submitting: false,
        success: false,
        error: true,
        message: "Hubo un problema al enviar tu mensaje. Por favor, intenta nuevamente.",
      })

      // Hacer scroll al mensaje de error
      setTimeout(() => {
        const errorMessage = document.querySelector(".form-error-message")
        if (errorMessage) {
          errorMessage.scrollIntoView({ behavior: "smooth", block: "center" })
        }
      }, 100)
    }
  }

  return (
    <div className="promociones-rollos-page">
      <Cart />

      <div className="promociones-header">
        <h1>Promociones Especiales en Rollos de Textura</h1>
        <div className="promociones-countdown">
          <p>Estas ofertas terminan en:</p>
          <div className="countdown-timer">
            <div className="countdown-item">
              <span className="countdown-value">{countdown.days}</span>
              <span className="countdown-label">Días</span>
            </div>
            <div className="countdown-item">
              <span className="countdown-value">{countdown.hours}</span>
              <span className="countdown-label">Horas</span>
            </div>
            <div className="countdown-item">
              <span className="countdown-value">{countdown.minutes}</span>
              <span className="countdown-label">Min</span>
            </div>
            <div className="countdown-item">
              <span className="countdown-value">{countdown.seconds}</span>
              <span className="countdown-label">Seg</span>
            </div>
          </div>
        </div>
      </div>

      <div className="promociones-tabs">
        <button
          className={`tab-button ${activeTab === "ofertas" ? "active" : ""}`}
          onClick={() => setActiveTab("ofertas")}
        >
          Ofertas Individuales
        </button>
        <button
          className={`tab-button ${activeTab === "paquetes" ? "active" : ""}`}
          onClick={() => setActiveTab("paquetes")}
        >
          Paquetes Promocionales
        </button>
        <button
          className={`tab-button ${activeTab === "contacto" ? "active" : ""}`}
          onClick={() => setActiveTab("contacto")}
        >
          Contacto Rápido
        </button>
      </div>

      <div className="promociones-content">
        {activeTab === "ofertas" && (
          <div className="ofertas-grid">
            {rollosProductos.map((producto) => (
              <ScrollAnimation key={producto.id}>
                <div className="oferta-card">
                  <div className="oferta-badge">¡OFERTA!</div>
                  <div className="oferta-image">
                    <img src={producto.image || "/placeholder.svg"} alt={producto.title} as="image"/>
                  </div>
                  <div className="oferta-content">
                    <h3>{producto.title}</h3>
                    <p>{producto.description}</p>
                    <ul className="oferta-specs">
                      {producto.specs.map((spec, index) => (
                        <li key={index}>{spec}</li>
                      ))}
                    </ul>
                    <div className="oferta-prices">
                      <span className="price-regular">${producto.Precio_unidad}</span>
                      <span className="price-offer">${producto.precioOferta}</span>
                    </div>
                    <div className="oferta-actions">
                      <button
                        className="btn-add-to-cart"
                        onClick={() => handleAddToCart(producto)}
                        aria-label={`Agregar ${producto.title} al carrito`}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <circle cx="9" cy="21" r="1"></circle>
                          <circle cx="20" cy="21" r="1"></circle>
                          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                        </svg>
                        Agregar al Carrito
                      </button>
                      <Link to={`/producto/${producto.id}`} className="btn-view-details">
                        Ver Detalles
                      </Link>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        )}

        {activeTab === "paquetes" && (
          <div className="paquetes-grid">
            {paquetesPromocionales.map((paquete) => (
              <ScrollAnimation key={paquete.id}>
                <div className="paquete-card">
                  <div className="paquete-badge">¡PACK ESPECIAL!</div>
                  <div className="paquete-image">
                    <img src={paquete.image || "/placeholder.svg"} alt={paquete.title} as="image" />
                  </div>
                  <div className="paquete-content">
                    <h3>{paquete.title}</h3>
                    <p>{paquete.description}</p>
                    <div className="paquete-prices">
                      <span className="price-regular">${paquete.precioRegular}</span>
                      <span className="price-offer">${paquete.precioOferta}</span>
                      <span className="price-savings">
                        Ahorras: ${(paquete.precioRegular - paquete.precioOferta).toFixed(0)}
                      </span>
                    </div>
                    <div className="paquete-actions">
                      <button
                        className="btn-add-to-cart"
                        onClick={() => handleAddPackToCart(paquete)}
                        aria-label={`Agregar ${paquete.title} al carrito`}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <circle cx="9" cy="21" r="1"></circle>
                          <circle cx="20" cy="21" r="1"></circle>
                          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                        </svg>
                        {paquete.customPack ? "Solicitar Pack" : "Agregar Pack al Carrito"}
                      </button>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        )}

        {activeTab === "contacto" && (
          <div className="contacto-container">
            <div className="contacto-form">
              <h2>¿Interesado en nuestras promociones?</h2>
              <p>Completa el formulario y un asesor se pondrá en contacto contigo a la brevedad.</p>

              {formStatus.success && <div className="form-success-message">{formStatus.message}</div>}

              {formStatus.error && <div className="form-error-message">{formStatus.message}</div>}

              <form className="form-promociones" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="nombre">Nombre</label>
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    placeholder="Tu nombre"
                    value={formData.nombre}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="telefono">Teléfono</label>
                  <input
                    type="tel"
                    id="telefono"
                    name="telefono"
                    placeholder="Tu teléfono"
                    value={formData.telefono}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Tu email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="interes">Me interesa</label>
                  <select id="interes" name="interes" value={formData.interes} onChange={handleInputChange}>
                    <option value="">Selecciona una opción</option>
                    <option value="rollos-textura">Rollos de Textura</option>
                    <option value="cintas-adhesivas">Cintas Adhesivas</option>
                    <option value="paquetes-promocionales">Paquetes Promocionales</option>
                    <option value="todos">Todos los productos</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="mensaje">Mensaje</label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    placeholder="Cuéntanos qué necesitas"
                    rows="4"
                    value={formData.mensaje}
                    onChange={handleInputChange}
                  ></textarea>
                </div>

                <button type="submit" className="btn-submit" disabled={formStatus.submitting}>
                  {formStatus.submitting ? "Enviando..." : "Enviar Solicitud"}
                </button>
              </form>
            </div>

            <div className="contacto-qr">
              <h2>Comparte esta promoción</h2>
              <p>Escanea este código QR o comparte el enlace con tus colegas.</p>

              <div className="qr-container">{QRCode && <QRCode value={currentUrl} size={200} />}</div>
              <div className="masadhesivologo"><img src="images/detalles/masadehsivologo.png" alt="logo" /></div>
              <div className="share-url">
                <input type="text" value={currentUrl} readOnly />
                <button onClick={handleCopyUrl}>{copied ? "¡Copiado!" : "Copiar"}</button>
              </div>

              <div className="contacto-directo">
                <h3>Contacto directo</h3>
                <p>
                  <strong>Teléfono:</strong> +525648210476
                </p>
                <p>
                  <strong>Email:</strong> romanacentro@yahoo.com
                </p>
                <p>
                  <strong>Dirección:</strong> Donceles 74, Interior Local 10A, Col. Centro, Cuauhtémoc, CDMX
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="promociones-footer">
        <div className="promociones-cta">
          <h2>¿Necesitas asesoría personalizada?</h2>
          <p>Nuestros expertos pueden ayudarte a elegir los mejores materiales para tus proyectos.</p>
          <Link to="/contacto" className="btn-contactar">
            Contactar Ahora
          </Link>
        </div>
      </div>
    </div>
  )
}
