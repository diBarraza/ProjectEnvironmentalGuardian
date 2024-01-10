'use client'
import React, { ReactNode, useState } from 'react';
import 'tailwindcss/tailwind.css';
import Sidebar from '../app/side_bar/side_bar';


interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  
  return (
    <div className="min-h-screen flex flex-col bg-lime-300">
      <Sidebar />
      <div className='flex-grow'>
        { children }
      </div>
      <footer className="bg-lime-900 text-white p-4 mt-auto">
        {/* Contenido del pie de página */}
        <p>&copy; 2024 Aplicaciones Varias</p>
      </footer>
      
    </div>
  );
};

export default Layout;
