// TablaCredenciales.jsx
import React, { useEffect, useState } from 'react';
import 'tailwindcss/tailwind.css';
import ModalCrearSolicitudes from './ModalCrearSolicitudes';
import AlertaMensaje from '../component/AlertaMensaje';
import BackButton from '../component/BackButton';

const TablaCredenciales = ({id_lote}) => {
  
  const [credencialesData, setCredencialesData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [alertMessage, setAlertMessage] = useState({ type: 'success', message: 'Todo Bien!' });

  const showAlert = (type, message) => {
    setAlertMessage({ type, message });
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:8000/credenciales/get_credenciales/`);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }else{
          
          const timer = setTimeout(() => {
            showAlert("success", "Credenciales Cargadas.");
          }, 3000);
        }
        const data = await response.json();
        setCredencialesData(data);
      } catch (error) {
        showAlert("error", "Error al cargar los datos"+error.message);
      }
    };
    fetchData();
  }, [id_lote]);
  // Transforma el objeto en un array
  const arrayCredenciales = credencialesData.credenciales || [];
  return (
    <div className="p-1">
      <AlertaMensaje id="alertaCredenciales" type={alertMessage.type} message={alertMessage.message}></AlertaMensaje>
      <div className='container py-10 px-10 mx-0 min-w-full flex flex-col'>
        <div className='flex justify-between items-center'>
          <h1 className="text-2xl font-bold mb-4">Tabla de Credenciales</h1>
          <div className='flex flex-row'>
            <BackButton />
            <button className='bg-green-900 mx-1 text-white hover:bg-blue-400 font-bold py-2 px-4 mt-3 rounded'>Buscar</button>
            <button className='bg-green-900 mx-1 text-white hover:bg-blue-400 font-bold py-2 px-4 mt-3 rounded' onClick={openModal} >Agregar</button>
            <ModalCrearSolicitudes isOpen={isModalOpen} onRequestClose={closeModal} showAlert={showAlert}  />  
          </div>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300 table-auto">
          <thead className="bg-gray-200 text-left">
            <tr>
              <th className="py-2 px-4 border-b">ID</th>
              <th className="py-2 px-4 border-b">Código</th>
              <th className="py-2 px-4 border-b">Lote</th>
              <th className="py-2 px-4 border-b">Estado Credencial</th>
              <th className="py-2 px-4 border-b">Fecha Creación</th>
              <th className="py-2 px-4 border-b">Fecha Entrega</th>
              <th className="py-2 px-4 border-b">Acciones</th>

            </tr>
          </thead>
          <tbody>
            {arrayCredenciales.map((credencial) => (
              <tr key={credencial.id} className="hover:bg-gray-100 bg-lime-500">
                <td className="py-2 px-4 border-b items-center">{credencial.id}</td>
                <td className="py-2 px-4 border-b items-center">{credencial.codigo}</td>
                <td className="py-2 px-4 border-b items-center">{credencial.lote}</td>
                <td className="py-2 px-4 border-b items-center">{credencial.estado_credencial}</td>
                <td className="py-2 px-4 border-b items-center">{credencial.fecha_creacion}</td>
                <td className="py-2 px-4 border-b items-center">{credencial.fecha_entrega}</td>
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
