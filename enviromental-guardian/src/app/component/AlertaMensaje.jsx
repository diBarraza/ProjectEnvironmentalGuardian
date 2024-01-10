// AlertaMensaje.jsx
import React, { useState, useEffect } from 'react';

const AlertaMensaje = ({ type, message}) => {
  console.log('Type:', type);
  console.log('Message:', message);
  const [isVisible, setIsVisible] = useState(true);
  
  useEffect(() => {
    // Si el componente recibe nuevas propiedades, reinicia la visibilidad
    setIsVisible(true);
    // Establece un temporizador para ocultar la alerta después de 3 segundos
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3000);
    // Limpia el temporizador cuando el componente se desmonta o recibe nuevas propiedades
    return () => clearTimeout(timer);
  }, [type, message]);

  const getAlertClass = () => {
    switch (type) {
      case 'success':
        return 'bg-green-500 text-white';
      case 'error':
        return 'bg-red-500 text-white';
      case 'info':
        return 'bg-blue-500 text-white';
      default:
        return 'bg-gray-500 text-white';
    }
  };

  return isVisible ? (
    <div id='alertaMensaje' className={`p-4 mb-4 rounded ${getAlertClass()}`}>
      {message}
    </div>
  ) : null;
};

export default AlertaMensaje;
