import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import MovieGrid from '../components/MovieGrid';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="bg-gray-900 min-h-screen">
      <Header />
      <Hero />
      <div className="flex">
        <Sidebar />
        <main className="flex-grow">
          <MovieGrid />
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Index;
