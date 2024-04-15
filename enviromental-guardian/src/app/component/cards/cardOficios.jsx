import React from 'react';


const CardOficios = ({ imagen, titulo, monto, evaluacion, descripcion }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden max-w-1">
      <div className="flex items-center">
        {/* Imagen */}
        <img src={imagen} alt="Oficio" className="w-16 h-auto object-cover" />

        {/* Contenido */}
        <div className="p-2 flex-1">
          {/* Título */}
          <h2 className="text-lg font-semibold mb-1">{titulo}</h2>

          {/* Monto */}
          <p className="text-gray-600 text-sm mb-1">Monto: {monto}</p>

          {/* Evaluación */}
          <div className="flex items-center mb-1">
            <span className="text-gray-600 mr-1">Evaluación:</span>
            {[...Array(evaluacion)].map((_, index) => (
              <svg key={index} className="w-3 h-3 fill-current text-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M10 1l2.56 6.99H18l-5 4.276 1.897 6.468L10 14.625l-5.897 4.108L7 12.266 2 7.99h5.44L10 1zm0 3.488L8.678 7.99H3.772l3 2.625L6 15.49l4-3.417 4 3.417-1.772-4.875 3-2.625h-4.906L10 4.488z"/>
              </svg>
            ))}
          </div>

          {/* Descripción */}
          <p className="text-gray-600 text-sm">{descripcion}</p>
        </div>
      </div>
    </div>
    
  );
};

export default CardOficios;
