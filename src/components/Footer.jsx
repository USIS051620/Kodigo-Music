import React from 'react';
import './Footer.css'; // Importamos los estilos

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-links">
        <a href="#">Legal</a>
        <a href="#">Centro de Privacidad</a>
        <a href="#">Política de Privacidad</a>
        <a href="#">Cookies</a>
        <a href="#">Sobre los anuncios</a>
        <a href="#">Accesibilidad</a>
      </div>
      <div className="footer-copyright">
        <span>© 2025 Kodigo Music</span>
        <br />
        <span>Marvin Solórzano</span>
      </div>
    </footer>
  );
};

export default Footer;