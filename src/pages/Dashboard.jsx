import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Player from '../components/Player';
import Footer from '../components/Footer';
import BottomNav from '../components/BottomNav'; // <-- AÑADIDO
import Home from './Home';
import Search from './Search';
import Library from './Library';
import Contact from './Contact';
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
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </main>
      </div>
      <Player />
      <BottomNav /> {/* <-- AÑADIDO */}
    </div>
  );
};

export default Dashboard;