import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Movie } from '../data/movieData';

interface GenreBarChartProps {
  movies: Movie[];
}

export const GenreBarChart: React.FC<GenreBarChartProps> = ({ movies }) => {
  const genreData = movies.reduce((acc, movie) => {
    if (!acc[movie.genre]) {
      acc[movie.genre] = { totalRating: 0, count: 0 };
    }
    acc[movie.genre].totalRating += movie.rating;
    acc[movie.genre].count += 1;
    return acc;
  }, {} as Record<string, { totalRating: number; count: number }>);

  const chartData = Object.entries(genreData).map(([genre, data]) => ({
    genre,
    avgRating: Number((data.totalRating / data.count).toFixed(2))
  })).sort((a, b) => b.avgRating - a.avgRating);

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-3 border border-gray-200 rounded-lg shadow-lg">
          <p className="text-sm font-medium text-gray-800">{`Genre: ${label}`}</p>
          <p className="text-sm text-blue-600">
            {`Average Rating: ${payload[0].value}`}
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Average Rating by Genre</h3>
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis 
              dataKey="genre" 
              tick={{ fontSize: 12 }}
              stroke="#6b7280"
            />
            <YAxis 
              tick={{ fontSize: 12 }}
              stroke="#6b7280"
              domain={[0, 10]}
            />
            <Tooltip content={<CustomTooltip />} />
            <Bar 
              dataKey="avgRating" 
              fill="#3b82f6"
              radius={[4, 4, 0, 0]}
              className="hover:opacity-80 transition-opacity"
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};