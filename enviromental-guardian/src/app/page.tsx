

import React from 'react';
import Sidebar from '../app/side_bar/side_bar';
import 'tailwindcss/tailwind.css';

export default function Home() {
  return (
    <div className="flex">
          <Sidebar />
          <div className="ml-64 p-8"> {/* Ajusta la clase 'ml-64' según el ancho de la barra lateral */}
          <p className="text-xl font-bold mb-4">Home</p>
          {/* Contenido adicional de la página de características */}
          </div>
      </div>
  )
}
