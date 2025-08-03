import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import { Movie } from '../data/movieData';

interface GenrePieChartProps {
  movies: Movie[];
}

const COLORS = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6', '#06b6d4', '#84cc16'];

export const GenrePieChart: React.FC<GenrePieChartProps> = ({ movies }) => {
  const genreCounts = movies.reduce((acc, movie) => {
    acc[movie.genre] = (acc[movie.genre] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const chartData = Object.entries(genreCounts).map(([genre, count]) => ({
    genre,
    count,
    percentage: ((count / movies.length) * 100).toFixed(1)
  }));

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="bg-white p-3 border border-gray-200 rounded-lg shadow-lg">
          <p className="text-sm font-medium text-gray-800">{`Genre: ${data.genre}`}</p>
          <p className="text-sm text-blue-600">{`Movies: ${data.count}`}</p>
          <p className="text-sm text-green-600">{`Percentage: ${data.percentage}%`}</p>
        </div>
      );
    }
    return null;
  };

  const renderLabel = ({ genre, percentage }: any) => {
    return `${genre} (${percentage}%)`;
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Movie Distribution by Genre</h3>
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={chartData}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={renderLabel}
              outerRadius={100}
              fill="#8884d8"
              dataKey="count"
              className="outline-none"
            >
              {chartData.map((entry, index) => (
                <Cell 
                  key={`cell-${index}`} 
                  fill={COLORS[index % COLORS.length]}
                  className="hover:opacity-80 transition-opacity cursor-pointer"
                />
              ))}
            </Pie>
            <Tooltip content={<CustomTooltip />} />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};