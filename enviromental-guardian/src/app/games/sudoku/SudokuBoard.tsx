// HAcer un sudoku en typescript
import React, { useState } from 'react';
import SudokuCell from './SudokuCell';

interface SudokuBoardProps {
  initialBoard: number[][];
}

const SudokuBoard: React.FC<SudokuBoardProps> = ({ initialBoard }) => {
  const [board, setBoard] = useState(initialBoard);

  const handleCellChange = (row: number, col: number, value: number | null) => {
    const newBoard = [...board];
    newBoard[row][col] = value !== null ? value : 0;
        setBoard(newBoard);
  };

  return (
   
    <div className="grid grid-cols-9 gap-1 justify-items-center m-0">
      {board.map((row, rowIndex) => (
        row.map((cell, colIndex) => (
          <input
            key={`${rowIndex}-${colIndex}`}
            type="text"
            className={`
              w-8 h-8 text-center border
              ${colIndex % 3 === 2 && colIndex !== 8 ? 'border-r-2' : 'border-r-1'}
              ${rowIndex % 3 === 2 && rowIndex !== 8 ? 'border-b-2' : 'border-b-1'}
              rounded-md
            `}
            value={cell === 0 ? '' : cell}
            onChange={(e) => handleCellChange(rowIndex, colIndex, e.target.value === '' ? null : +e.target.value)}
          />
        ))
      ))}
    </div>
  
  );
};

export default SudokuBoard;
