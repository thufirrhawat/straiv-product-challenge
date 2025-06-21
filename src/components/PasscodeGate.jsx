import React, { useState } from 'react';
import { Lock, Eye, EyeOff } from 'lucide-react';
import { setAuthStatus } from '../utils/storage';
import { PASSCODE, APP_CONFIG } from '../utils/constants';
import nuriPp from '../assets/images/nuri-pp.png';
import straivLogo from '../assets/images/straiv-logo.png';
import toast from 'react-hot-toast';

const PasscodeGate = ({ onAuthenticated }) => {
  const [passcode, setPasscode] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handlePasscodeChange = async (value) => {
    setPasscode(value);
    setError('');

    // Check if passcode matches
    if (value === PASSCODE) {
      setIsLoading(true);
      
      // Simulate authentication delay
      await new Promise(resolve => setTimeout(resolve, 800));
      
      // Show success toast
      toast.success('Welcome to Nuri\'s Product Challenge for Straiv Guest App 🎉', {
        duration: 2000,
        position: 'top-center',
        style: {
          background: '#10b981',
          color: '#fff',
        },
      });
      
      setAuthStatus(true);
      
      // Small delay to show the toast before redirecting
      setTimeout(() => {
        onAuthenticated();
      }, 500);
    } else if (value.length >= PASSCODE.length) {
      // Only show error if they've typed enough characters
      setError('Invalid passcode. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-base-100 flex items-center justify-center p-4">
      <div className="card w-full max-w-lg bg-base-100 shadow-xl border border-base-300">
        <div className="card-body items-center text-center py-12 px-8">
          
          {/* Header with two avatars */}
          <div className="flex items-center justify-center gap-6 mb-8">
            {/* Straiv Logo Avatar */}
            <div className="avatar">
              <div className="w-20 h-20 rounded-full ring ring-secondary ring-offset-base-100 ring-offset-2 bg-white flex items-center justify-center">
                <div className="flex items-center justify-center w-full h-full">
                  <img 
                    src={straivLogo} 
                    alt="Straiv Logo" 
                    className="object-contain block"
                    style={{ width: '50px', height: '12px' }}
                  />
                </div>
              </div>
            </div>
            
            {/* Diamond separator */}
            <div className="text-2xl font-bold text-base-content opacity-60">
              ◊
            </div>
            
            {/* Nuri Avatar */}
            <div className="avatar">
              <div className="w-20 h-20 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img 
                  src={nuriPp} 
                  alt="Nuri Profile Picture" 
                  className="rounded-full object-cover w-full h-full"
                />
              </div>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-3xl font-bold text-base-content mb-3">
            Product Challenge - Guest App
          </h1>
          <h2 className="text-base-content/70 mb-8 text-lg">
            Enter passcode provided in the mail to access
          </h2>

          {/* Form */}
          <div className="w-full space-y-6">
            <div className="form-control">
              <div className="flex gap-2">
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="enter passcode"
                  className={`input input-bordered input-lg flex-1 text-center text-lg ${error ? 'input-error' : ''} ${isLoading ? 'loading' : ''}`}
                  value={passcode}
                  onChange={(e) => handlePasscodeChange(e.target.value)}
                  disabled={isLoading}
                  autoFocus
                />
                <button
                  type="button"
                  className="btn btn-outline btn-lg"
                  onClick={() => setShowPassword(!showPassword)}
                  disabled={isLoading}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            {error && (
              <div className="alert alert-error">
                <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>{error}</span>
              </div>
            )}

            {isLoading && (
              <div className="flex justify-center">
                <span className="loading loading-spinner loading-lg text-primary"></span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Development hint (hidden in production) */}
      {process.env.NODE_ENV === 'development' && (
        <div className="fixed bottom-4 right-4 max-w-xs">
          <div className="alert alert-info shadow-lg">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current shrink-0 w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <div>
              <h3 className="font-bold text-sm">Development Mode</h3>
              <div className="text-xs opacity-80">
                Passcode: <code className="bg-base-200 px-1 rounded">{PASSCODE}</code>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PasscodeGate; 