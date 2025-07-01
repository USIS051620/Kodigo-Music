import React, { useState } from 'react';
import { getAuth, signOut } from 'firebase/auth'; // <-- Importa las funciones de Firebase
import './Contact.css';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Formulario enviado:', { name, email, message });
    setSubmitted(true);
    setTimeout(() => {
        setSubmitted(false);
        setName('');
        setEmail('');
        setMessage('');
    }, 3000);
  };

  // --- NUEVA FUNCIÓN PARA CERRAR SESIÓN ---
  const handleLogout = () => {
    const auth = getAuth();
    signOut(auth).catch((error) => console.error("Error al cerrar sesión: ", error));
    // No necesitamos navegar, el ProtectedRoute se encargará de redirigir
  };

  return (
    <div className="contact-container">
      <h1>Contacto</h1>
      <p>¿Tienes alguna pregunta? Rellena el formulario.</p>

      {submitted ? (
        <div className="success-message">
          ¡Gracias! Tu mensaje ha sido enviado.
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Nombre</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Correo electrónico</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Mensaje</label>
            <textarea
              id="message"
              rows="6"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
          </div>
          <button type="submit" className="submit-button">Enviar Mensaje</button>
        </form>
      )}

      {/* --- NUEVO BOTÓN DE CERRAR SESIÓN (SOLO VISIBLE EN MÓVIL) --- */}
      <div className="mobile-logout-section">
        <button onClick={handleLogout} className="mobile-logout-button">
          Cerrar Sesión
        </button>
      </div>

    </div>
  );
};

export default Contact;