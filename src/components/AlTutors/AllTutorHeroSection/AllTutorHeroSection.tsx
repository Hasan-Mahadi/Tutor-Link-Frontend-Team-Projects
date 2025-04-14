import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import React from "react";

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

const AllTutorHeroSection = () => {
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
          <div className="max-w-2xl mx-auto">
            <div className="flex shadow-lg rounded-lg overflow-hidden">
              <Input
                type="text"
                placeholder="Search by subject, tutor name, or keyword"
                className="flex-grow bg-white px-4 py-3 focus-visible:ring-0 focus-visible:ring-offset-0 rounded-none border-0 text-gray-800"
              />
              <Select>
                <SelectTrigger className="border-l border-gray-300 px-4 py-3 bg-white text-gray-700 focus:ring-0 focus:ring-offset-0 rounded-none border-y-0 border-r-0 w-[180px]">
                  <SelectValue placeholder="All Subjects" />
                </SelectTrigger>
                <SelectContent>
                  {subjects?.map((subject, index) => (
                    <SelectItem key={index} value={subject}>
                      {subject}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Button className="px-6 py-3 rounded-none">
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
