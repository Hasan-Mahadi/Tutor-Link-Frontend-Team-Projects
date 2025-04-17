 'use client';
 
 import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useEffect } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';

export const NewsletterSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true
    });
  }, []);

  return (
    <div 
      className="bg-gradient-to-r from-indigo-600 to-indigo-500 text-white py-12 sm:py-16 px-4 sm:px-6"
      data-aos="fade-up"
    >
      <div className="max-w-3xl mx-auto text-center">
        <h2 
          className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4"
          data-aos="fade-down"
          data-aos-delay="100"
        >
          Stay Updated
        </h2>
        <p 
          className="text-sm sm:text-lg mb-4 sm:mb-6 text-indigo-100"
          data-aos="fade-down"
          data-aos-delay="200"
        >
          Subscribe to our newsletter for learning tips, special offers, and
          platform updates.
        </p>

        <div 
          className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <Input
            type="email"
            placeholder="Your email address"
            className="flex-grow p-3 sm:p-4 rounded-lg bg-white/90 text-gray-800 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-indigo-500 text-sm sm:text-base shadow-sm hover:bg-white transition-all duration-300"
          />
          <Button 
            className="px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-gray-900 to-gray-800 hover:from-black hover:to-gray-900 font-semibold text-sm sm:text-base rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5"
          >
            Subscribe
          </Button>
        </div>

        <p 
          className="text-xs sm:text-sm text-indigo-200 mt-3 opacity-0 animate-fade-in delay-500"
        >
          We respect your privacy. Unsubscribe at any time.
        </p>
      </div>
    </div>
  );
};