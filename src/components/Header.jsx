import React from 'react';
import { Link } from 'react-router-dom';
import { Search, User } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-gray-900 text-white py-4">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold">MovieStream</Link>
        <nav>
          <ul className="flex space-x-6">
            <li><Link to="/" className="hover:text-gray-300">Home</Link></li>
            <li><Link to="/movies" className="hover:text-gray-300">Movies</Link></li>
            <li><Link to="/tv-shows" className="hover:text-gray-300">TV Shows</Link></li>
          </ul>
        </nav>
        <div className="flex items-center space-x-4">
          <Search className="h-5 w-5 cursor-pointer" />
          <User className="h-5 w-5 cursor-pointer" />
        </div>
      </div>
    </header>
  );
};

export default Header;
