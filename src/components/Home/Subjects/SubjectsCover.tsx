 'use client';

 import { Card } from '@/components/ui/card';
import { useEffect } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';

const subjects = [
  { emoji: '➕➖', name: 'Mathematics' },
  { emoji: '🧪', name: 'Science' },
  { emoji: '📚', name: 'English' },
  { emoji: '🌍', name: 'History' },
  { emoji: '🇪🇸', name: 'Spanish' },
  { emoji: '💻', name: 'Computer Science' },
  { emoji: '🎨', name: 'Art' },
  { emoji: '🎵', name: 'Music' },
  { emoji: '📝', name: 'Writing' },
  { emoji: '🧮', name: 'SAT/ACT Prep' },
  { emoji: '🔬', name: 'AP Courses' },
  { emoji: '💡', name: 'And Many More...' },
];

export const SubjectsCoverSection = () => {
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
          Subjects We Cover
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-5">
          {subjects.map((subject, index) => (
            <Card
              key={index}
              className="p-3 sm:p-4 rounded-lg text-center hover:shadow-lg transition-all duration-300 bg-white border border-indigo-100 hover:border-indigo-200 group"
              data-aos="fade-up"
              data-aos-delay={50 * (index % 6)}
            >
              <div className="text-2xl sm:text-3xl mb-2 sm:mb-3 text-indigo-600 bg-indigo-50 w-12 h-12 mx-auto rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                {subject.emoji}
              </div>
              <h3 className="font-semibold text-sm sm:text-base text-indigo-700">
                {subject.name}
              </h3>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};