import React, { useState } from 'react';
import Modal from 'react-modal';

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
      contentLabel="Ejemplo de Modal"
    >
      <h2>Modal Content</h2>
      <label>
        Option 1:
        <select value={option1} onChange={(e) => setOption1(e.target.value)}>
          <option value="option1Value1">Opción 1 Valor 1</option>
          <option value="option1Value2">Opción 1 Valor 2</option>
        </select>
      </label>
      <br />
      <label>
        Option 2:
        <select value={option2} onChange={(e) => setOption2(e.target.value)}>
          <option value="option2Value1">Opción 2 Valor 1</option>
          <option value="option2Value2">Opción 2 Valor 2</option>
        </select>
      </label>
      <br />
      <label>
        Text Input:
        <input
          type="text"
          value={textInput}
          onChange={(e) => setTextInput(e.target.value)}
        />
      </label>
      <br />
      <button onClick={handleSave}>Guardar</button>
    </Modal>
  );
};

export default ModalCrearSolicitudes;
