import React from 'react';

const TestPage = () => {
  return (
    <div className="min-h-screen bg-blue-500 flex items-center justify-center">
      <div className="text-white text-center">
        <h1 className="text-4xl font-bold mb-4">✅ Test Page Working!</h1>
        <p className="text-xl">UMT Sport Hub is running successfully!</p>
        <div className="mt-8">
          <a href="/" className="bg-white text-blue-500 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors">
            Back to Home
          </a>
        </div>
      </div>
    </div>
  );
};

export default TestPage;