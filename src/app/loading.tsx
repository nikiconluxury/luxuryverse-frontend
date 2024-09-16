import React from 'react';
import { Loader2 } from 'lucide-react';

const LoadingPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-transparent">
      <Loader2 className="w-12 h-12 text-white animate-spin" />
      <h2 className="mt-4 text-xl font-semibold text-white">Loading...</h2>
      <p className="mt-2 text-white">Please wait while we fetch your content.</p>
    </div>
  );
};

export default LoadingPage;