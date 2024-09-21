import React from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import MovieGrid from '../components/MovieGrid';

const tvShows = [
  { id: 1, title: 'Stranger Things', image: 'https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60', description: 'A group of kids face supernatural forces and secret government exploits in their small town.' },
  { id: 2, title: 'The Crown', image: 'https://images.unsplash.com/photo-1608170825938-a8ea0305d46c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60', description: 'Follows the political rivalries and romance of Queen Elizabeth II\'s reign and the events that shaped the second half of the 20th century.' },
  { id: 3, title: 'Breaking Bad', image: 'https://images.unsplash.com/photo-1627873649417-c67f701f1949?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60', description: 'A high school chemistry teacher turned methamphetamine producer partners with a former student.' },
  { id: 4, title: 'Game of Thrones', image: 'https://images.unsplash.com/photo-1624375147958-678d8f4ea269?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60', description: 'Nine noble families fight for control over the lands of Westeros, while an ancient enemy returns.' },
  { id: 5, title: 'The Mandalorian', image: 'https://images.unsplash.com/photo-1608346128025-1896b97a6fa7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60', description: 'The travels of a lone bounty hunter in the outer reaches of the galaxy, far from the authority of the New Republic.' },
  { id: 6, title: 'The Witcher', image: 'https://images.unsplash.com/photo-1626197031507-c17099753214?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60', description: 'Geralt of Rivia, a solitary monster hunter, struggles to find his place in a world where people often prove more wicked than beasts.' },
];

const TVShowsPage = () => {
  return (
    <div className="bg-gray-900 min-h-screen">
      <Header />
      <div className="flex">
        <Sidebar />
        <main className="flex-grow">
          <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold text-white mb-6">TV Shows</h1>
            <MovieGrid movies={tvShows} />
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default TVShowsPage;