/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';

import Link from 'next/link';


import { ThemeToggle } from '../theme-toggle';


import { getCurrentUser, logout } from '@/services/AuthService';

import { useUser } from '@/context/UserContext';


export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const { user, setIsLoading } = useUser();
  const pathname = usePathname();
  console.log('User from Nav', user);

  const handleLogout = () => {
    logout();
    setIsLoading(true);
  };

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const navLinkClass = (href: string) =>
    `${
      pathname === href ? 'text-indigo-500 ' : 'text-gray-700'
    } hover:text-indigo-600`;

  const navMobileLinkClass = (href: string) =>
    `${
      pathname === href ? 'text-indigo-600  bg-indigo-50' : 'text-gray-700'
    } block py-2 px-2 hover:text-indigo-600 hover:bg-indigo-50 rounded`;

  return (
    <nav className="bg-white shadow-md py-4 px-4 sm:px-6 w-full sticky top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo/Brand */}
        <div className="text-xl sm:text-2xl font-bold text-indigo-600">
          <Link href="/">TutorConnect</Link>
        </div>

        {/* Mobile menu button */}
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

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 lg:space-x-8">
          <Link href="/" className={navLinkClass('/')}>
            Home
          </Link>
          <Link href="/browseTutor" className={navLinkClass('/browseTutor')}>
            Find Tutors
          </Link>

          <Link href="/my-profile" className={navLinkClass('/my-profile')}>
            My Profile
          </Link>
          <Link href="/about" className={navLinkClass('/about')}>
            About Us
          </Link>
          <Link href="/faq" className={navLinkClass('/faq')}>
            FAQ
          </Link>
          <Link href="/blog" className={navLinkClass('/blog')}>
            Blog
          </Link>
        </div>

        {/* Desktop Auth Buttons */}
        <div className="hidden md:flex space-x-3 sm:space-x-4">

          <Link
            href="/login"
            className="px-3 sm:px-4 py-1 sm:py-2 text-indigo-600 border border-indigo-600 rounded-md hover:bg-indigo-50 text-sm sm:text-base"
          >
            Login
          </Link>
          <Link
            href="/register-student"
            className="px-3 sm:px-4 py-1 sm:py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 text-sm sm:text-base"
          >
            Sign Up
          </Link>


          {user ? (
            <Button onClick={handleLogout} variant={'outline'} className="py-5">
              Logout
            </Button>
          ) : (
            <>
              <Link
                href="/login-user"
                className="px-3 sm:px-4 py-1 sm:py-2 text-indigo-600 border border-indigo-600 rounded-md hover:bg-indigo-50 text-sm sm:text-base"
              >
                Login
              </Link>
              <Link
                href="/register-student"
                className="px-3 sm:px-4 py-1 sm:py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 text-sm sm:text-base"
              >
                Sign Up
              </Link>
            </>
          )}


          <div className="-pt-2">
            {' '}
            <ThemeToggle />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
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
              className={navMobileLinkClass('/')}
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/browseTutor"
              className={navMobileLinkClass('/browseTutor')}
              onClick={() => setMobileMenuOpen(false)}
            >
              Find Tutors
            </Link>
            <Link
              href="/my-profile"
              className={navMobileLinkClass('/my-profile')}
              onClick={() => setMobileMenuOpen(false)}
            >
              My Profile
            </Link>
            <Link
              href="/about"
              className={navMobileLinkClass('/about')}
              onClick={() => setMobileMenuOpen(false)}
            >
              About Us
            </Link>
            <Link
              href="/faq"
              className={navMobileLinkClass('/faq')}
              onClick={() => setMobileMenuOpen(false)}
            >
              FAQ
            </Link>

            <Link
              href="/blog"
              className={navMobileLinkClass('/blog')}
              onClick={() => setMobileMenuOpen(false)}
            >
              Blog
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



              {user ? (
                <Button
                  onClick={handleLogout}
                  variant={'outline'}
                  className="py-5"
                >
                  Logout
                </Button>
              ) : (
                <>
                  <Link
                    href="/login-user"
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
                </>
              )}


              <div className="-pt-2">
                {' '}
                <ThemeToggle />
              </div>

            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
