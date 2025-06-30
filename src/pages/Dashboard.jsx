import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Player from '../components/Player';
import Home from './Home';
import Search from './Search';
import Library from './Library';
import Contact from './Contact'; // <-- Importación añadida
import '../App.css';

const Dashboard = () => {
  return (
    <div className="app-container">
      <div className="main-body">
        <Sidebar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Search />} />
            <Route path="/library" element={<Library />} />
            <Route path="/contact" element={<Contact />} /> {/* <-- Ruta añadida */}
          </Routes>
        </main>
      </div>
      <Player />
    </div>
  );
};

export default Dashboard;