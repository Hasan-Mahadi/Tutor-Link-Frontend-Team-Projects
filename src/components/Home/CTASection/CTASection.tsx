'use client';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useEffect } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';
import Link from 'next/link';

export const CTASection = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  return (
    <div className="max-w-7xl mx-auto py-12 sm:py-16 px-4 sm:px-6">
      <h2
        className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12 text-black"
        data-aos="fade-down"
      >
        Take Your Path
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        {/* Student CTA */}
        <Card
          className="p-6 sm:p-8 rounded-lg text-center border-0 bg-gradient-to-br from-indigo-50 to-white hover:shadow-lg transition-all duration-300 group"
          data-aos="fade-right"
        >
          <div className="text-4xl sm:text-5xl mb-4 transition-transform duration-300 group-hover:scale-110">
            <span className="inline-block bg-indigo-100 p-4 rounded-full">
              🎓
            </span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold mb-3 text-indigo-700">
            Are you a student looking to boost your grades?
          </h3>
          <p className="text-sm sm:text-base text-gray-600 mb-5">
            Find the perfect tutor to help you achieve your academic goals.
          </p>
          <div>
            <Link href="/register-student">
              {' '}
              <Button className="w-fit px-6 py-3 bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-700 hover:to-indigo-600 text-white text-sm font-semibold rounded-full shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                Sign Up as Student
              </Button>
            </Link>
          </div>
        </Card>

        {/* Tutor CTA */}
        <Card
          className="p-6 sm:p-8 rounded-lg text-center border-0 bg-gradient-to-br from-gray-50 to-white hover:shadow-lg transition-all duration-300 group"
          data-aos="fade-left"
          data-aos-delay="100"
        >
          <div className="text-4xl sm:text-5xl mb-4 transition-transform duration-300 group-hover:scale-110">
            <span className="inline-block bg-indigo-100 p-4 rounded-full">
              🧑‍🏫
            </span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold mb-3 text-gray-800">
            Ready to share your knowledge & earn?
          </h3>
          <p className="text-sm sm:text-base text-gray-600 mb-5">
            Join our network of expert tutors and help students succeed.
          </p>
          <div>
            <Link href="/register-teacher">
              {' '}
              <Button className="w-fit px-6 py-3 bg-gradient-to-r from-gray-800 to-gray-700 hover:from-gray-900 hover:to-gray-800 text-white text-sm font-semibold rounded-full shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                Register as Tutor
              </Button>
            </Link>
          </div>
        </Card>
      </div>
    </div>
  );
};
