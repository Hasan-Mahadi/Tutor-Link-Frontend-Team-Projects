'use client';

import Lottie from 'lottie-react';
import animationData from '../../plane.json';

export default function LottieClient() {
  return <Lottie animationData={animationData} loop autoplay />;
}
