import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import MovieGrid from '../components/MovieGrid';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';

const movies = [
  { id: 1, title: 'The Matrix', image: 'https://images.unsplash.com/photo-1535016120720-40c646be5580?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60', description: 'A computer programmer discovers a dystopian world ruled by machines.' },
  { id: 2, title: 'Inception', image: 'https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60', description: 'A thief enters people\'s dreams to steal their secrets.' },
  { id: 3, title: 'Interstellar', image: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60', description: 'Explorers travel through a wormhole in search of a new home for humanity.' },
  { id: 4, title: 'The Shawshank Redemption', image: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60', description: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.' },
  { id: 5, title: 'Pulp Fiction', image: 'https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60', description: 'The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.' },
  { id: 6, title: 'The Dark Knight', image: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60', description: 'Batman faces off against the Joker in a battle for Gotham City\'s soul.' },
];

const Index = () => {
  return (
    <div className="bg-gray-900 min-h-screen">
      <Header />
      <Hero />
      <div className="flex">
        <Sidebar />
        <main className="flex-grow">
          <div className="container mx-auto px-4 py-8">
            <h2 className="text-2xl font-bold mb-6 text-white">Popular Movies</h2>
            <MovieGrid movies={movies} />
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Index;
