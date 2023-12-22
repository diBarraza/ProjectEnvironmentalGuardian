// Archivo: components/BackgroundImage.jsx

import React from 'react';


const BackgroundImage = ({ children }) => {
  return (
    <div
      className="bg-cover h-screen min-h-screen flex items-center justify-center"
      style={{
        backgroundImage: 'url("/images/FondoHome.jpg")', // Reemplaza la ruta con la ubicación de tu imagen
      }}
    >
      {children}
    </div>
  );
};

export default BackgroundImage;
