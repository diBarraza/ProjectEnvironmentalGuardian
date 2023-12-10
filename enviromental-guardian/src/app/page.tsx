import React from 'react';
import 'tailwindcss/tailwind.css';


export default function Home() {
  return (
    <div
    className="bg-cover"
      style={{
        backgroundImage: 'url("/images/FondoHome.jpg")', // Reemplaza la ruta con la ubicación de tu imagen
      }}
    >
      <h1 className="text-xl font-bold mb-4">Home</h1>
      <h2 className="text-xl font-bold mb-4">EnverimentalGuardian</h2>
    </div>  
  )
}
