'use client';
import React from 'react';

const Loading = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="loading-ring" />
      <style jsx>{`
        .loading-ring {
          border: 4px solid #e5e7eb; /* Light gray */
          border-top: 4px solid #3b82f6; /* Blue */
          border-radius: 50%;
          width: 48px;
          height: 48px;
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }

          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
};

export default Loading;
