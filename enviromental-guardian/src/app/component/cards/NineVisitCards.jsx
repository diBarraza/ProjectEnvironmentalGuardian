import React, { useEffect, useState } from 'react';

const VisitCard = () => {
  const [visitData, setVisitData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8000/json/nine_cards');
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setVisitData(data);  // Asigna el array de objetos directamente
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {visitData && visitData.ultimas_nueve_tarjetas ? 
      visitData.ultimas_nueve_tarjetas.map((tarjeta) => (
        <div key={tarjeta.id} className="card bg-white p-4 shadow-md rounded-md mb-4">
          <h2 className="text-xl font-bold mb-4">{tarjeta.title}</h2>
          <p className="text-gray-700">
            {tarjeta.description} <span className="text-blue-500">{tarjeta.visitCount}</span> {tarjeta.description_general}.
          </p>
        </div>
      )) : 'Cargando...'}
    </div>
  );
};

export default VisitCard;
