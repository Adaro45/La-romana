import React, { useState, useEffect } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import "./styles/FinishedProductsLayout.css";

const FinishedProductsLayout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  // Extraemos la subruta de finished products (posición 3 de la URL: /productos/terminados/{sub})
  const currentSub = location.pathname.split("/")[3] || "";

  // Opciones para el selector móvil de terminados
  const options = [
    { label: "Artículos Religiosos", path: "articulos-religiosos" },
    { label: "Espejos", path: "espejos" },
  ];
  
  // Redirige al abrir sin subruta, para que vaya directo a "Artículos Religiosos"
  useEffect(() => {
    if (currentSub === "") {
      navigate("/productos/terminados/articulos-religiosos");
    }
  }, [currentSub, navigate]);

  // Buscamos la opción actual
  const currentOption =
    options.find((opt) => opt.path === currentSub) || options[0];
  const [showOptions, setShowOptions] = useState(false);

  const handleSelect = (option) => {
    navigate(`/productos/terminados/${option.path}`);
    setShowOptions(false);
  };

  return (
    <div className="finished-products-layout">
      
      {/* Submenú para Desktop */}
      <nav className="finished-subnav desktop-only">
        <ul>
          <li className={currentSub === "articulos-religiosos" ? "active" : ""}>
            <Link to="/productos/terminados/articulos-religiosos">
              Artículos Religiosos
            </Link>
          </li>
          <li className={currentSub === "espejos" ? "active" : ""}>
            <Link to="/productos/terminados/espejos">Espejos</Link>
          </li>
        </ul>
      </nav>
      
      {/* Selector personalizado para Mobile (aparece solo en esta sección) */}
      <div className="sub-mobile-only">
        <div
          className="sub-mobile-selector"
          onClick={() => setShowOptions(!showOptions)}
        >
          {currentOption.label}
        </div>
        {showOptions && (
          <div className="mobile-options">
            {options.map((option) => (
              <div
                key={option.path}
                className="mobile-option"
                onClick={() => handleSelect(option)}
              >
                {option.label}
              </div>
            ))}
          </div>
        )}
      </div>
      
      <div className="finished-outlet">
        <Outlet />
      </div>
    </div>
  );
};

export default FinishedProductsLayout;
