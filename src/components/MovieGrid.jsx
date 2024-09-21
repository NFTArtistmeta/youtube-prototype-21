import React, { useState } from 'react';
import MovieModal from './MovieModal';

const MovieGrid = ({ movies }) => {
  const [selectedMovie, setSelectedMovie] = useState(null);

  const openModal = (movie) => {
    setSelectedMovie(movie);
  };

  const closeModal = () => {
    setSelectedMovie(null);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {movies.map((movie) => (
        <div key={movie.id} className="relative group cursor-pointer" onClick={() => openModal(movie)}>
          <img src={movie.image} alt={movie.title} className="w-full h-64 object-cover rounded-lg transition-transform duration-300 group-hover:scale-105" />
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-opacity duration-300 rounded-lg flex items-center justify-center">
            <h3 className="text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">{movie.title}</h3>
          </div>
        </div>
      ))}
      {selectedMovie && (
        <MovieModal movie={selectedMovie} onClose={closeModal} />
      )}
    </div>
  );
};

export default MovieGrid;
