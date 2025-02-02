import React from 'react';
import { Loader2 } from 'lucide-react';

const LoadingScreen = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
      <div className="text-center">
        <Loader2 className="w-12 h-12 animate-spin text-primary dark:text-primary mx-auto" />
        <p className="mt-4 text-gray-600 dark:text-gray-300 text-lg">Loading...</p>
      </div>
    </div>
  );
};

export default LoadingScreen;