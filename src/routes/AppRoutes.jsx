import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home.jsx';
import Busca from '../pages/Busca.jsx';
import Contato from '../pages/Contato.jsx';
import PaginaNaoencontrada from '../pages/PaginaNaoEncontrada.jsx';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx'


function AppRoutes() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Busca" element={<Busca />} />
        <Route path="Contato" element={<Contato />} />
        <Route path="*" element={<PaginaNaoencontrada />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default AppRoutes;
