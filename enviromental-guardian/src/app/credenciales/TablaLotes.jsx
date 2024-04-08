import React, { useEffect, useState } from 'react';
import 'tailwindcss/tailwind.css';
import AlertaMensaje from './../component/AlertaMensaje';
import { BrowserRouter as Link } from 'react-router-dom';

const TablaLotes = () => {
  
  const [credencialesLotesData, setCredencialesLotesData] = useState([]);
  

  const [alertMessage, setAlertMessage] = useState({ type: 'success', message: 'Todo Bien!' });

  const showAlert = (type, message) => {
    setAlertMessage({ type, message });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/credenciales/get_lotes/');
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }else{
          showAlert("success", "Lotes Cargados.");
        }
        const data = await response.json();
        setCredencialesLotesData(data);
      } catch (error) {
        showAlert("error", "Error al cargar los Lotes"+error.message);
        console.log("error");
      }
    };
    fetchData();
  }, []);
  // Transforma el objeto en un array
  const arrayLotes = credencialesLotesData.lotes || [];



  return (
    
    
    <div className="p-1">
      <AlertaMensaje id="alertaCredenciales" type={alertMessage.type} message={alertMessage.message}></AlertaMensaje>
      <div className='container py-10 px-10 mx-0 min-w-full flex flex-col'>
        <div className='flex justify-between items-center'>
          <h1 className="text-2xl font-bold mb-4">Sistema de control de credenciales: Tabla de Lotes</h1>
          <div className='flex flex-row'>
            <button className='bg-green-900 text-white hover:bg-blue-400 font-bold py-2 px-4 mt-3 rounded'>Buscar</button>
          </div>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300 table-auto">
          <thead className="bg-gray-200 text-left">
            <tr>
              <th className="py-2 px-4 border-b">ID</th>
              <th className="py-2 px-4 border-b">Tipo</th>
              <th className="py-2 px-4 border-b">Fecha Emisión</th>
              <th className="py-2 px-4 border-b">Cantidad Credenciales</th>
              <th className="py-2 px-4 border-b">Estado</th>
              <th className="py-2 px-4 border-b">Fecha Recepcionado</th>
              <th className="py-2 px-4 border-b">Acciones</th>
              
            </tr>
          </thead>
          <tbody>
            {arrayLotes.map((lote) => (
              <tr key={lote.id} className="hover:bg-gray-100 bg-lime-500">
                <td className="py-2 px-4 border-b items-center">{lote.id}</td>
                <td className="py-2 px-4 border-b items-center">{lote.tipo}</td>
                <td className="py-2 px-4 border-b items-center">{lote.fecha_emision}</td>
                <td className="py-2 px-4 border-b items-center">{lote.cantidad_credenciales}</td>
                <td className="py-2 px-4 border-b items-center">{lote.estado}</td>
                <td className="py-2 px-4 border-b items-center">{lote.fecha_recepcionado}</td>
                <td className="py-2 px-4 border-b items-center">
                  <a href={`/credenciales/detalle_credenciales/${lote.id}`}>Ver Credenciales</a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  
  );
  
  
};

export default TablaLotes;
