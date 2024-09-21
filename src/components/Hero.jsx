import React from 'react';
import { Play } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative h-[70vh] bg-cover bg-center" style={{backgroundImage: 'url("https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")'}}>
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="absolute inset-0 flex items-center justify-start container mx-auto px-4">
        <div className="max-w-2xl text-white">
          <h1 className="text-5xl font-bold mb-4">Inception</h1>
          <p className="text-xl mb-6">A thief who enters the subconscious of his targets is offered a chance to regain his old life as payment for a task considered to be impossible.</p>
          <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-full flex items-center">
            <Play className="mr-2" /> Watch Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;