// TablaCredenciales.jsx
import React, { useEffect, useState } from 'react';
import 'tailwindcss/tailwind.css';
import ModalCrearSolicitudes from './ModalCrearSolicitudes';
const TablaCredenciales = () => {
  const [credencialesData, setCredencialesData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/credenciales/');
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        
        setCredencialesData(data);
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    };
    fetchData();
  }, []);
  // Transforma el objeto en un array
  const arrayCredenciales = credencialesData.credenciales || [];
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };


  return (
    
    <div className="p-4">
      <div className='container py-10 px-10 mx-0 min-w-full flex flex-col'>
        <div className='flex justify-between items-center'>
          <h1 className="text-2xl font-bold mb-4">Tabla de Credenciales</h1>
          <div className='flex flex-row'>
            <button className='bg-purple-900 text-white hover:bg-blue-400 font-bold py-2 px-4 mt-3 rounded' onClick={openModal} >Agregar</button>
            <ModalCrearSolicitudes isOpen={isModalOpen} onRequestClose={closeModal} />  
            <button className='bg-purple-900 text-white hover:bg-blue-400 font-bold py-2 px-4 mt-3 rounded'>Eliminar</button>
            <button className='bg-purple-900 text-white hover:bg-blue-400 font-bold py-2 px-4 mt-3 rounded'>Buscar</button>
          </div>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300 table-auto">
          <thead className="bg-gray-200 text-left">
            <tr>
              <th className="py-2 px-4 border-b">ID</th>
              <th className="py-2 px-4 border-b">Código</th>
              <th className="py-2 px-4 border-b">Alumno</th>
              <th className="py-2 px-4 border-b">Rut</th>
              <th className="py-2 px-4 border-b">Estado</th>
              <th className="py-2 px-4 border-b">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {arrayCredenciales.map((credencial) => (
              <tr key={credencial.id} className="hover:bg-gray-100 bg-lime-500">
                <td className="py-2 px-4 border-b items-center">{credencial.id}</td>
                <td className="py-2 px-4 border-b items-center">{credencial.codigo}</td>
                <td className="py-2 px-4 border-b items-center">{credencial.alumno}</td>
                <td className="py-2 px-4 border-b items-center">{credencial.rut}</td>
                <td className="py-2 px-4 border-b items-center">{credencial.estado}</td>
                <td className="py-2 px-4 border-b items-center">
                  <a href='https://www.google.com' target="_blank" rel="noopener noreferrer">Eliminar/Editar</a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  
  );
  
  
};

export default TablaCredenciales;
