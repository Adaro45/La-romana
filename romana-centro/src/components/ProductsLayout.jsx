import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import MobileProductSelector from "../components/MobileProductSelector";
import "../styles/ProductsLayout.css";

const ProductsLayout = () => {
  const location = useLocation();
  // Obtenemos la subruta actual: si no hay, se asume "molduras"
  const currentPath = location.pathname.split("/")[2] || "molduras";

  return (
    <div className="products-layout">
      <h1 className="page-title">Nuestros Productos</h1>
      
      {/* Versión Desktop: navegación horizontal */}
      <nav className="products-subnav desktop-only">
        <ul>
          <li className={currentPath === "molduras" ? "active" : ""}>
            <Link to="/productos/molduras">Molduras</Link>
          </li>
          <li className={currentPath === "herramientas" ? "active" : ""}>
            <Link to="/productos/herramientas">Herramientas e Insumos</Link>
          </li>
          <li className={currentPath === "terminados" ? "active" : ""}>
            <Link to="/productos/terminados">Terminados</Link>
          </li>

        </ul>
      </nav>

      {/* Versión Mobile: siempre mostramos el selector global */}
      <div className="mobile-only">
        <MobileProductSelector />
      </div>

      <div className="products-outlet">
        <Outlet />
      </div>
    </div>
  );
};

export default ProductsLayout;
