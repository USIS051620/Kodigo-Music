import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/config';
import './Auth.css';
import SpotifyLogo from '../assets/spotify-logo.svg'; // <-- 1. IMPORTA EL LOGO

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    if (password.length < 6) {
      setError("La contraseña debe tener al menos 6 caracteres.");
      return;
    }
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate('/');
    } 
    // eslint-disable-next-line no-unused-vars
    catch (err) {
      setError('Error al registrar. El correo puede que ya esté en uso.');
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-form">
        {/* --- 2. AÑADE EL LOGO AQUÍ --- */}
        <div className="auth-header">
          <img src={SpotifyLogo} alt="Logo de Kodigo Music" className="auth-logo" />
        </div>
        
        <h2>Regístrate Gratis</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Crea una contraseña (mín. 6 caracteres)"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {error && <p className="error-message">{error}</p>}
          <button type="submit">Registrarme</button>
        </form>
        <p>¿Ya tienes una cuenta? <Link to="/login">Inicia Sesión</Link></p>
      </div>
    </div>
  );
};

export default Register;