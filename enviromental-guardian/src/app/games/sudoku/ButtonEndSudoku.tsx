// pages/sudoku.tsx
import React from 'react';
import EndGameButton from '../sudoku/EndGameButton';

const SudokuPage: React.FC = () => {
  // Tu lógica de Sudoku aquí

  const handleEndGame = () => {
    // Lógica para finalizar la partida, por ejemplo, reiniciar el juego o mostrar un mensaje de victoria
    console.log('Partida finalizada');
  };

  return (
    <div>
      {/* Tu contenido de Sudoku aquí */}
      <p>Tu contenido de Sudoku va aquí...</p>

      {/* Componente de botón al final de la partida */}
      <EndGameButton onClick={handleEndGame} />
    </div>
  );
};

export default SudokuPage;
