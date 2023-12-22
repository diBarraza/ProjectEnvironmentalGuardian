// components/EndGameButton.tsx
import React from 'react';

interface EndGameButtonProps {
  onClick: () => void;
}

const EndGameButton: React.FC<EndGameButtonProps> = ({ onClick }) => {
  return (
    <button onClick={onClick} style={{ padding: '10px', fontSize: '16px', margin: '10px' }}>
      Finalizar Partida
    </button>
  );
};

export default EndGameButton;
