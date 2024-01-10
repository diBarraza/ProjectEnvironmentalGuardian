import React, { useState } from 'react';
import Modal from 'react-modal';
import SelectAlumnos from './select_alumnos';
import SelectEstados_credenciales from './select_estados_credenciales';

Modal.setAppElement('#root-modal-solicitudes');

const ModalCrearSolicitudes = ({ isOpen, onRequestClose,showAlert }) => {
  const [textInput, setTextInput] = useState('');
  
  const handleSave = async() => {
    // ... tu lógica para hacer la solicitud
    var codigoText = document.getElementById('codigo').value;
    var idAlumno = document.getElementById('alumno').value;
    var idEstadoCredencial = document.getElementById('estado_credencial').value;
    const response = await fetch('http://localhost:8000/credenciales/post_crear_credencial/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // Puedes agregar otros encabezados según sea necesario
      },
      
      body: JSON.stringify({
        "codigo": codigoText,
        "alumno": idAlumno,
        "estado_credencial": idEstadoCredencial
      }),
    });
    if (response.ok) {
      console.log('Guardado exitoso');
      showAlert("success", "Guardado exitoso desde el modal");
      
    } else {
      console.error('Error al guardar:', response.status);
      showAlert("error", "Error al guardar desde el modal");
    }

    onRequestClose();
  };

  return (
    
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Modal Creacion Solicitudes."
      className="p-6 bg-lime-300 rounded absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
    >
      <div>
        <button
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
          onClick={onRequestClose}>
          X
        </button>
        
        <h2 className="text-xl font-bold mb-4">Agregar solicitudes</h2>
        <label className="block mb-2">
          Código:
          <input
            className="border p-2 w-full rounded"
            type="text"
            value={textInput}
            onChange={(e) => setTextInput(e.target.value)}
            id='codigo'
          />
        </label>
        <label className="block mb-2">
          Alumno:
          <SelectAlumnos></SelectAlumnos>
        </label>
        <label className="block mb-2">
          Estado:
          <SelectEstados_credenciales></SelectEstados_credenciales>
        </label>
        
        <button
          className="bg-green-700 text-white py-2 px-4 rounded hover:bg-green-900"
          onClick={handleSave}
        >
          Guardar
        </button>
        <button
          className="bg-gray-300 text-gray-700 my-2 mx-1 py-2 px-4 rounded hover:bg-gray-400"
          onClick={onRequestClose}
        >
          Cerrar
        </button>
      </div>
    </Modal>
    
  );
};

export default ModalCrearSolicitudes;
