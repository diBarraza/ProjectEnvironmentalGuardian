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
            <Link href="/"><li className="hover:bg-gray-700 p-2 rounded">
              Home
            </li> 
            </Link>         
            <Link href="/features">
              <li className="hover:bg-gray-700 p-2 rounded">
                Features
              </li>
            </Link>                      
            <Link href="/about">
              <li className="hover:bg-gray-700 p-2 rounded">
                About
              </li>
            </Link>
            <Link href="/mycomponent">
              <li className="hover:bg-gray-700 p-2 rounded cursor-pointer">
                My Components
              </li>
            </Link>
            <Link href="/settings">
              <li className="hover:bg-gray-700 p-2 rounded cursor-pointer">
                Settings
              </li>
            </Link>
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
