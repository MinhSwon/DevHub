import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen bg-blue-500">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center text-white mb-8">
          <h1 className="text-5xl font-bold mb-4">🏟️ UMT SPORT HUB</h1>
          <p className="text-xl">Trải nghiệm thể thao thông minh cùng UMT</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Link to="/dashboard" className="bg-white rounded-lg p-6 text-center hover:bg-gray-100 transition-colors">
            <div className="text-4xl mb-2">📊</div>
            <h3 className="text-lg font-semibold">Dashboard</h3>
          </Link>
          
          <Link to="/community" className="bg-white rounded-lg p-6 text-center hover:bg-gray-100 transition-colors">
            <div className="text-4xl mb-2">👥</div>
            <h3 className="text-lg font-semibold">Community</h3>
          </Link>
          
          <Link to="/events" className="bg-white rounded-lg p-6 text-center hover:bg-gray-100 transition-colors">
            <div className="text-4xl mb-2">🎉</div>
            <h3 className="text-lg font-semibold">Events</h3>
          </Link>
          
          <Link to="/training" className="bg-white rounded-lg p-6 text-center hover:bg-gray-100 transition-colors">
            <div className="text-4xl mb-2">💪</div>
            <h3 className="text-lg font-semibold">Training</h3>
          </Link>
          
          <Link to="/teams" className="bg-white rounded-lg p-6 text-center hover:bg-gray-100 transition-colors">
            <div className="text-4xl mb-2">👥</div>
            <h3 className="text-lg font-semibold">Teams</h3>
          </Link>
          
          <Link to="/profile" className="bg-white rounded-lg p-6 text-center hover:bg-gray-100 transition-colors">
            <div className="text-4xl mb-2">👤</div>
            <h3 className="text-lg font-semibold">Profile</h3>
          </Link>
          
          <Link to="/media" className="bg-white rounded-lg p-6 text-center hover:bg-gray-100 transition-colors">
            <div className="text-4xl mb-2">🎥</div>
            <h3 className="text-lg font-semibold">Media</h3>
          </Link>
          
          <Link to="/achievements" className="bg-white rounded-lg p-6 text-center hover:bg-gray-100 transition-colors">
            <div className="text-4xl mb-2">🏆</div>
            <h3 className="text-lg font-semibold">Achievements</h3>
          </Link>
        </div>
        
      </div>
    </div>
  );
};

export default Home;