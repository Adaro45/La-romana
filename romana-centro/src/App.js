import { Routes, Route, Navigate } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import Products from './pages/Products';
import Tools from './pages/Tools';
import Contact from './pages/Contact';
import FinishedProducts from './pages/FinishedProducts';
import './styles/main.css';
import ProductsLayout from './components/ProductsLayout';

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
          <Route path="terminados" element={<FinishedProducts />} />
        </Route>
        <Route path="/contacto" element={<Contact />} />
      </Routes>
    </Layout>
  );
}