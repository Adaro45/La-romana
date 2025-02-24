import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import "../styles/ProductsLayout.css";

const ProductsLayout = () => {
  const location = useLocation();
  // Obtenemos la subruta activa: si no hay, se asume "molduras"
  const currentPath = location.pathname.split("/")[2] || "molduras";

  return (
    <div className="products-layout">
      <nav className="products-subnav">
      <h1 className="page-title">Nuestros Productos</h1>
        <ul>
          <li className={currentPath === "molduras" ? "active" : ""}>
            <Link to="/productos/molduras">Molduras</Link>
          </li>
          <li className={currentPath === "herramientas" ? "active" : ""}>
            <Link to="/productos/herramientas">Herramientas</Link>
          </li>
          <li className={currentPath === "terminados" ? "active" : ""}>
            <Link to="/productos/terminados">Terminados</Link>
          </li>
        </ul>
      </nav>
      <div className="products-outlet">
        <Outlet />
      </div>
    </div>
  );
};

export default ProductsLayout;
