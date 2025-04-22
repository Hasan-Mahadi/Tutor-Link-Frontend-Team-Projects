'use client';
import React from 'react';
import Lottie from 'lottie-react';
import Plane from '../../../plane.json';

const Loading = () => {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="h-56 w-56 ">
        <Lottie animationData={Plane} />
      </div>
    </div>
  );
};

export default Loading;
