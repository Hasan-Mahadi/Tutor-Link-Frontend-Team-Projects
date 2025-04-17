 'use client';
 
 
 import { useEffect } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';

export const HowItWorks = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true
    });
  }, []);

  const steps = [
    {
      number: 1,
      title: 'Find Your Tutor',
      description: 'Search our database of qualified tutors and filter by subject, availability, price, and ratings.',
      icon: '🔍'
    },
    {
      number: 2,
      title: 'Connect & Schedule',
      description: 'Message tutors directly and schedule sessions at times that work for you.',
      icon: '📅'
    },
    {
      number: 3,
      title: 'Start Learning',
      description: 'Meet online or in-person and begin your learning journey with expert guidance.',
      icon: '🎯'
    },
  ];

  return (
    <div className="max-w-7xl mx-auto py-12 sm:py-16 px-4 sm:px-6 bg-gradient-to-b from-white to-indigo-50">
      <h2 
        className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12 text-black"
        data-aos="fade-down"
      >
        How It Works
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8">
        {steps.map((step, index) => (
          <div 
            key={step.number}
            className="group relative text-center p-6 sm:p-8 rounded-xl bg-white border border-indigo-100 hover:border-indigo-200 shadow-sm hover:shadow-lg transition-all duration-300"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <div className="bg-gradient-to-r from-indigo-600 to-indigo-500 w-12 h-12 sm:w-16 sm:h-16 mx-auto rounded-full flex items-center justify-center text-white text-xl sm:text-2xl font-bold mb-3 sm:mb-4 shadow-md group-hover:scale-110 transition-transform duration-300">
                <span className="absolute">{step.icon}</span>
                <span className="sr-only">Step {step.number}</span>
              </div>
            </div>
            <div className="pt-10">
              <h3 className="text-lg sm:text-xl font-semibold mb-3 text-indigo-700">
                {step.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-600">
                {step.description}
              </p>
            </div>
            <div className="mt-4">
              <div className="w-8 h-1 bg-gradient-to-r from-indigo-400 to-indigo-300 mx-auto rounded-full group-hover:w-12 transition-all duration-300"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};