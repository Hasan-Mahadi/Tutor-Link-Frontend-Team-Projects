'use client';

import {
  FaGraduationCap,
  FaChalkboardTeacher,
  FaGlobe,
  FaRocket,
  FaCalendarAlt,
  FaChartLine,
} from 'react-icons/fa';
import { TeamMemberCard } from '@/components/TeamMemberCard';
import { SuccessStory, SuccessStoryCard } from '@/components/SuccessStoryCard';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function AboutPage() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: false,
      mirror: true,
    });
  }, []);

  const teamMembers = [
    {
      name: 'Hasan Mahadi',
      role: 'CTO',
      bio: 'Full-stack developer with 10+ years experience building scalable edtech platforms.',
      image: 'https://i.postimg.cc/8PdHvMKN/my-photo3.jpg',
    },

    {
      name: 'Munir Hossain',
      role: 'Head of Tutor Success',
      bio: '15-year veteran educator dedicated to supporting teaching professionals.',
      image:
        'https://img.freepik.com/free-photo/handsome-unshaven-european-man-has-serious-self-confident-expression-wears-glasses_273609-17344.jpg?uid=R104361349&ga=GA1.1.1841229347.1715426784&semt=ais_hybrid&w=740',
    },
    {
      name: 'Tanvir Rashid',
      role: 'CEO & Founder',
      bio: 'Full-stack developer with 10+ years experience building scalable edtech platforms.',
      image: 'https://i.postimg.cc/7LcBYD6R/tanvir.jpg',
    },
    {
      name: 'Jahid Hossain',
      role: 'Lead Designer',
      bio: 'UX specialist focused on creating intuitive learning experiences.',
      image:
        'https://img.freepik.com/free-photo/close-up-portrait-young-bearded-man-white-shirt-jacket-posing-camera-with-broad-smile-isolated-gray_171337-629.jpg',
    },
  ];

  const successStories: SuccessStory[] = [
    {
      quote:
        'TutorConnect helped me raise my calculus grade from a C to an A in just 8 weeks. The personalized sessions fit perfectly with my after-school schedule.',
      author: 'Daniel T.',
      role: 'High School Senior',
      image:
        'https://img.freepik.com/free-vector/isolated-young-handsome-man-different-poses-white-background-illustration_632498-859.jpg',
      improvement: 'C to A in 8 weeks',
      sessions: 12,
      type: 'student',
    },
    {
      quote:
        "I've doubled my client base since joining TutorConnect while reducing administrative time by 30%. The platform handles scheduling so I can focus on teaching.",
      author: 'Dr. Elena M.',
      role: 'Chemistry Tutor',
      image:
        'https://img.freepik.com/free-vector/isolated-young-handsome-man-different-poses-white-background-illustration_632498-855.jpg',
      sessions: 45,
      type: 'tutor',
    },
    {
      quote:
        'As a working professional, I needed flexible learning options. My tutor adapted perfectly to my schedule and helped me master data science concepts.',
      author: 'Priya K.',
      role: 'Data Analyst',
      image:
        'https://img.freepik.com/free-vector/isolated-young-handsome-man-different-poses-white-background-illustration_632498-850.jpg',
      improvement: 'Promoted after certification',
      sessions: 20,
      type: 'student',
    },
    {
      quote:
        "The platform's intuitive interface made it easy to find the perfect tutor for my needs, and the progress tracking kept me motivated throughout my learning journey.",
      author: 'Alex R.',
      role: 'University Student',
      image:
        'https://img.freepik.com/free-vector/isolated-young-handsome-man-different-poses-white-background-illustration_632498-860.jpg',
      improvement: 'GPA increased by 1.2 points',
      sessions: 15,
      type: 'student',
    },
  ];

  const features = [
    {
      icon: <FaGraduationCap className="text-3xl text-indigo-600" />,
      title: 'For Students',
      items: [
        'AI-powered tutor matching',
        'Interactive scheduling',
        'Progress tracking',
        'Secure communication',
      ],
    },
    {
      icon: <FaChalkboardTeacher className="text-3xl text-indigo-600" />,
      title: 'For Tutors',
      items: [
        'Professional profile builder',
        'Smart calendar integration',
        'Student management',
        'Secure payments',
      ],
    },
    {
      icon: <FaGlobe className="text-3xl text-indigo-600" />,
      title: 'Platform Tech',
      items: [
        'Next.js 14 & React 18',
        'Tailwind CSS',
        'Prisma ORM',
        'WebSockets',
      ],
    },
  ];

  return (
    <div className="bg-white">
      <section
        className="relative bg-gradient-to-r from-indigo-600 to-indigo-800 text-white py-20"
        data-aos="fade-down"
      >
        <div className="container mx-auto px-6 text-center">
          <h1
            className="text-5xl font-bold mb-6"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            About TutorLink
          </h1>
          <p
            className="text-xl max-w-3xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            Revolutionizing education through seamless tutor-student connections
            with cutting-edge technology.
          </p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2
              className="text-3xl font-bold text-gray-900 mb-8"
              data-aos="flip-left"
            >
              Our Mission
            </h2>
            <p className="text-xl text-gray-700 mb-8">
              <span
                className="font-semibold text-indigo-600"
                data-aos="flip-left"
              >
                Bridging Knowledge Gaps, One Connection at a Time
              </span>
            </p>
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div
                className="bg-white p-6 rounded-lg shadow-md border-l-4 border-indigo-600"
                data-aos="flip-left"
              >
                <h3 className="text-xl font-semibold mb-4">For Students</h3>
                <p className="text-gray-600">
                  We believe every student deserves personalized attention and
                  learning that adapts to modern lifestyles.
                </p>
              </div>
              <div
                className="bg-white p-6 rounded-lg shadow-md border-l-4 border-indigo-600"
                data-aos="flip-right"
              >
                <h3 className="text-xl font-semibold mb-4">For Tutors</h3>
                <p className="text-gray-600">
                  Great tutors should be easily discoverable and empowered with
                  tools to focus on teaching.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-30">
          <h2
            className="text-3xl font-bold text-center text-gray-900 mb-12"
            data-aos="flip-left"
          >
            Key Features
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-shadow border-t-4 border-indigo-600"
                data-aos="flip-right"
              >
                <div className="flex justify-center mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-center mb-4">
                  {feature.title}
                </h3>
                <ul className="space-y-2">
                  {feature.items.map((item, i) => (
                    <li key={i} className="flex items-center">
                      <span className="mr-2 text-indigo-600">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-30">
          <h2
            className="text-3xl font-bold text-center text-gray-900 mb-12"
            data-aos="flip-left"
          >
            Meet Our Team
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {teamMembers.map((member, index) => (
              <TeamMemberCard key={index} member={member} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2
            className="text-3xl font-bold text-center text-gray-900 mb-12"
            data-aos="flip-left"
          >
            Success Stories
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {successStories.map((story, index) => (
              <SuccessStoryCard key={index} story={story} />
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section - Updated to indigo gradient */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-indigo-600 to-indigo-800 opacity-95"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/grid-pattern.svg')] bg-[length:60px_60px] opacity-10"></div>
          <div className="absolute top-1/2 left-1/2 w-96 h-96 -translate-x-1/2 -translate-y-1/2 bg-indigo-500 rounded-full mix-blend-overlay opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-indigo-400 rounded-full mix-blend-overlay opacity-20 animate-blob"></div>
          <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-indigo-500 rounded-full mix-blend-overlay opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto text-center mb-16">
            <div className="inline-flex items-center justify-center mb-6">
              <div className="relative">
                <FaRocket className="text-5xl text-white animate-float" />
                <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-indigo-300 rounded-full animate-pulse"></div>
              </div>
            </div>
            <h2
              className="text-4xl md:text-5xl font-bold text-white mb-4"
              data-aos="flip-left"
            >
              Our Vision for the Future
            </h2>
            <p
              className="text-xl text-indigo-100 max-w-3xl mx-auto"
              data-aos="flip-left"
            >
              Pioneering the next generation of personalized education through
              innovation and technology
            </p>
          </div>

          <div className="grid md:grid-cols-2 px-30 gap-10">
            {/* Roadmap Card */}
            <div
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-white/30 transition-all duration-300 hover:shadow-xl"
              data-aos="flip-left"
            >
              <div className="flex items-center mb-6">
                <div className="bg-indigo-500/20 p-3 rounded-lg mr-4">
                  <FaCalendarAlt className="text-2xl text-indigo-200" />
                </div>
                <h3 className="text-2xl font-bold text-white">
                  2024-2025 Roadmap
                </h3>
              </div>

              <ul className="space-y-4">
                {[
                  '🚀 Launch mobile apps for iOS and Android',
                  '📚 Expand to 10 new subject categories',
                  '🧠 Implement AI-powered learning recommendations',
                  '👥 Introduce group session capabilities',
                  '🌍 Expand to 3 new international markets',
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-indigo-300 mr-3 mt-1">•</span>
                    <span className="text-indigo-50">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Long-term Goals Card */}
            <div
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-white/30 transition-all duration-300 hover:shadow-xl"
              data-aos="flip-left"
            >
              <div className="flex items-center mb-6">
                <div className="bg-indigo-500/20 p-3 rounded-lg mr-4">
                  <FaChartLine className="text-2xl text-indigo-200" />
                </div>
                <h3 className="text-2xl font-bold text-white">
                  Long-Term Goals
                </h3>
              </div>

              <ul className="space-y-4">
                {[
                  '🏆 Become the global standard for tutor matching',
                  '🤖 Develop adaptive learning algorithms',
                  '🏫 Partner with educational institutions',
                  '♾️ Reduce global education inequality through technology',
                  '🔮 Continuous innovation in learning experiences',
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-indigo-300 mr-3 mt-1">•</span>
                    <span className="text-indigo-50">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6" data-aos="flip-left">
            Join Our Journey
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto" data-aos="flip-left">
            We are constantly evolving to better serve students and tutors. Have
            suggestions? Want to collaborate?
          </p>
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-lg transition-colors">
            Contact Our Team
          </button>
          <div className="mt-8 pt-8 border-t border-gray-700">
            <p className="text-gray-400">
              Built with TutorLink Teams | TutorLink © 2025
            </p>
            <div className="flex justify-center space-x-6 mt-4">
              <a href="#" className="text-gray-400 hover:text-white">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                Careers
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
