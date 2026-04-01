import { useParams, useNavigate } from 'react-router-dom';

const MovieDetail = ({ movies, toggleMyList, isInMyList }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const movie = movies.find(m => m.id === parseInt(id));

  if (!movie) {
    return <div className="pt-24 text-center text-2xl">Movie not found</div>;
  }

  return (
    <div className="pt-24 px-8 md:px-12">
      <button 
        onClick={() => navigate(-1)}
        className="mb-6 text-gray-400 hover:text-white flex items-center gap-2"
      >
        ← Back
      </button>

      <div className="flex flex-col md:flex-row gap-10">
        <div>
          <img src={movie.poster} alt={movie.name} className="w-96 rounded-2xl shadow-2xl" />
        </div>

        <div className="flex-1">
          <h1 className="text-5xl font-bold mb-4">{movie.name}</h1>
          {movie.year && <p className="text-2xl text-gray-400 mb-6">{movie.year}</p>}

          <button 
            onClick={() => window.open(movie.trailer, '_blank')}
            className="bg-red-600 hover:bg-red-700 px-12 py-4 rounded-lg text-xl font-semibold mb-8"
          >
            ▶ Play Trailer
          </button>

          <button
            onClick={() => toggleMyList(movie)}
            className="ml-4 px-8 py-4 border border-white rounded-lg hover:bg-white hover:text-black transition"
          >
            {isInMyList(movie.id) ? 'Remove from My List' : 'Add to My List'}
          </button>

          <p className="mt-10 text-gray-300 text-lg leading-relaxed">
            {movie.description || "No description available yet."}
          </p>

          {movie.categories && (
            <div className="mt-8">
              <p className="text-gray-400 mb-3">Categories</p>
              <div className="flex flex-wrap gap-3">
                {movie.categories.map((cat, i) => (
                  <span key={i} className="bg-zinc-800 px-4 py-2 rounded-full text-sm">
                    {cat}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;