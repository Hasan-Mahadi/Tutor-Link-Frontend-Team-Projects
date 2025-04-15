import TutorCard, { TTutors } from "@/components/AlTutors/TutorCard";
import Filters from "@/components/AlTutors/Filters";
import Pagination from "@/components/AlTutors/Pagination";
import AllTutorHeroSection from "@/components/AlTutors/AllTutorHeroSection/AllTutorHeroSection";
import { SortBy } from "@/components/AlTutors/SortBy";
import { getAllTutors } from "@/services/tutiors";

type SearchParams = { [key: string]: string[] | undefined };

export default async function TutorsPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  // console.log(await searchParams, "search");
  const query = await searchParams;
  const { data: tutors } = await getAllTutors(query);
  console.log(tutors);
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
                  Showing {tutors.length} tutors
                </span>
              </div>
              <div className="flex items-center space-x-4">
                <SortBy></SortBy>
              </div>
            </div>

            {/* Tutor Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {tutors.length ? (
                tutors.map((tutor: TTutors) => (
                  <TutorCard key={tutor._id} tutor={tutor}></TutorCard>
                ))
              ) : (
                <>
                  <div className="text-3xl text-center col-span-6 font-semibold">
                    No Tutor Found
                  </div>
                </>
              )}

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
