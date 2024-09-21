import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Film, Tv, Star, Clock } from 'lucide-react';

const Sidebar = () => {
  return (
    <aside className="bg-gray-800 text-white w-64 min-h-screen p-4">
      <nav>
        <ul className="space-y-4">
          <li>
            <Link to="/" className="flex items-center space-x-2 hover:text-gray-300">
              <Home className="h-5 w-5" />
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link to="/movies" className="flex items-center space-x-2 hover:text-gray-300">
              <Film className="h-5 w-5" />
              <span>Movies</span>
            </Link>
          </li>
          <li>
            <Link to="/tv-shows" className="flex items-center space-x-2 hover:text-gray-300">
              <Tv className="h-5 w-5" />
              <span>TV Shows</span>
            </Link>
          </li>
          <li>
            <a href="#" className="flex items-center space-x-2 hover:text-gray-300">
              <Star className="h-5 w-5" />
              <span>Top Rated</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center space-x-2 hover:text-gray-300">
              <Clock className="h-5 w-5" />
              <span>Coming Soon</span>
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
