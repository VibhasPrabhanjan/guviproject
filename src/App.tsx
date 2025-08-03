import React from 'react';
import { movieData } from './data/movieData';
import { Header } from './components/Header';
import { StatsCards } from './components/StatsCards';
import { MovieTable } from './components/MovieTable';
import { GenreBarChart } from './components/GenreBarChart';
import { GenrePieChart } from './components/GenrePieChart';
import { TopMovies } from './components/TopMovies';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Overview */}
        <div className="mb-8">
          <StatsCards movies={movieData} />
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <GenreBarChart movies={movieData} />
          <GenrePieChart movies={movieData} />
        </div>

        {/* Top Movies and Table Section */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          <div className="xl:col-span-1">
            <TopMovies movies={movieData} />
          </div>
          <div className="xl:col-span-2">
            <MovieTable movies={movieData} />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;