import React from 'react';
import { Movie } from '../data/movieData';
import { Star, Trophy } from 'lucide-react';

interface TopMoviesProps {
  movies: Movie[];
}

export const TopMovies: React.FC<TopMoviesProps> = ({ movies }) => {
  const topMovies = [...movies]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 5);

  const getRankColor = (index: number) => {
    switch (index) {
      case 0: return 'text-yellow-500';
      case 1: return 'text-gray-400';
      case 2: return 'text-orange-600';
      default: return 'text-blue-500';
    }
  };

  const getRankBg = (index: number) => {
    switch (index) {
      case 0: return 'bg-yellow-50 border-yellow-200';
      case 1: return 'bg-gray-50 border-gray-200';
      case 2: return 'bg-orange-50 border-orange-200';
      default: return 'bg-blue-50 border-blue-200';
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center space-x-2 mb-4">
        <Trophy className="h-5 w-5 text-yellow-500" />
        <h3 className="text-lg font-semibold text-gray-800">Top 5 Highest Rated Movies</h3>
      </div>
      <div className="space-y-3">
        {topMovies.map((movie, index) => (
          <div 
            key={movie.movieId} 
            className={`p-4 rounded-lg border transition-all duration-200 hover:shadow-md ${getRankBg(index)}`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className={`text-2xl font-bold ${getRankColor(index)}`}>
                  #{index + 1}
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">{movie.title}</h4>
                  <p className="text-sm text-gray-600">{movie.genre}</p>
                </div>
              </div>
              <div className="text-right">
                <div className="flex items-center space-x-1">
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  <span className="text-lg font-bold text-gray-900">{movie.rating}</span>
                </div>
                <p className="text-xs text-gray-500">{movie.reviews.toLocaleString()} reviews</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};