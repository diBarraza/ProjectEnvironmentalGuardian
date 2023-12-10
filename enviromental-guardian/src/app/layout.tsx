import React, { ReactNode } from 'react';
import 'tailwindcss/tailwind.css';
import Sidebar from '../app/side_bar/side_bar';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-lime-300">
      <Sidebar />
      { children }
      <footer className="bg-lime-900  text-white p-4">
        {/* Contenido del pie de página */}
        <p>&copy; 2023 Enviromental Guardian</p>
      </footer>
    </div>
  );
};

export default Layout;
