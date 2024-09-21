import React from 'react';
import { X } from 'lucide-react';

const MovieModal = ({ movie, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-gray-800 rounded-lg p-8 max-w-2xl w-full mx-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-white">{movie.title}</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-white">
            <X size={24} />
          </button>
        </div>
        <img src={movie.image} alt={movie.title} className="w-full h-64 object-cover rounded-lg mb-4" />
        <p className="text-gray-300 mb-4">{movie.description}</p>
        <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
          Watch Now
        </button>
      </div>
    </div>
  );
};

export default MovieModal;