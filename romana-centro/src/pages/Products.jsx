"use client"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import ScrollAnimation from "../components/ScrollAnimation"
import "./styles/Products.css"
import { products } from "../files"
import Cart from "../components/Cart"
import ProductCard from "../components/ProductCard"

export default function Products() {
  const navigate = useNavigate()
  const [filteredProducts, setFilteredProducts] = useState(products)
  const [filters, setFilters] = useState({
    search: "",
    color: "all",
  })

  // Extraer colores únicos de los productos
  const uniqueColors = [
    ...new Set(
      products.flatMap((product) =>
        product.specs
          .filter((spec) => spec.toLowerCase().includes("colores:") || spec.toLowerCase().includes("color:"))
          .flatMap((spec) => {
            const colorPart = spec.split(":")[1]
            if (colorPart) {
              return colorPart.split(",").map((color) => color.trim())
            }
            return []
          }),
      ),
    ),
  ]

  // Aplicar filtros
  useEffect(() => {
    let result = products

    // Filtrar por búsqueda
    if (filters.search) {
      const searchTerm = filters.search.toLowerCase()
      result = result.filter(
        (product) =>
          product.title.toLowerCase().includes(searchTerm) || product.description.toLowerCase().includes(searchTerm),
      )
    }

    // Filtrar por color
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
            placeholder="Buscar productos..."
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
          <label htmlFor="color-filter">Filtrar por color:</label>
          <select
            id="color-filter"
            name="color"
            value={filters.color}
            onChange={handleFilterChange}
            className="filter-select"
          >
            <option value="all">Todos los colores</option>
            {uniqueColors.map((color) => (
              <option key={color} value={color}>
                {color}
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
              <ProductCard product={product} isExclusive={product.title === "Romana"} />
            </ScrollAnimation>
          ))}
        </div>
      )}
    </div>
  )
}

