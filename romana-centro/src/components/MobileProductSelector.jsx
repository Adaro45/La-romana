import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./styles/MobileProductSelector.css";

const MobileProductSelector = () => {
  // Opciones principales (sin incluir Espejos ni Artículos Religiosos)
  const options = [
    { label: "Molduras", path: "molduras" },
    { label: "Herramientas", path: "herramientas" },
    { label: "Terminados", path: "terminados" },
  ];

  const location = useLocation();
  const navigate = useNavigate();
  // Extraemos la subruta actual (si no existe, se asume "molduras")
  const currentPath = location.pathname.split("/")[2] || "molduras";
  const currentOption = options.find((opt) => opt.path === currentPath) || options[0];

  const [selected, setSelected] = useState(currentOption);
  const [showOptions, setShowOptions] = useState(false);

  const handleSelect = (option) => {
    setSelected(option);
    navigate(`/productos/${option.path}`);
    setShowOptions(false);
  };

  return (
    <div className="mobile-selector">
      <div
        className="selected-option"
        onClick={() => setShowOptions(!showOptions)}
      >
        {selected.label}
      </div>
      {showOptions && (
        <div className="options-list">
          {options.map((option) => (
            <div
              key={option.path}
              className="option-item"
              onClick={() => handleSelect(option)}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MobileProductSelector;
