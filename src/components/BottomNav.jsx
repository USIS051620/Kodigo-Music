import React from 'react';
import { NavLink } from 'react-router-dom';
import { IoHome, IoSearch, IoLibrary, IoMailOutline } from 'react-icons/io5';
import './BottomNav.css';

const BottomNav = () => {
  return (
    <nav className="bottom-nav-container">
      <NavLink to="/" className={({ isActive }) => (isActive ? 'bottom-nav-active' : '')}>
        <IoHome />
        <span>Inicio</span>
      </NavLink>
      <NavLink to="/search" className={({ isActive }) => (isActive ? 'bottom-nav-active' : '')}>
        <IoSearch />
        <span>Buscar</span>
      </NavLink>
      <NavLink to="/library" className={({ isActive }) => (isActive ? 'bottom-nav-active' : '')}>
        <IoLibrary />
        <span>Biblioteca</span>
      </NavLink>
      <NavLink to="/contact" className={({ isActive }) => (isActive ? 'bottom-nav-active' : '')}>
        <IoMailOutline />
        <span>Contacto</span>
      </NavLink>
    </nav>
  );
};

export default BottomNav;