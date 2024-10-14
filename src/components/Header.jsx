import React from 'react';
import { ShoppingBag } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <ShoppingBag className="h-6 w-6 text-indigo-600" />
          <span className="text-xl font-bold text-gray-800">Papelaria</span>
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#" className="text-gray-600 hover:text-indigo-600">Home</a></li>
            <li><a href="#" className="text-gray-600 hover:text-indigo-600">Products</a></li>
            <li><a href="#" className="text-gray-600 hover:text-indigo-600">About</a></li>
            <li><a href="#" className="text-gray-600 hover:text-indigo-600">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;