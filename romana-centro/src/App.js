import { Routes, Route, Navigate } from "react-router-dom"
import ScrollToTop from "./components/ScrollToTop"
import Layout from "./layouts/Layout"
import ProductsLayout from "./layouts/ProductsLayout"
import HomePage from "./pages/HomePage"
import Products from "./pages/Products"
import Tools from "./pages/Tools"
import Contact from "./pages/Contact"
import ProductDetailPage from "./pages/ProductDetailPage"
import FooterSection from "./components/FooterSection"
import AboutUs from "./pages/AboutUs"
import "./main.css"
import CheckOut from "./pages/CheckOut"
import { CartProvider } from "./context/CartContext"
import PromocionesRollos from "./pages/PromocionesRollos" // Importamos la nueva página

export default function App() {
  return (
    <>
      <Layout>
        <CartProvider>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/productos/*" element={<ProductsLayout />}>
              <Route index element={<Navigate to="molduras" />} />
              <Route path="molduras" element={<Products />} />
              <Route path="herramientas" element={<Tools />} />
              {/* La ruta terminados ahora actúa como layout */}
            </Route>
            <Route path="/producto/:id" element={<ProductDetailPage />} />
            <Route path="/contacto" element={<Contact />} />
            <Route path="/nosotros" element={<AboutUs />} />
            <Route path="/compra" element={<CheckOut />} />
            <Route path="/promociones-rollos" element={<PromocionesRollos />} /> {/* Nueva ruta */}
          </Routes>
        </CartProvider>
      </Layout>
      <FooterSection />
    </>
  )
}
