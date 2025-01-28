// Category.tsx
import React from 'react';

const Category = ({ categories, onSelect }: { categories: string[]; onSelect: (category: string) => void }) => {
  return (
    <div className="p-6 bg-gray-100 rounded-lg">
      <h2 className="text-lg font-bold mb-4">Categories</h2>
      <ul className="space-y-2">
        {categories.map((category) => (
          <li key={category}>
            <button
              className="text-blue-500 hover:underline"
              onClick={() => onSelect(category)}
            >
              {category}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Category;