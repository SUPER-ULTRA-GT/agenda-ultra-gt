import { Search } from 'lucide-react';

const SearchBar = ({ value, onChange }) => (
    <div className="relative w-full max-w-[400px] mb-8">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black" />
        <input
            type="text"
            placeholder="Pesquisar contato"
            value={value}
            onChange={onChange}
            className="w-full pl-10 pr-4 py-2 rounded-md border border-black focus:outline-none focus:ring-2 focus:ring-gray-400"
        />
    </div>
);

export default SearchBar;