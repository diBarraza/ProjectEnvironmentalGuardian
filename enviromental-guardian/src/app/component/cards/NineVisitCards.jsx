import React from 'react';

const VisitCard = ({ visitData }) => {
  return (
    <div className="card bg-white p-4 shadow-md rounded-md">
      <h2 className="text-xl font-bold mb-4">{visitData.title}</h2>
      <p className="text-gray-700">
        {visitData.description} <span className="text-blue-500">{visitData.visitCount}</span> {visitData.description_general}.
      </p>
    </div>
  );
};

const NineVisitCards = () => {
  // Datos para cada tarjeta
  const cardData = [
    { title: 'Tarjeta 1', description: 'Descripción 1', visitCount: 100, description_general: 'veces' },
    { title: 'Tarjeta 2', description: 'Descripción 2', visitCount: 200, description_general: 'veces' },
    { title: 'Tarjeta 3', description: 'Descripción 3', visitCount: 300, description_general: 'veces' },
    { title: 'Tarjeta 4', description: 'Descripción 4', visitCount: 400, description_general: 'veces' },
    { title: 'Tarjeta 5', description: 'Descripción 5', visitCount: 500, description_general: 'veces' },
    { title: 'Tarjeta 6', description: 'Descripción 6', visitCount: 600, description_general: 'veces' },
    { title: 'Tarjeta 7', description: 'Descripción 7', visitCount: 700, description_general: 'veces' },
    { title: 'Tarjeta 8', description: 'Descripción 8', visitCount: 800, description_general: 'veces' },
    { title: 'Tarjeta 9', description: 'Descripción 9', visitCount: 900, description_general: 'veces' },
    
  ];

  return (
    <div className="grid grid-cols-3 gap-8 p-8">
      {cardData.map((data, index) => (
        <VisitCard key={index} visitData={data} />
      ))}
    </div>
  );
};

export default NineVisitCards;
