import React, { useState } from 'react';
import MovieModal from './MovieModal';

const movies = [
  { id: 1, title: 'The Matrix', image: 'https://images.unsplash.com/photo-1535016120720-40c646be5580?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60', description: 'A computer programmer discovers a dystopian world ruled by machines.' },
  { id: 2, title: 'Inception', image: 'https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60', description: 'A thief enters people\'s dreams to steal their secrets.' },
  { id: 3, title: 'Interstellar', image: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60', description: 'Explorers travel through a wormhole in search of a new home for humanity.' },
  { id: 4, title: 'The Shawshank Redemption', image: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60', description: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.' },
  { id: 5, title: 'Pulp Fiction', image: 'https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60', description: 'The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.' },
  { id: 6, title: 'The Dark Knight', image: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60', description: 'Batman faces off against the Joker in a battle for Gotham City\'s soul.' },
];

const MovieGrid = () => {
  const [selectedMovie, setSelectedMovie] = useState(null);

  const openModal = (movie) => {
    setSelectedMovie(movie);
  };

  const closeModal = () => {
    setSelectedMovie(null);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6 text-white">Popular Movies</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {movies.map((movie) => (
          <div key={movie.id} className="relative group cursor-pointer" onClick={() => openModal(movie)}>
            <img src={movie.image} alt={movie.title} className="w-full h-64 object-cover rounded-lg transition-transform duration-300 group-hover:scale-105" />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-opacity duration-300 rounded-lg flex items-center justify-center">
              <h3 className="text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">{movie.title}</h3>
            </div>
          </div>
        ))}
      </div>
      {selectedMovie && (
        <MovieModal movie={selectedMovie} onClose={closeModal} />
      )}
    </div>
  );
};

export default MovieGrid;
