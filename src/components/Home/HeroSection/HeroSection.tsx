/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import { useEffect, useState } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { getAllTutors } from "@/services/tutiors";

const subjects = [
  "Physics",
  "Mathematics",
  "Higher Mathematics",
  "Chemistry",
  "Biology",
  "Statistics",
  "Logic",
  "Sociology",
  "Psychology",
  "Islamic History",
  "Islamic Studies",
  "Computer Science",
  "Bangla 1st Paper (HSC)",
  "Bangla 2nd Paper (HSC)",
  "English 1st Paper (HSC)",
  "English 2nd Paper (HSC)",
  "Accounting (HSC)",
  "Management",
  "Marketing",
  "Finance, Banking & Insurance",
];

export function HeroSection() {
  const [selectedSubject, setSelectedSubject] = useState('');
  const [selectedGrade, setSelectedGrade] = useState('');
  const [tutorName, setTutorName] = useState('');

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [tutors, setTutors] = useState([]);

  useEffect(() => {
    const query: { [key: string]: string[] } = {};

    // Convert searchParams to object format
    searchParams.forEach((value, key) => {
      if (query[key]) {
        query[key].push(value);
      } else {
        query[key] = [value];
      }
    });

    // Fetch tutors
    const fetchTutors = async () => {
      try {
        const { data } = await getAllTutors(query);
        setTutors(data);
      } catch (error) {
        console.error('Error fetching tutors:', error);
      }
    };

    fetchTutors();
  }, [searchParams]);

  const handleSearch = () => {
    const params = new URLSearchParams(searchParams.toString());

    if (selectedSubject) params.set('subject', selectedSubject);
    else params.delete('subject');

    if (selectedGrade) params.set('grade', selectedGrade);
    else params.delete('grade');

    if (tutorName) params.set('name', tutorName);
    else params.delete('name');

    router.push(`/browseTutor?${params.toString()}`, { scroll: false });
  };

  return (
    <div className="relative h-[70vh] sm:h-[80vh] w-full bg-[url('https://images.unsplash.com/photo-1588072432836-e10032774350?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80')] bg-cover bg-center flex flex-col justify-center items-center text-center">
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 px-4 w-full max-w-4xl">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
          Find the Perfect Tutor Anytime, Anywhere
        </h1>
        <p className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8 px-2">
          Search thousands of verified tutors for any subject or grade.
        </p>

        <div className="bg-white p-4 rounded-lg shadow-xl">
          <div className="flex flex-col md:flex-row gap-2 w-full">
            <Select onValueChange={(value) => setSelectedSubject(value)}>
              <SelectTrigger className="h-12 w-full">
                <SelectValue placeholder="Select Subject" />
              </SelectTrigger>
              <SelectContent>
                {subjects.map((subject, index) => (
                  <SelectItem key={index} value={subject}>
                    {subject}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select onValueChange={(value) => setSelectedGrade(value)}>
              <SelectTrigger className="h-12 w-full">
                <SelectValue placeholder="Select Grade" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Preschool">Preschool</SelectItem>
                <SelectItem value="Kindergarten">Kindergarten</SelectItem>
                <SelectItem value="Elementary School">
                  Elementary School
                </SelectItem>
                <SelectItem value="Middle School">Middle School</SelectItem>
                <SelectItem value="High School">High School</SelectItem>
                <SelectItem value="College">College</SelectItem>
              </SelectContent>
            </Select>

            <Input
              type="text"
              placeholder="Tutor Name (Optional)"
              value={tutorName}
              onChange={(e) => setTutorName(e.target.value)}
            />

            <Button
              className="bg-indigo-600 cursor-pointer hover:bg-indigo-700"
              onClick={handleSearch}
            >
              <span className="mr-2">Search</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </Button>
          </div>

          <div className="mt-3 flex flex-wrap justify-center gap-2">
            <span className="text-sm mt-1 text-gray-500">
              Popular Searches:
            </span>
            {['Math Tutor', 'Physics Tutor', 'History', 'Chemistry'].map(
              (item, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-xs sm:text-sm"
                >
                  {item}
                </span>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
