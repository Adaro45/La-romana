import { Routes, Route, Navigate } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import Products from './pages/Products';
import Tools from './pages/Tools';
import Contact from './pages/Contact';
import FinishedProducts from './pages/FinishedProducts';
import Espejos from './pages/Espejos';
import ArticulosReligiosos from './pages/ArticulosReligiosos';
import ProductsLayout from './components/ProductsLayout';
import FinishedProductsLayout from './components/FinishedProductsLayout';
import './styles/main.css';

export default function App() {
  return (
    <Layout>
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/productos/*" element={<ProductsLayout />}>
          <Route index element={<Navigate to="molduras" />} />
          <Route path="molduras" element={<Products />} />
          <Route path="herramientas" element={<Tools />} />
          {/* La ruta terminados ahora actúa como layout */}
          <Route path="terminados/*" element={<FinishedProductsLayout />}>
            {/* Ruta por defecto: todos los terminados */}
            <Route index element={<FinishedProducts />} />
            <Route path="espejos" element={<Espejos />} />
            <Route path="articulos-religiosos" element={<ArticulosReligiosos />} />
          </Route>
        </Route>
        <Route path="/contacto" element={<Contact />} />
      </Routes>
    </Layout>
  );
}
