'use client';
import { useState, useEffect } from 'react';

import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';

import Link from 'next/link';

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <nav className="bg-white shadow-md py-4 px-4 sm:px-6 w-full sticky top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo/Brand */}
        <div className="text-xl sm:text-2xl font-bold text-indigo-600">
          <Link href="/">TutorConnect</Link>
        </div>

        {/* Mobile menu button - ALWAYS VISIBLE on mobile/tablet */}
        <button
          id="mobile-menu-button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-gray-700 hover:text-indigo-600 focus:outline-none"
          aria-expanded={mobileMenuOpen}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <XMarkIcon className="h-6 w-6" />
          ) : (
            <Bars3Icon className="h-6 w-6" />
          )}
        </button>

        {/* Desktop Menu - hidden on mobile */}
        <div className="hidden md:flex space-x-6 lg:space-x-8">
          <Link href="/" className="text-gray-700 hover:text-indigo-600">
            Home
          </Link>
          <Link
            href="/browseTutor"
            className="text-gray-700 hover:text-indigo-600"
          >
            Find Tutors
          </Link>
          <Link
            href="/my-profile"
            className="text-gray-700 hover:text-indigo-600"
          >
            My Profile
          </Link>
          <Link href="/about" className="text-gray-700 hover:text-indigo-600">
            About Us
          </Link>
          <Link href="/faq" className="text-gray-700 hover:text-indigo-600">
            FAQ
          </Link>
        </div>

        {/* Desktop Auth Buttons - hidden on mobile */}
        <div className="hidden md:flex space-x-3 sm:space-x-4">
          <Link
            href="/login"
            className="px-3 sm:px-4 py-1 sm:py-2 text-indigo-600 border border-indigo-600 rounded-md hover:bg-indigo-50 text-sm sm:text-base"
          >
            Login
          </Link>
          <Link
            href="/signup"
            className="px-3 sm:px-4 py-1 sm:py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 text-sm sm:text-base"
          >
            Sign Up
          </Link>
        </div>
      </div>

      {/* Mobile Menu - appears below navbar */}
      {isMounted && (
        <div
          className={`md:hidden bg-white shadow-lg w-full absolute left-0 transition-all duration-300 ease-in-out ${
            mobileMenuOpen
              ? 'top-full opacity-100 visible'
              : 'top-0 opacity-0 invisible'
          }`}
        >
          <div className="px-4 pt-2 pb-4 space-y-2">
            <Link
              href="/"
              className="block py-2 px-2 text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 rounded"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/browseTutor"
              className="block py-2 px-2 text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 rounded"
              onClick={() => setMobileMenuOpen(false)}
            >
              Find Tutors
            </Link>
            <Link
              href="/my-profile"
              className="block py-2 px-2 text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 rounded"
              onClick={() => setMobileMenuOpen(false)}
            >
              My Profile
            </Link>
            <Link
              href="/about"
              className="block py-2 px-2 text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 rounded"
              onClick={() => setMobileMenuOpen(false)}
            >
              About Us
            </Link>
            <Link
              href="/faq"
              className="block py-2 px-2 text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 rounded"
              onClick={() => setMobileMenuOpen(false)}
            >
              FAQ
            </Link>
            <div className="flex space-x-3 pt-2">
              <Link
                href="/login"
                className="w-1/2 px-4 py-2 text-indigo-600 border border-indigo-600 rounded-md hover:bg-indigo-50 text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Login
              </Link>
              <Link
                href="/signup"
                className="w-1/2 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
