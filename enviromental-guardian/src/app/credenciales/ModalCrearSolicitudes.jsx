import React, { useState } from 'react';
import Modal from 'react-modal';
import SelectAlumnos from './select_alumnos';
import SelectEstados_credenciales from './select_estados_credenciales';
Modal.setAppElement('#root-modal-solicitudes'); // Asegúrate de ajustar el ID según el elemento raíz de tu aplicación

const ModalCrearSolicitudes = ({ isOpen, onRequestClose }) => {
  const [option1, setOption1] = useState('');
  const [option2, setOption2] = useState('');
  const [textInput, setTextInput] = useState('');
  const handleSave = () => {
    console.log('Option 1:', option1);
    console.log('Option 2:', option2);
    console.log('Text Input:', textInput);
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
          onClick={onRequestClose}
        >
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
