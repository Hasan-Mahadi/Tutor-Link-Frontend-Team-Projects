'use client';

/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
 import { Card } from '@/components/ui/card';
import { useEffect } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';

export const Testimonials = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true
    });
  }, []);

  return (
    <div className="bg-gradient-to-b from-indigo-50 to-white py-12 sm:py-16 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <h2 
          className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12 text-black"
          data-aos="fade-down"
        >
          What Our Students Say
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {/* Testimonial 1 */}
          <Card 
            className="p-4 sm:p-6 rounded-lg bg-white hover:shadow-xl transition-all duration-300 border border-indigo-100 hover:border-indigo-200"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="flex items-center mb-3 sm:mb-4">
              <div className="relative">
                <img
                  src="https://randomuser.me/api/portraits/women/32.jpg"
                  alt="Student"
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full mr-3 sm:mr-4 border-2 border-indigo-100"
                />
                <div className="absolute -bottom-1 -right-1 bg-indigo-600 rounded-full p-1">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-sm sm:text-base text-indigo-700">
                  Sarah Johnson
                </h4>
                <div className="flex text-yellow-400 text-sm sm:text-base">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
              </div>
            </div>
            <p className="text-sm sm:text-base text-gray-600 italic">
              "My math tutor helped me raise my grade from a C to an A in just
              two months! The personalized approach made all the difference."
            </p>
          </Card>

          {/* Testimonial 2 */}
          <Card 
            className="p-4 sm:p-6 rounded-lg bg-white hover:shadow-xl transition-all duration-300 border border-indigo-100 hover:border-indigo-200"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="flex items-center mb-3 sm:mb-4">
              <div className="relative">
                <img
                  src="https://randomuser.me/api/portraits/men/45.jpg"
                  alt="Student"
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full mr-3 sm:mr-4 border-2 border-indigo-100"
                />
                <div className="absolute -bottom-1 -right-1 bg-indigo-600 rounded-full p-1">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-sm sm:text-base text-indigo-700">
                  Michael Chen
                </h4>
                <div className="flex text-yellow-400 text-sm sm:text-base">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
              </div>
            </div>
            <p className="text-sm sm:text-base text-gray-600 italic">
              "The chemistry tutor I found was amazing. Flexible scheduling and
              really knew how to explain complex concepts simply."
            </p>
          </Card>

          {/* Testimonial 3 */}
          <Card 
            className="p-4 sm:p-6 rounded-lg bg-white hover:shadow-xl transition-all duration-300 border border-indigo-100 hover:border-indigo-200"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="flex items-center mb-3 sm:mb-4">
              <div className="relative">
                <img
                  src="https://randomuser.me/api/portraits/women/68.jpg"
                  alt="Student"
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full mr-3 sm:mr-4 border-2 border-indigo-100"
                />
                <div className="absolute -bottom-1 -right-1 bg-indigo-600 rounded-full p-1">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-sm sm:text-base text-indigo-700">
                  Emily Rodriguez
                </h4>
                <div className="flex text-yellow-400 text-sm sm:text-base">
                  {[...Array(4)].map((_, i) => (
                    <StarIcon key={i} className="w-4 h-4 fill-current" />
                  ))}
                  <StarHalfIcon className="w-4 h-4 fill-current" />
                </div>
              </div>
            </div>
            <p className="text-sm sm:text-base text-gray-600 italic">
              I was struggling with college-level Spanish until I found a
              native speaker tutor here. Now Im confident in my conversations!"
            </p>
          </Card>
        </div>

        {/* Stats Section */}
        <Card 
          className="mt-8 sm:mt-12 bg-gradient-to-r from-indigo-600 to-indigo-500 text-white p-4 sm:p-6 rounded-lg text-center hover:shadow-xl transition-all duration-300"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
            Join Our Growing Community
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4">
            <div data-aos="zoom-in" data-aos-delay="500">
              <div className="text-2xl sm:text-3xl font-bold">10,000+</div>
              <div className="text-xs sm:text-sm opacity-90">Hours Tutored</div>
            </div>
            <div data-aos="zoom-in" data-aos-delay="600">
              <div className="text-2xl sm:text-3xl font-bold">1,200+</div>
              <div className="text-xs sm:text-sm opacity-90">Verified Tutors</div>
            </div>
            <div data-aos="zoom-in" data-aos-delay="700">
              <div className="text-2xl sm:text-3xl font-bold">4.9/5</div>
              <div className="text-xs sm:text-sm opacity-90">Average Rating</div>
            </div>
            <div data-aos="zoom-in" data-aos-delay="800">
              <div className="text-2xl sm:text-3xl font-bold">95%</div>
              <div className="text-xs sm:text-sm opacity-90">Satisfaction Rate</div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

const StarIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className={className}
  >
    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
  </svg>
);

const StarHalfIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className={className}
  >
    <path d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4V6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z" />
  </svg>
);