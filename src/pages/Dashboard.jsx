import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Importación de componentes del Layout
import Sidebar from '../components/Sidebar';
import Player from '../components/Player';
import Footer from '../components/Footer';

// Importación de las Páginas
import Home from './Home';
import Search from './Search';
import Library from './Library';
import Contact from './Contact';

// Importación de los estilos principales
import '../App.css';

const Dashboard = () => {
  return (
    <div className="app-container">
      <div className="main-body">
        {/* La barra lateral siempre es visible */}
        <Sidebar />

        {/* El contenido principal que cambia según la ruta */}
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Search />} />
            <Route path="/library" element={<Library />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          
          {/* El footer siempre es visible al final del contenido */}
          <Footer />
        </main>
      </div>

      {/* El reproductor siempre es visible en la parte inferior */}
      <Player />
    </div>
  );
};

export default Dashboard;