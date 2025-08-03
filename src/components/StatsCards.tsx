import React from 'react';
import { Movie } from '../data/movieData';
import { Film, Star, Users, TrendingUp } from 'lucide-react';

interface StatsCardsProps {
  movies: Movie[];
}

export const StatsCards: React.FC<StatsCardsProps> = ({ movies }) => {
  const totalMovies = movies.length;
  const averageRating = (movies.reduce((sum, movie) => sum + movie.rating, 0) / movies.length).toFixed(1);
  const totalReviews = movies.reduce((sum, movie) => sum + movie.reviews, 0);
  const uniqueGenres = new Set(movies.map(movie => movie.genre)).size;

  const stats = [
    {
      title: 'Total Movies',
      value: totalMovies.toString(),
      icon: Film,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200'
    },
    {
      title: 'Average Rating',
      value: averageRating,
      icon: Star,
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50',
      borderColor: 'border-yellow-200'
    },
    {
      title: 'Total Reviews',
      value: totalReviews.toLocaleString(),
      icon: Users,
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200'
    },
    {
      title: 'Unique Genres',
      value: uniqueGenres.toString(),
      icon: TrendingUp,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <div 
          key={index}
          className={`bg-white rounded-lg shadow-md p-6 border transition-all duration-200 hover:shadow-lg hover:scale-105 ${stat.borderColor}`}
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">{stat.title}</p>
              <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
            </div>
            <div className={`p-3 rounded-lg ${stat.bgColor}`}>
              <stat.icon className={`h-6 w-6 ${stat.color}`} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};