import React from 'react';

interface Props {
  categories: string[];
  onFilterChange: (category: string) => void;
}

const Filter: React.FC<Props> = ({ categories, onFilterChange }) => {
  return (
    <div className="mb-4">
      <select 
        className="border p-2 rounded"
        onChange={(e) => onFilterChange(e.target.value)}
      >
        <option value="">Todos</option>
        {categories.map((category, index) => (
          <option key={index} value={category}>{category}</option>
        ))}
      </select>
    </div>
  );
};

export default Filter;
