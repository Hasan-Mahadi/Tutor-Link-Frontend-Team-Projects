import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import TutorCard from "@/components/AlTutors/TutorCard";
import Filters from "@/components/AlTutors/Filters";
import Pagination from "@/components/AlTutors/Pagination";
import AllTutorHeroSection from "@/components/AlTutors/AllTutorHeroSection/AllTutorHeroSection";

export default function TutorsPage() {
  return (
    <div className="bg-gray-50 text-gray-800 dark:bg-gray-900 dark:text-gray-100">
      {/* Hero Section */}
      <AllTutorHeroSection></AllTutorHeroSection>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Sidebar Filters */}
          <div className="md:w-1/4 lg:w-1/5">
            <Filters />
          </div>

          {/* Main Content Area */}
          <div className="md:w-3/4 lg:w-4/5">
            {/* Sort and View Options */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-4 mb-6 flex flex-col sm:flex-row justify-between items-center">
              <div className="mb-4 sm:mb-0">
                <span className="text-sm text-gray-600 dark:text-gray-300">
                  Showing 24 tutors
                </span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="flex items-center">
                  <span className="text-sm text-gray-600 dark:text-gray-300 mr-2">
                    Sort by:
                  </span>
                  <Select>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Relevance" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="relevance">Relevance</SelectItem>

                      <SelectItem value="price-low">
                        Price (Low to High)
                      </SelectItem>
                      <SelectItem value="price-high">
                        Price (High to Low)
                      </SelectItem>
                      <SelectItem value="newest">Newest First</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            {/* Tutor Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <TutorCard
                name="Dr. Sarah Johnson"
                title="PhD in Mathematics"
                rating={4.7}
                reviews={132}
                subjects={["Calculus", "Algebra", "Statistics"]}
                description="Experienced math tutor with 10+ years helping students achieve their academic goals. Specializing in high school and college-level mathematics."
                price={45}
                location="Online or In-person"
                availability="Available Today"
                imageUrl="https://randomuser.me/api/portraits/women/44.jpg"
                bgColor="from-blue-100 to-blue-200"
                isFavorite={false}
              />

              <TutorCard
                name="Michael Chen"
                title="Computer Science Instructor"
                rating={5.0}
                reviews={87}
                subjects={["Python", "JavaScript", "Web Dev"]}
                description="Full-stack developer turned educator. I make complex programming concepts easy to understand with real-world examples."
                price={35}
                location="Online Only"
                availability="Online Now"
                imageUrl="https://randomuser.me/api/portraits/men/32.jpg"
                bgColor="from-purple-100 to-purple-200"
                isFavorite={true}
              />

              {/* Add more TutorCard components as needed */}
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-10">
              <Pagination />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
