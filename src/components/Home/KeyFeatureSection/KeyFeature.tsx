'use client';

import { Card } from '@/components/ui/card';
import { useEffect } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';

export const KeyFeature = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true
    });
  }, []);

  return (
    <div className="max-w-7xl mx-auto py-12 sm:py-16 px-4 sm:px-6">
      <h2 
        className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12 text-black"
        data-aos="fade-down"
      >
        Why Choose TutorConnect?
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        <Card 
          className="p-4 sm:p-6 rounded-lg text-center hover:shadow-xl transition-all duration-300 bg-gradient-to-b from-white to-indigo-50 border border-indigo-100"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div className="text-3xl sm:text-4xl mb-3 sm:mb-4 text-indigo-600 bg-indigo-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center">
            <span className="text-indigo-600">✅</span>
          </div>
          <h3 className="text-lg sm:text-xl font-semibold mb-2 text-indigo-700">
            Find Tutors Fast
          </h3>
          <p className="text-sm sm:text-base text-gray-600">
            Instant search and smart filters to match you with the perfect tutor
            in seconds.
          </p>
        </Card>

        <Card 
          className="p-4 sm:p-6 rounded-lg text-center hover:shadow-xl transition-all duration-300 bg-gradient-to-b from-white to-indigo-50 border border-indigo-100"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div className="text-3xl sm:text-4xl mb-3 sm:mb-4 text-indigo-600 bg-indigo-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center">
            <span className="text-indigo-600">🔒</span>
          </div>
          <h3 className="text-lg sm:text-xl font-semibold mb-2 text-indigo-700">
            Secure Payments
          </h3>
          <p className="text-sm sm:text-base text-gray-600">
            Pay safely with trusted payment gateways and protected transactions.
          </p>
        </Card>

        <Card 
          className="p-4 sm:p-6 rounded-lg text-center hover:shadow-xl transition-all duration-300 bg-gradient-to-b from-white to-indigo-50 border border-indigo-100"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <div className="text-3xl sm:text-4xl mb-3 sm:mb-4 text-indigo-600 bg-indigo-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center">
            <span className="text-indigo-600">🛡️</span>
          </div>
          <h3 className="text-lg sm:text-xl font-semibold mb-2 text-indigo-700">
            Verified Profiles
          </h3>
          <p className="text-sm sm:text-base text-gray-600">
            All tutors are background-checked and credentials verified for your
            safety.
          </p>
        </Card>

        <Card 
          className="p-4 sm:p-6 rounded-lg text-center hover:shadow-xl transition-all duration-300 bg-gradient-to-b from-white to-indigo-50 border border-indigo-100"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <div className="text-3xl sm:text-4xl mb-3 sm:mb-4 text-indigo-600 bg-indigo-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center">
            <span className="text-indigo-600">🧠</span>
          </div>
          <h3 className="text-lg sm:text-xl font-semibold mb-2 text-indigo-700">
            Expert Support
          </h3>
          <p className="text-sm sm:text-base text-gray-600">
            Available for every subject and level, from elementary to college.
          </p>
        </Card>
      </div>
    </div>
  );
};