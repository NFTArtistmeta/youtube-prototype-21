import React from 'react';

const movies = [
  { id: 1, title: 'The Matrix', image: 'https://images.unsplash.com/photo-1535016120720-40c646be5580?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
  { id: 2, title: 'Inception', image: 'https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
  { id: 3, title: 'Interstellar', image: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
  { id: 4, title: 'The Shawshank Redemption', image: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
  { id: 5, title: 'Pulp Fiction', image: 'https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
  { id: 6, title: 'The Dark Knight', image: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
];

const MovieGrid = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6 text-white">Popular Movies</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {movies.map((movie) => (
          <div key={movie.id} className="relative group">
            <img src={movie.image} alt={movie.title} className="w-full h-64 object-cover rounded-lg transition-transform duration-300 group-hover:scale-105" />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-opacity duration-300 rounded-lg flex items-center justify-center">
              <h3 className="text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">{movie.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieGrid;