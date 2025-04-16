"use client";

/* eslint-disable @typescript-eslint/no-unused-vars */
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';


import React, { useState } from 'react';

import { usePathname, useRouter, useSearchParams } from "next/navigation";







const subjects = [
  'Physics',
  'Mathematics',
  'Higher Mathematics',
  'Chemistry',
  'Biology',
  'Statistics',
  'Logic',
  'Sociology',
  'Psychology',
  'Islamic History',
  'Islamic Studies',
  'Computer Science',
  'Bangla 1st Paper (HSC)',
  'Bangla 2nd Paper (HSC)',
  'English 1st Paper (HSC)',
  'English 2nd Paper (HSC)',
  'Accounting (HSC)',
  'Management',
  'Marketing',
  'Finance, Banking & Insurance',
];

const AllTutorHeroSection = () => {
  const [nameQuery, setNameQuery] = useState('');
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handleSearchQuery = (
    query: string,
    value: string | number | boolean,
  ) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set(query, value.toString());
    router.push(`${pathname}?${params.toString()}`,
    //  { scroll: false }
    );
  };

  const handleSearch = () => {
    if (nameQuery.trim() !== '') {
      handleSearchQuery('name', nameQuery.trim());
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">
            Find the Right Tutor for You
          </h1>
          <p className="text-xl mb-8">
            Connect with expert tutors in any subject, online or in-person
          </p>
          <div className="max-w-xl mx-auto">
            <div className="flex shadow-lg rounded-lg overflow-hidden">
              <Input
                type="text"
                value={nameQuery}
                onChange={(e) => setNameQuery(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Search by tutor name"
                className="flex-grow bg-white px-4 py-3 focus-visible:ring-0 focus-visible:ring-offset-0 rounded-none border-0 text-gray-800"
              />
              <Button className="px-6 py-3 rounded-none" onClick={handleSearch}>
                <i className="fas fa-search mr-2"></i> Search
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllTutorHeroSection;
