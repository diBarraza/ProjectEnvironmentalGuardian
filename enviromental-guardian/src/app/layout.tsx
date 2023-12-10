import React, { ReactNode } from 'react';
import 'tailwindcss/tailwind.css';
import Sidebar from '../app/side_bar/side_bar';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Sidebar />
      <div className="flex">        
        <div className="ml-64 p-8"> {/* Ajusta la clase 'ml-64' según el ancho de la barra lateral */}
          { children }
          {/* Contenido adicional de la página de características */}
        </div>        
      </div>
      <footer className="bg-gray-800 text-white p-4">
        {/* Contenido del pie de página */}
        <p>&copy; 2023 Enviromental Guardian</p>
      </footer>
    </div>
  );
};

export default Layout;
