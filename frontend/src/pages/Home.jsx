import { useState } from 'react';
import { Link } from 'react-router-dom';

const Home = ({ movies,  toggleMyList, isInMyList }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchCategory, setSearchCategory] = useState('');

  const filteredMovies = movies.filter(movie => {
    const matchesSearch = movie.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = !searchCategory || 
      (movie.categories && movie.categories.includes(searchCategory));
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="pt-24 px-8 md:px-12">
      <h2 className="text-3xl font-semibold mb-8">Trending Now</h2>

      {/* Search & Category Filter */}
      <div className="flex gap-4 mb-8">
        <input
          type="text"
          placeholder="Search movies..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex-1 bg-zinc-800 px-5 py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-red-600"
        />
        <select 
          value={searchCategory}
          onChange={(e) => setSearchCategory(e.target.value)}
          className="bg-zinc-800 px-5 py-3 rounded-lg focus:outline-none"
        >
          <option value="">All Categories</option>
          {Array.from(new Set(movies.flatMap(m => m.categories || []))).map((cat, i) => (
            <option key={i} value={cat}>{cat}</option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
        {filteredMovies.map((movie) => (
          <div
            key={movie.id}
            onClick={() => window.location.href = `/movie/${movie.id}`}
            className="group relative cursor-pointer overflow-hidden rounded-xl hover:scale-105 transition-transform duration-300"
          >
            <img src={movie.poster} alt={movie.name} className="w-full aspect-[2/3] object-cover rounded-xl" />
            
            <button
              onClick={(e) => { e.stopPropagation(); toggleMyList(movie); }}
              className="absolute top-3 right-3 bg-black/60 hover:bg-black p-2 rounded-full"
            >
              {isInMyList(movie.id) ? '❤️' : '♡'}
            </button>

            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/70 to-transparent p-4 opacity-0 group-hover:opacity-100">
              <h3 className="font-semibold text-lg leading-tight">{movie.name}</h3>
              {movie.year && <p className="text-sm text-gray-400">{movie.year}</p>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;