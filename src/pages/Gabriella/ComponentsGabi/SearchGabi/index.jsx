// 2. Search/index.jsx
import React from 'react';
import { Search } from 'lucide-react';

export default function SearchBar({ pesquisa, setPesquisa }) {
  return (
    <div className="flex items-center gap-2 mb-4">
      <Search className="text-gray-500" />
      <input
        type="text"
        placeholder="Pesquisar contato..."
        value={pesquisa}
        onChange={(e) => setPesquisa(e.target.value)}
        className="w-full px-2 py-1 border rounded"
      />
    </div>
  );
}
