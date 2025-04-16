/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import { useEffect, useState } from 'react';
import Head from 'next/head';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {
  FiChevronDown,
  FiChevronUp,
  FiCreditCard,
  FiUser,
  FiSearch,
  FiCalendar,
  FiThumbsUp,
} from 'react-icons/fi';

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [openQuestion, setOpenQuestion] = useState<string | null>(null);

  useEffect(() => {
    
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      mirror: false,
      offset: 100,
    });
  }, []);

  const faqCategories = [
    {
      id: 'tutoring',
      title: 'Tutoring',
      icon: <FiUser className="text-indigo-600 text-xl" />,
      questions: [
        {
          id: 'find-tutor',
          question: 'How do I find a tutor?',
          answer:
            'You can browse tutors by subject, availability, and ratings on our platform. Use the search filters to narrow down your options and view tutor profiles to find the best match for your learning needs.',
        },
        {
          id: 'session-booking',
          question: 'How do I book a session?',
          answer:
            'Once you find a tutor you like, select their available time slots and click "Book Session". You\'ll receive a confirmation email with session details and a link to join the virtual classroom.',
        },
        {
          id: 'tutor-qualifications',
          question: 'What qualifications do your tutors have?',
          answer:
            'All tutors undergo a rigorous screening process including credential verification, subject matter tests, and teaching demonstrations. Many hold advanced degrees or professional certifications in their fields.',
        },
      ],
    },
    {
      id: 'payments',
      title: 'Payments',
      icon: <FiCreditCard className="text-indigo-600 text-xl" />,
      questions: [
        {
          id: 'payment-processing',
          question: 'How are payments processed?',
          answer:
            "We use secure payment processing with Stripe. Your payment information is encrypted and never stored on our servers. You'll be charged after each completed session.",
        },
        {
          id: 'refunds',
          question: 'What is your refund policy?',
          answer:
            "If you're unsatisfied with a session, you can request a refund within 24 hours. Refunds are processed within 3-5 business days and credited back to your original payment method.",
        },
        {
          id: 'pricing',
          question: 'How much do sessions cost?',
          answer:
            "Session prices vary by tutor experience level and subject complexity. You'll see each tutor's hourly rate on their profile before booking.",
        },
      ],
    },
    {
      id: 'account',
      title: 'Account Management',
      icon: <FiUser className="text-indigo-600 text-xl" />,
      questions: [
        {
          id: 'cancel-session',
          question: 'Can I cancel a session?',
          answer:
            'Yes, you can cancel sessions up to 24 hours before the scheduled time without penalty. Late cancellations may incur a fee as specified in our cancellation policy.',
        },
        {
          id: 'change-tutor',
          question: "Can I change tutors if I'm not satisfied?",
          answer:
            'Absolutely! We want you to have the best learning experience. You can switch tutors at any time by booking with a new tutor for future sessions.',
        },
        {
          id: 'profile-updates',
          question: 'How do I update my profile information?',
          answer:
            'Log in to your account, go to "Profile Settings", and edit any information. Remember to save your changes before exiting.',
        },
      ],
    },
    {
      id: 'technical',
      title: 'Technical Support',
      icon: <FiSearch className="text-indigo-600 text-xl" />,
      questions: [
        {
          id: 'platform-requirements',
          question: 'What are the platform requirements?',
          answer:
            'Our platform works on most modern browsers. For best experience, use Chrome or Firefox with a stable internet connection. Virtual classrooms require a webcam and microphone for interactive sessions.',
        },
        {
          id: 'session-troubleshooting',
          question: 'What if I have technical issues during a session?',
          answer:
            'Try refreshing your browser first. If issues persist, use our in-app support chat for immediate assistance. All sessions are recorded so you can review material if you miss part of a session.',
        },
      ],
    },
  ];

  const toggleQuestion = (questionId: string) => {
    setOpenQuestion(openQuestion === questionId ? null : questionId);
  };

  return (
    <>
      <Head>
        <title>FAQ | TutorConnect</title>
        <meta
          name="description"
          content="Find answers to common questions about our tutoring platform, payments, and account management."
        />
      </Head>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section
          className="bg-gradient-to-r from-indigo-600 to-indigo-800 text-white py-20"
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          <div className="container mx-auto px-6 text-center">
            <h1
              className="text-4xl md:text-5xl font-bold mb-6"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              Frequently Asked Questions
            </h1>
            <p
              className="text-xl max-w-3xl mx-auto"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              Find quick answers to common questions about our tutoring platform
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16">
          <div className="container mx-auto px-6 max-w-6xl">
            {/* Category Navigation */}
            <div
              className="flex flex-wrap justify-center gap-4 mb-12"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              {faqCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() =>
                    setActiveCategory(
                      activeCategory === category.id ? null : category.id,
                    )
                  }
                  className={`flex items-center px-6 py-3 rounded-full shadow-sm transition-all ${activeCategory === category.id ? 'bg-indigo-600 text-white' : 'bg-white text-gray-800 hover:bg-indigo-50'}`}
                  data-aos="zoom-in"
                  data-aos-delay={100 * faqCategories.indexOf(category)}
                >
                  {category.icon}
                  <span className="ml-2 font-medium">{category.title}</span>
                </button>
              ))}
            </div>

            {/* FAQ Content */}
            <div className="space-y-6">
              {(activeCategory
                ? faqCategories.filter((cat) => cat.id === activeCategory)
                : faqCategories
              ).map((category) => (
                <div
                  key={category.id}
                  className="bg-white rounded-xl shadow-md overflow-hidden"
                >
                  <div className="p-6 border-b border-gray-100">
                    <h2 className="text-2xl font-semibold text-gray-800 flex items-center">
                      {category.icon}
                      <span className="ml-2">{category.title}</span>
                    </h2>
                  </div>
                  <div className="divide-y divide-gray-100">
                    {category.questions.map((item) => (
                      <div key={item.id} className="p-6">
                        <button
                          onClick={() => toggleQuestion(item.id)}
                          className="flex justify-between items-center w-full text-left"
                        >
                          <h3 className="text-lg font-medium text-gray-800">
                            {item.question}
                          </h3>
                          {openQuestion === item.id ? (
                            <FiChevronUp className="text-indigo-600 text-xl" />
                          ) : (
                            <FiChevronDown className="text-indigo-600 text-xl" />
                          )}
                        </button>
                        {openQuestion === item.id && (
                          <div className="mt-4 text-gray-600">
                            <p>{item.answer}</p>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Still have questions? */}
            <div className="mt-16 bg-indigo-50 rounded-xl p-8 text-center">
              <div className="max-w-2xl mx-auto">
                <FiThumbsUp className="text-indigo-600 text-4xl mx-auto mb-4" />
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                  Still have questions?
                </h3>
                <p className="text-gray-600 mb-6">
                  Cant find what you are looking for? Our support team is ready
                  to help you.
                </p>
                <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-8 rounded-lg transition-colors">
                  Contact Support
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
