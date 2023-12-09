// Sidebar.tsx
import Link from 'next/link';
import React from 'react';
import 'tailwindcss/tailwind.css';
const Sidebar: React.FC = () => {
  return (
    <div className="bg-gray-800 text-white h-screen w-64 flex flex-col justify-between">
      {/* Contenido del menú */}
      <div className="p-4">
        <h1 className="text-2xl font-semibold">SideNavBar</h1>
        {/* Agrega tus elementos de menú aquí */}
        <ul className="mt-4 space-y-2">
            <li className="hover:bg-gray-700 p-2 rounded">
                <Link href="/">Home</Link>
            </li>          
            <li className="hover:bg-gray-700 p-2 rounded">
                <Link href="/features">Features</Link>
            </li>
            <li className="hover:bg-gray-700 p-2 rounded">
              <Link href="/about">About</Link>
            </li>
            <li className="hover:bg-gray-700 p-2 rounded">
              <Link href="/settings">Settings</Link>
            </li>
          {/* Agrega más elementos de menú según sea necesario */}
        </ul>
      </div>
      {/* Pie de página del menú */}
      <div className="p-4">
        <p className="text-sm">© 2023 SideNavBar Inc.</p>
      </div>
    </div>
  );
};

export default Sidebar;
