'use client';

import React from 'react';
import { useSearchParams } from 'next/navigation';
import { AlertCircle, Coins } from 'lucide-react';

export default function TokenBalancePage() {
  const searchParams = useSearchParams();
  const balance = searchParams.get('balance') || 'N/A';

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
        <Coins className="w-16 h-16 mx-auto mb-4 text-yellow-500" />
        <h1 className="text-3xl font-bold mb-2 text-white-800">Token Balance</h1>
        <p className="text-2xl font-semibold mb-6 text-blue-600" style={{'color':'#5068EE'}}>{balance} Tokens</p>
        
        <div className="bg-red-100 p-4 rounded-md mb-6">
          <AlertCircle className="w-8 h-8 mx-auto mb-2 text-red-500" />
          <h2 className="text-xl font-bold text-red-700 mb-2">Insufficient Balance</h2>
          <p className="text-sm text-red-600">Your current balance is too low to shop LuxuryVerse.</p>
        </div>

        <div className="p-4 rounded-md mb-6" style={{backgroundColor: '#1E1F1F'}}>
          <p className="text-sm text-white-500">To continue shopping, please purchase more tokens to meet the minimum required balance.</p>
        </div>

        <button 
          className="text-white px-6 py-2 rounded-md transition duration-300 btn2"
          style={{backgroundColor: '#5068EE','borderRadius':'1.5rem'}}
          onClick={() => window.open('https://app.uniswap.com', '_blank')}  
          >
      
          Purchase Tokens
        </button>
      </div>
    </div></div>
  );
}