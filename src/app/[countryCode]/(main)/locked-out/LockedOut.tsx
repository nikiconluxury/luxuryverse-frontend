'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { LockIcon, WalletIcon } from 'lucide-react';

export default function LockedOut() {
  const router = useRouter();
  const handleLearnMore = () => {
    router.push('/us/buy');
    // alert('Please use the Connect Wallet button in the navigation bar.');

  };

  return (
    <div className='hero-wrapper hero-1 home-purple-gradient py-10'>
    <div className="hero-bg-gradient">
    </div>
    <div className="ripple-shape">
       <span className="ripple-1"></span>
       <span className="ripple-2"></span>
       <span className="ripple-3"></span>
       <span className="ripple-4"></span>
       <span className="ripple-5"></span>
    </div>
    <div className="flex flex-col items-center justify-center min-h-screen px-4">
      <div className="p-8 rounded-lg shadow-md max-w-md w-full text-center" style={{backgroundColor: '#121313'}}>
        <LockIcon className="w-16 h-16 mx-auto mb-4 text-red-400" />
        <h1 className="text-3xl font-bold mb-2 text-white-800">Access Restricted</h1>
        <p className="text-xl mb-6 text-white-600">Connect your wallet to shop LuxuryVerse!</p>
        <div className="bg-gray-100 p-4 rounded-md mb-6"style={{backgroundColor: '#1E1F1F'}}>
          <WalletIcon className="w-8 h-8 mx-auto mb-2 text-gray-500" />
          <p className="text-sm text-white-700">Use the &quot;Connect Wallet&quot; button in the navigation bar to sign in and access exclusive offers.</p>
        </div>
        <button 
          className="text-white px-6 py-2 rounded-md transition duration-300 btn2"
          onClick={handleLearnMore}
          style={{backgroundColor: '#5068EE','borderRadius':'1.5rem'}}
        >
          Learn More
        </button>
      </div>
    </div> </div>
  );
}