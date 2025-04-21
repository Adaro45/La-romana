import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";
import "./styles/CheckOut.css";

export default function CheckOut() {
  const {
    cart,
    removeFromCart,
    clearCart,
    addBoxToCart,
    removeBoxFromCart,
  } = useCart();

  // Estado para el formulario de datos del cliente
  const [clientData, setClientData] = useState({
    name: "",
    phone: "",
    email: "",
  });

  // Maneja los cambios del formulario
  const handleChange = (e) => {
    setClientData({ ...clientData, [e.target.name]: e.target.value });
  };

  // Calcula el subtotal
  const subtotal = cart.reduce((acc, item) => {
    return acc + item.quantity * item.Precio_unidad;
  }, 0);

  // Genera un folio único basado en el timestamp
  const generateFolio = () => {
    const base = Date.now().toString(36).toUpperCase();
    
    return `FOLIO-${base.substring(base.length - 5)}`;
  };

  // Genera el PDF con isotipo centrado, folio en la esquina superior derecha y contenido debajo
  const handleGeneratePDF = async () => {
    if (!clientData.name || !clientData.phone) {
      alert("Por favor, ingresa al menos el nombre y teléfono del cliente.");
      return;
    }

    const doc = new jsPDF({
      orientation: "portrait",
      unit: "pt",
      format: "letter",
    });
    // const sendPDFByEmail = async (pdfBlob) => {
    //   const formData = new FormData();
    //   formData.append("to", "romanacentro@yahoo.com");
    //   formData.append("subject", "Nuevo Ticket de Compra");
    //   formData.append("body", "Adjunto encontrará el ticket de compra generado.");
    //   formData.append("attachment", pdfBlob, `ticket_${generateFolio()}.pdf`);
    // //api-key 5151b8785315bdd2844a694d7e47fcf1
    // // secret-key d654ffff5b90f217e0c7cc1f814cf516
    //   try {
    //   const response = await fetch("https://your-email-api-endpoint.com/send", {
    //     method: "POST",
    //     body: formData,
    //   });

    //   if (!response.ok) {
    //     throw new Error("Error al enviar el correo.");
    //   }

    //   alert("PDF enviado por correo con éxito.");
    //   } catch (error) {
    //   console.error("Error al enviar el correo:", error);
    //   alert("Hubo un problema al enviar el correo.");
    //   }
    // };

    // // Generar el PDF como Blob
    // const pdfBlob = doc.output("blob");

    // // Enviar el PDF por correo
    // await sendPDFByEmail(pdfBlob);
    const pageWidth = doc.internal.pageSize.getWidth();
    const logoWidth = 200;
    const logoHeight = 100;
    const logoX = (pageWidth - logoWidth) / 2;
    const logoY = 40;

    // Agregar el logo (requiere que esté en base64 o se convierta antes)
    doc.addImage("./images/logo.jpg", "JPG", logoX, logoY, logoWidth, logoHeight);

    // Genera folio y fecha
    const folio = generateFolio();
    const fecha = new Date().toLocaleString("es-MX");

    // Posicionar el folio en la esquina superior derecha
    doc.setFontSize(12);
    doc.text(`Folio: ${folio}`, pageWidth - 150, logoY + 15);
    doc.text(`Fecha: ${fecha}`, pageWidth - 150, logoY + 35);

    let yOffset = logoY + logoHeight + 40;

    // Datos del negocio
    doc.setFontSize(14);
    doc.text("Romana Centro", 40, yOffset);
    yOffset += 15;
    doc.text("DIRECCIÓN: Donceles 74 Interior Local 10A, Col. Centro, Cuauhtémoc", 40, yOffset);
    yOffset += 15;
    doc.text("CDMX, México - CP 06010", 40, yOffset);
    yOffset += 15;
    doc.text("Tel: +52 5648210476", 40, yOffset);
    yOffset += 30;

    // Datos del cliente
    doc.setFontSize(12);
    doc.text(`Cliente: ${clientData.name}`, 40, yOffset);
    yOffset += 15;
    doc.text(`Teléfono: ${clientData.phone}`, 40, yOffset);
    yOffset += 15;
    doc.text(`Email: ${clientData.email}`, 40, yOffset);
    yOffset += 30;

    // Datos de la tabla
    const tableBody = cart.map((item) => {
      const cajasCompradas = item.quantity / item.CantXcaja;
      const precioTotal = item.Precio_unidad * item.quantity;
      return [
        item.title,
        cajasCompradas.toFixed(2), 
        `$${item.Precio_unidad}`,
        `$${precioTotal}`,
      ];
    });

    autoTable(doc, {
      startY: yOffset,
      head: [["Producto", "Cajas", "P. Unidad", "Subtotal"]],
      body: tableBody,
      theme: "grid",
      styles: { cellPadding: 4, fontSize: 10 },
      headStyles: { fillColor: [44, 62, 80], textColor: 255 },
    });

    let finalY = doc.lastAutoTable.finalY + 30;
    doc.setFontSize(12);
    doc.text(`TOTAL: $${subtotal} MXN`, 40, finalY);

    finalY += 30;
    doc.text("Por favor, comuniquese con uno de nuestros asesores para hacer el pedido. Con este documento digital, podrá recoger su compra.", 40, finalY);
    doc.text("Para recoger su compra, diríjase a la ubicación de la tienda con este documento digital.", 40, finalY + 15);
    finalY += 40;
    doc.text("Gracias por su preferencia.", 50, finalY);
    doc.save(`ticket_${folio}.pdf`);
    alert("PDF generado con éxito.");
  };

  return (
    <div className="checkout-page">
      <button className="back-button" onClick={() => window.history.back()}>
        ← Volver a Productos
      </button>

      <div className="isotipo-container">
        <img className="isotipo-checkout" src="./images/logo.jpg" alt="Isotipo" />
      </div>

      <h2 className="titulos-checkout">Resumen de Compra</h2>
      <h3 className="titulos-checkout">Datos del Cliente</h3>
      <div className="client-data-form">
        <label>
          Nombre:
          <input type="text" name="name" value={clientData.name} onChange={handleChange} />
        </label>
        <label>
          Teléfono:
          <input type="text" name="phone" value={clientData.phone} onChange={handleChange} />
        </label>
        <label>
          Email:
          <input type="email" name="email" value={clientData.email} onChange={handleChange} />
        </label>
      </div>
      {cart.length === 0 ? (
        <p>No hay productos en el carrito.</p>
      ) : (
        <table className="cart-table">
          <thead>
            <tr>
              <th>Producto</th>
              <th>Acciones</th>
              <th>Cajas | Precio</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item) => (
              <tr key={item.id}>
                <td>{item.title}</td>
                <td>
                  <button className="control-btn" onClick={() => addBoxToCart(item.id)}>
                    + Caja
                  </button>
                  <button className="control-btn" onClick={() => removeBoxFromCart(item.id)}>
                    - Caja
                  </button>
                  <button className="control-btn remove-btn" onClick={() => removeFromCart(item.id)}>
                    X
                  </button>
                </td>
                <td>
                  <p>Cajas: {(item.quantity / item.CantXcaja).toFixed(2)}</p>
                  <p>Total: ${item.quantity * item.Precio_unidad} MXN</p>
                  <p>Precio por caja: ${item.CantXcaja * item.Precio_unidad} MXN</p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

       

      {cart.length > 0 && (
        <div className="checkout-actions">
          <button className="checkout-btn" onClick={handleGeneratePDF}>
            Generar Ticket PDF
          </button>
          <button className="cancel-btn" onClick={clearCart}>
            Cancelar Compra
          </button>
        </div>
      )}
    </div>
  );
}
