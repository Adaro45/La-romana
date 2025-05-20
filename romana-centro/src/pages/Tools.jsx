"use client"

import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import ScrollAnimation from "../components/ScrollAnimation"
import "./styles/Products.css"
import { placeholderTools } from "../files"
import Cart from "../components/Cart"
import ProductCard from "../components/ProductCard"

export default function Tools() {
  const navigate = useNavigate()
  const [filteredProducts, setFilteredProducts] = useState(placeholderTools)
  const [filters, setFilters] = useState({
    search: "",
    color: "all",
  })

  // Extraer características únicas de los productos para filtrado
  const uniqueSpecs = [
    ...new Set(
      placeholderTools.flatMap((product) =>
        product.specs
          .filter((spec) => spec.toLowerCase().includes("ancho") || spec.toLowerCase().includes("tamaño"))
          .flatMap((spec) => {
            const specPart = spec.split(":")[0]
            if (specPart) {
              return specPart.split(",").map((spec) => spec.trim())
            }
            return []
          }),
      ),
    ),
  ]

  // Aplicar filtros
  useEffect(() => {
    let result = placeholderTools

    // Filtrar por búsqueda
    if (filters.search) {
      const searchTerm = filters.search.toLowerCase()
      result = result.filter(
        (product) =>
          product.title.toLowerCase().includes(searchTerm) || product.description.toLowerCase().includes(searchTerm),
      )
    }

    // Filtrar por especificación
    if (filters.color !== "all") {
      result = result.filter((product) =>
        product.specs.some((spec) => spec.toLowerCase().includes(filters.color.toLowerCase())),
      )
    }

    setFilteredProducts(result)
  }, [filters])

  // Manejar cambios en los filtros
  const handleFilterChange = (e) => {
    const { name, value } = e.target
    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  return (
    <div className="products-page">
      <Cart />

      <div className="products-filters">
        <div className="search-container">
          <input
            type="text"
            name="search"
            placeholder="Buscar herramientas..."
            value={filters.search}
            onChange={handleFilterChange}
            className="search-input"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="search-icon"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
        </div>

        <div className="filter-container">
          <label htmlFor="spec-filter">Filtrar por característica:</label>
          <select
            id="spec-filter"
            name="color"
            value={filters.color}
            onChange={handleFilterChange}
            className="filter-select"
          >
            <option value="all">Todas las características</option>
            {uniqueSpecs.map((spec) => (
              <option key={spec} value={spec}>
                {spec}
              </option>
            ))}
          </select>
        </div>
      </div>

      {filteredProducts.length === 0 ? (
        <div className="no-results">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
          <h3>No se encontraron productos</h3>
          <p>Intenta con otros términos de búsqueda o filtros</p>
          <button className="reset-filters" onClick={() => setFilters({ search: "", color: "all" })}>
            Restablecer filtros
          </button>
        </div>
      ) : (
        <div className="products-grid">
          {filteredProducts.map((product) => (
            <ScrollAnimation key={product.id}>
              <ProductCard product={product} />
            </ScrollAnimation>
          ))}
        </div>
      )}
    </div>
  )
}
