import React, { useState, useEffect } from 'react';

const SelectAlumnos = ({ onSelect }) => {
  const [alumnos, setAlumnos] = useState([]);
  const [selectedAlumno, setSelectedAlumno] = useState('');

  // Simula la obtención de la lista de alumnos
  useEffect(() => {
    const obtenerAlumnos = async () => {
      try{
      // Simula una llamada a una API
      const response = await fetch('http://127.0.0.1:8000/credenciales/get_alumnos/');
      const data = await response.json();
      setAlumnos([{ id: 0, nombre: 'Seleccionar', rut: '' }, ...data.alumnos]);
      }catch(error){
        console.error('Error fetching data:', error.message);
      }
      
    };
    obtenerAlumnos();
  }, []);

  const handleAlumnoChange = (e) => {
    setSelectedAlumno(e.target.value);
    //onSelect(e.target.value);
  };

  return (
    <select
      className="border p-2 w-full rounded"
      value={selectedAlumno}
      onChange={handleAlumnoChange}
      id='alumno'
    >
      {alumnos.map((alumno) => (
        <option key={alumno.id} value={alumno.id}>
          {alumno.nombre}  {alumno.rut}
        </option>
      ))}
    </select>
  );
};

export default SelectAlumnos;
