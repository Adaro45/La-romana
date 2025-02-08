import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import Products from './pages/Products';
import Tools from './pages/Tools';
import Contact from './pages/Contact';
import FinishedProducts from './pages/FinishedProducts';
import './styles/main.css';

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/productos" element={<Products />} />
        <Route path="/herramientas" element={<Tools />} />
        <Route path="/productos-terminados" element={<FinishedProducts />} />
        <Route path="/contacto" element={<Contact />} />
      </Routes>
    </Layout>
  );
}