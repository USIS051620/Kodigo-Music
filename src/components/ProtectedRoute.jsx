import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth'; // ¡Una librería muy útil!
import { auth } from '../firebase/config';

// Primero, instala react-firebase-hooks
// npm install react-firebase-hooks

const ProtectedRoute = ({ children }) => {
  const [user, loading] = useAuthState(auth);

  if (loading) {
    // Muestra algo mientras se verifica la autenticación
    return <div>Cargando...</div>;
  }

  if (!user) {
    // Si no hay usuario, redirige a la página de login
    return <Navigate to="/login" />;
  }

  // Si hay usuario, muestra el contenido protegido
  return children;
};

export default ProtectedRoute;