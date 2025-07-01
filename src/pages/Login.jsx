import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { 
  signInWithEmailAndPassword, 
  GoogleAuthProvider,           // <-- 1. Importa el proveedor de Google
  signInWithPopup               // <-- 2. Importa la función de inicio con popup
} from 'firebase/auth';
import { auth } from '../firebase/config';
import './Auth.css';
import SpotifyLogo from '../assets/spotify-logo.svg';
import { FcGoogle } from 'react-icons/fc'; // <-- 3. Importa el ícono de Google

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // --- LÓGICA PARA INICIO DE SESIÓN CON CORREO Y CONTRASEÑA (SIN CAMBIOS) ---
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/');
    } 
    // eslint-disable-next-line no-unused-vars
    catch (err) {
      setError('Error al iniciar sesión. Verifica tus credenciales.');
    }
  };

  // --- 4. NUEVA LÓGICA PARA INICIO DE SESIÓN CON GOOGLE ---
  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider(); // Crea una instancia del proveedor
    try {
      await signInWithPopup(auth, provider); // Abre el popup de Google
      navigate('/'); // Si tiene éxito, redirige al dashboard
    } catch (err) {
      console.error("Error durante el inicio de sesión con Google:", err);
      setError("No se pudo iniciar sesión con Google. Inténtalo de nuevo.");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-form">
        <div className="auth-header">
          <img src={SpotifyLogo} alt="Logo de Kodigo Music" className="auth-logo" />
        </div>
        
        <h2>Iniciar Sesión en Kodigo Music</h2>
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
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {error && <p className="error-message">{error}</p>}
          <button type="submit">Iniciar Sesión</button>
        </form>

        {/* --- 5. AÑADE EL SEPARADOR Y EL NUEVO BOTÓN --- */}
        <div className="divider">O</div>

        <button type="button" className="google-login-button" onClick={handleGoogleLogin}>
          <FcGoogle />
          <span>Continuar con Google</span>
        </button>

        <hr style={{ border: '1px solid #282828', marginTop: '30px' }} />

        <p>¿No tienes una cuenta? <Link to="/register">Regístrate</Link></p>
      </div>
    </div>
  );
};

export default Login;