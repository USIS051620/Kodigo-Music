import React from 'react';
import { NavLink } from 'react-router-dom';
import { IoHome, IoSearch, IoLibrary, IoMailOutline } from 'react-icons/io5';
import { getAuth, signOut } from 'firebase/auth';
import './Sidebar.css';

const Sidebar = () => {
  const handleLogout = () => {
    const auth = getAuth();
    signOut(auth).catch((error) => console.error("Error al cerrar sesión: ", error));
  };

  return (
    <div className="sidebar-container">
      <div className="sidebar-logo">Kodigo Music</div>
      <nav className="sidebar-nav">
        <ul>
          <li>
            <NavLink to="/" className={({ isActive }) => (isActive ? 'active-link' : '')}>
              <IoHome />
              <span>Inicio</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/search" className={({ isActive }) => (isActive ? 'active-link' : '')}>
              <IoSearch />
              <span>Buscar</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/library" className={({ isActive }) => (isActive ? 'active-link' : '')}>
              <IoLibrary />
              <span>Tu Biblioteca</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={({ isActive }) => (isActive ? 'active-link' : '')}>
              <IoMailOutline />
              <span>Contacto</span>
            </NavLink>
          </li>
        </ul>
      </nav>
      
      <div className="sidebar-playlists">
        <hr />
        <p>Playlist 1</p>
        <p>Playlist 2</p>
      </div>

      <div className="sidebar-footer">
        <button onClick={handleLogout} className="logout-button">
          Cerrar Sesión
        </button>
      </div>
    </div>
  );
};

export default Sidebar;