import React, { useState, useEffect } from 'react';

const SelectEstados_credenciales = ({ onSelect }) => {
  const [estados_credenciales, setEstados_credenciales] = useState([]);
  const [selectedEstados_credenciales, setSelectedEstados_credenciales] = useState('');

  // Simula la obtención de la lista de estados de credenciales
  useEffect(() => {
    const obtenerEstados_credenciales = async () => {
      try{
      // Simula una llamada a una API
      const response = await fetch('http://127.0.0.1:8000/credenciales/get_estados_credenciales/');
      const data = await response.json();
      setEstados_credenciales([{ id: 0, nombre: 'Seleccionar', descripcion: '' }, ...data.estados_credenciales]);
      }catch(error){
        console.error('Error fetching data:', error.message);
      }
      
    };
    obtenerEstados_credenciales();
  }, []);

  const handleEstadoCredencialChange = (e) => {
    setSelectedEstados_credenciales(e.target.value);
    //onSelect(e.target.value);
  };
  
  return (
    <select
      className="border p-2 w-full rounded"
      value={selectedEstados_credenciales}
      onChange={handleEstadoCredencialChange}
    >
      {estados_credenciales.map((estado) => (
        <option key={estado.id} value={estado.nombre}>
          {estado.nombre} 
        </option>
      ))}
    </select>
  );
};

export default SelectEstados_credenciales;
