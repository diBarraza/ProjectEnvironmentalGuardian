// Archivo: components/VisitCard.jsx

import React from 'react';

const VisitCard = ({ visitCount }) => {
  return (
    <div className="card bg-white p-4 shadow-md rounded-md">
      <h2 className="text-xl font-bold mb-4">Estadísticas de Visitas</h2>
      <p className="text-gray-700">
        El sitio ha sido visitado <span className="text-blue-500">{visitCount}</span> veces.
      </p>
    </div>
  );
};

export default VisitCard;
