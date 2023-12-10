import React from 'react';

interface SudokuCellProps {
  value: number | null;
  readOnly: boolean;
  onChange: (value: number | null) => void;
}

const SudokuCell: React.FC<SudokuCellProps> = ({ value, readOnly, onChange }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    const newValue = inputValue !== '' ? parseInt(inputValue, 10) : null;
    onChange(newValue);
  };

  return (
    <input
      type="number"
      min="1"
      max="9"
      value={value !== null ? value : ''}
      readOnly={readOnly}
      onChange={handleChange}
      className={`sudoku-cell ${readOnly ? 'read-only' : ''}`}
    />
  );
};

export default SudokuCell;
