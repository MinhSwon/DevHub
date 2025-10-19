import React from 'react';
import SportsEquipment from '../components/SportsEquipment';
import AthleteSilhouettes from '../components/AthleteSilhouettes';
import SocialIcons from '../components/SocialIcons';
import Logo from '../components/Logo';

const TestPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">🧪 Test Components</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Logo Test */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Logo</h2>
            <div className="flex justify-center">
              <Logo className="w-32 h-20" size="default" />
            </div>
          </div>

          {/* Sports Equipment Test */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Sports Equipment</h2>
            <div className="flex justify-center">
              <SportsEquipment />
            </div>
          </div>

          {/* Athlete Silhouettes Test */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Athlete Silhouettes</h2>
            <div className="flex justify-center">
              <AthleteSilhouettes />
            </div>
          </div>

          {/* Social Icons Test */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Social Icons</h2>
            <div className="flex justify-center">
              <SocialIcons />
            </div>
          </div>
        </div>

        <div className="mt-8 bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-4">All Components Together</h2>
          <div className="bg-gradient-to-br from-umt-blue via-blue-700 to-blue-900 text-white p-8 rounded-lg">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
              <div className="flex justify-center">
                <SportsEquipment />
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-4">UMT SPORTS HUB</h3>
                <p className="text-lg opacity-90">Test Banner Layout</p>
              </div>
              <div className="flex flex-col items-center space-y-4">
                <AthleteSilhouettes />
                <SocialIcons />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestPage;
