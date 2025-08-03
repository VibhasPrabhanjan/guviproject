import React from 'react';
import { Film, BarChart3 } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-2">
              <Film className="h-8 w-8 text-blue-600" />
              <BarChart3 className="h-6 w-6 text-blue-500" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">Movie Ratings Dashboard</h1>
              <p className="text-sm text-gray-600">Analyze movie performance and trends</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="text-right">
              <p className="text-sm font-medium text-gray-900">Data Analytics</p>
              <p className="text-xs text-gray-500">Real-time insights</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};