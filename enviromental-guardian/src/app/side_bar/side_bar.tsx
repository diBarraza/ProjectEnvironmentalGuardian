// Sidebar.tsx
import Link from 'next/link';
import React from 'react';
import 'tailwindcss/tailwind.css';
const Sidebar: React.FC = () => {
  return (
    <div className="bg-lime-900 text-white h-16 flex justify-between items-center px-4">
      <Link href="/">
          <li className="hover:bg-gray-700 p-2 rounded cursor-pointer">Aplicaciones Varias</li>
        </Link>
      {/* Contenido del menú */}
      <ul className="flex space-x-4">
        <Link href="/">
          <li className="hover:bg-gray-700 p-2 rounded cursor-pointer">Home</li>
        </Link>
        <Link href="/features" hidden>
          <li className="hover:bg-gray-700 p-2 rounded cursor-pointer">Features</li>
        </Link>
        <Link href="/games" hidden>
          <li className="hover:bg-gray-700 p-2 rounded cursor-pointer">Games</li>
        </Link>
        <Link href="/credenciales/home_lotes">
          <li className="hover:bg-gray-700 p-2 rounded cursor-pointer">Credenciales</li>
        </Link>
        <Link href="/about" hidden>
          <li className="hover:bg-gray-700 p-2 rounded cursor-pointer">About</li>
        </Link>
        <Link href="/mycomponent" hidden>
          <li className="hover:bg-gray-700 p-2 rounded cursor-pointer">My Components</li>
        </Link>
        <Link href="/settings">
          <li className="hover:bg-gray-700 p-2 rounded cursor-pointer">Settings</li>
        </Link>
        {/* Agrega más elementos de menú según sea necesario */}
      </ul>
    </div>
  );
};

export default Sidebar;
