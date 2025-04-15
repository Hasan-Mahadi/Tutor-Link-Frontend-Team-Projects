import { Card } from '@/components/ui/card';

export const Testimonials = () => {
  return (
    <div className="bg-gray-50 py-12 sm:py-16 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">
          What Our Students Say
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {/* Testimonial 1 */}
          <Card className="p-4 sm:p-6 rounded-lg">
            <div className="flex items-center mb-3 sm:mb-4">
              <img
                src="https://randomuser.me/api/portraits/women/32.jpg"
                alt="Student"
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full mr-3 sm:mr-4"
              />
              <div>
                <h4 className="font-semibold text-sm sm:text-base">
                  Sarah Johnson
                </h4>
                <div className="flex text-yellow-400 text-sm sm:text-base">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
              </div>
            </div>
            <p className="text-sm sm:text-base text-gray-600 italic">
              "My math tutor helped me raise my grade from a C to an A in just
              two months! The personalized approach made all the difference."
            </p>
          </Card>

          {/* Testimonial 2 */}
          <Card className="p-4 sm:p-6 rounded-lg">
            <div className="flex items-center mb-3 sm:mb-4">
              <img
                src="https://randomuser.me/api/portraits/men/45.jpg"
                alt="Student"
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full mr-3 sm:mr-4"
              />
              <div>
                <h4 className="font-semibold text-sm sm:text-base">
                  Michael Chen
                </h4>
                <div className="flex text-yellow-400 text-sm sm:text-base">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
              </div>
            </div>
            <p className="text-sm sm:text-base text-gray-600 italic">
              "The chemistry tutor I found was amazing. Flexible scheduling and
              really knew how to explain complex concepts simply."
            </p>
          </Card>

          {/* Testimonial 3 */}
          <Card className="p-4 sm:p-6 rounded-lg">
            <div className="flex items-center mb-3 sm:mb-4">
              <img
                src="https://randomuser.me/api/portraits/women/68.jpg"
                alt="Student"
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full mr-3 sm:mr-4"
              />
              <div>
                <h4 className="font-semibold text-sm sm:text-base">
                  Emily Rodriguez
                </h4>
                <div className="flex text-yellow-400 text-sm sm:text-base">
                  {[...Array(4)].map((_, i) => (
                    <StarIcon key={i} className="w-4 h-4 fill-current" />
                  ))}
                  <StarHalfIcon className="w-4 h-4 fill-current" />
                </div>
              </div>
            </div>
            <p className="text-sm sm:text-base text-gray-600 italic">
              "I was struggling with college-level Spanish until I found a
              native speaker tutor here. Now I'm confident in my conversations!"
            </p>
          </Card>
        </div>

        {/* Stats Section */}
        <Card className="mt-8 sm:mt-12 bg-indigo-600 text-white p-4 sm:p-6 rounded-lg text-center">
          <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
            Join Our Growing Community
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4">
            <div>
              <div className="text-2xl sm:text-3xl font-bold">10,000+</div>
              <div className="text-xs sm:text-sm">Hours Tutored</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold">1,200+</div>
              <div className="text-xs sm:text-sm">Verified Tutors</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold">4.9/5</div>
              <div className="text-xs sm:text-sm">Average Rating</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold">95%</div>
              <div className="text-xs sm:text-sm">Satisfaction Rate</div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

// Star icons to replace Font Awesome
const StarIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className={className}
  >
    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
  </svg>
);

const StarHalfIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className={className}
  >
    <path d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4V6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z" />
  </svg>
);
