'use client';

import { useState } from 'react';
import { Calendar } from '@/components/ui/calendar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import {
  Star,
  ArrowLeft,
  Mail,
  MapPin,
  Clock,
  BookOpen,
  Home,
  Phone,
  Cake,
  ChevronRight,
} from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import { TTutors } from '../AlTutors/TutorCard';
import ReviewCard from '../AlTutors/ReviewCard/ReviewCard';
import { FeedbackModal } from '../AlTutors/CreateReview/CreateReview';
import { BookingComponent } from '../BookingsComponent/BookingsComponent';

export default function TutorProfile({ tutor }: { tutor: TTutors }) {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState('overview');
  const router = useRouter();

  console.log('Tutor Details', tutor);
  const hourlyRate = tutor?.hourlyRate;

  const timeSlots = [
    '9:00 AM - 10:00 AM',
    '10:00 AM - 11:00 AM',
    '2:00 PM - 3:00 PM',
    '4:00 PM - 5:00 PM',
    '5:00 PM - 6:00 PM',
    '7:00 PM - 8:00 PM',
  ];

  const reviews = [
    {
      rating: 5,
      date: 'April 9, 2025',
      comment: 'Great tutor! 2nd reviews',
    },
    {
      rating: 4,
      date: 'April 9, 2025',
      comment: 'Great tutor! 2nd reviews',
    },
  ];

  const handleMessage = () => {
    toast.warning('This is for Future Development');
  };

  const dateOfBirth = new Date(tutor?.dateOfBirth).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      {/* Header with back button */}
      <div className="mb-6">
        <Button variant="link" className="px-0" onClick={() => router.back()}>
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Tutors
        </Button>
      </div>

      {/* Main Profile Card */}
      <Card>
        {/* Cover Image */}
        <div className=" md:h-[400px] bg-gray-200 relative">
          <img
            src={tutor?.coverImg}
            alt={tutor?.name}
            className="h-full w-full object-cover object-center"
          />
        </div>

        {/* Profile Header */}
        <div className="md:flex px-6 pb-6 relative">
          {/* Tutor Image */}
          <div className="md:w-1/5 flex justify-center md:justify-start -mt-28 md:mt-2">
            <div className="relative">
              <Avatar className="w-48 h-48 md:rounded-none  border-4 border-green-200 shadow-lg">
                <AvatarImage
                  src={tutor?.profileImg}
                  alt={tutor?.name}
                  className="object-cover"
                />
                <AvatarFallback>{tutor?.name}</AvatarFallback>
              </Avatar>
              <div className="absolute bottom-0 right-0  text-white rounded-full p-2">
                <div className="h-4 w-4 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Basic Info */}
          <div className="md:w-3/4 mt-4 md:mt-8 md:pl-6">
            <div className="flex justify-between items-start">
              <div>
                <h1 className="text-3xl font-bold text-gray-800">
                  {tutor?.name}
                </h1>
                <p className="text-gray-600 mt-1">{tutor?.designation}</p>
              </div>
              <div className="flex items-center">
                <Badge
                  variant="secondary"
                  className="bg-yellow-100 text-yellow-800"
                >
                  <span className="font-bold">{tutor?.averageRating}</span>
                  <Star className="ml-1 h-4 w-4 text-yellow-500 fill-yellow-500" />
                  <span className="ml-1 text-sm">{tutor?.reviews?.length}</span>
                </Badge>
              </div>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              <Badge variant="outline" className="bg-blue-100 text-blue-800">
                <MapPin className="mr-1 h-4 w-4" />{' '}
                <span className="capitalize">{tutor?.district}</span>
              </Badge>
              <Badge variant="outline" className="bg-green-100 text-green-800">
                <span className="mr-1">♂</span>{' '}
                <span className="capitalize ">{tutor?.gender}</span>
              </Badge>
              <Badge
                variant="outline"
                className="bg-purple-100 text-purple-800"
              >
                <span className="mr-1">🩸</span>{' '}
                <span>{tutor?.bloodGroup}</span> Blood Group
              </Badge>
              <Badge variant="outline" className="bg-amber-100 text-amber-800">
                <Clock className="mr-1 h-4 w-4" /> BDT {tutor?.hourlyRate}/hour
              </Badge>
            </div>

            <div className="mt-6 flex gap-4">
              <Button onClick={() => setActiveTab('book')}>
                <BookOpen className="mr-2 h-4 w-4" /> Book a Session
              </Button>
              <Button onClick={handleMessage} variant="outline">
                <Mail className="mr-2 h-4 w-4" /> Message
              </Button>
            </div>
          </div>
        </div>

        {/* Main Content Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="w-full justify-start rounded-none border-b">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="reviews">Reviews</TabsTrigger>
            <TabsTrigger value="book">Book Now</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="p-6 md:p-8">
            {/* Bio Section */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                About Me
              </h2>
              <div className="text-gray-700 leading-relaxed space-y-4">
                <p>{tutor?.bio}</p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">
                      Personal Details
                    </h3>
                    <ul className="text-gray-700 space-y-2">
                      <li className="flex items-center">
                        <Cake className="text-blue-500 mr-2 h-5 w-5" />
                        <span>Date of Birth: {dateOfBirth}</span>
                      </li>
                      <li className="flex items-center">
                        <Phone className="text-blue-500 mr-2 h-5 w-5" />
                        <span>Contact: {tutor?.contactNo}</span>
                      </li>
                      <li className="flex items-center">
                        <Phone className="text-blue-500 mr-2 h-5 w-5" />
                        <span>Emergency: {tutor?.emergencyContactNo}</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">
                      Address
                    </h3>
                    <ul className="text-gray-700 space-y-2">
                      <li className="flex items-center">
                        <Home className="text-blue-500 mr-2 h-5 w-5" />
                        <span>Present: {tutor?.presentAddress}</span>
                      </li>
                      <li className="flex items-center">
                        <Home className="text-blue-500 mr-2 h-5 w-5" />
                        <span>Permanent: {tutor?.permanentAddress}</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Subjects Taught */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <BookOpen className="text-blue-500 mr-2 h-5 w-5" />
                    Teaching Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-gray-800">Subjects</h3>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {tutor?.subjects?.map((subject, index) => (
                        <Badge key={index} variant="outline">
                          {subject}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Designation</h3>
                    <p className="mt-1 text-gray-700">{tutor?.designation}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">District</h3>
                    <p className="mt-1 text-gray-700">{tutor?.district}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Hourly Rate</h3>
                    <p className="mt-1 text-gray-700">
                      BDT {tutor?.hourlyRate} per hour
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Reviews Section */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Star className="text-yellow-500 mr-2 h-5 w-5 fill-yellow-500" />
                    Student Reviews
                    <span className="ml-2 text-gray-600 text-sm font-normal">
                      {tutor?.averageRating}
                    </span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {tutor?.reviews?.length ? (
                    <>
                      {tutor?.reviews?.slice(0, 2).map((review, index) => (
                        <ReviewCard key={index} review={review}></ReviewCard>
                      ))}
                    </>
                  ) : (
                    <>
                      <div className="text-3xl font-semibold text-center">
                        No Reviews
                      </div>
                    </>
                  )}

                  <div className="mt-4 text-center">
                    <Button
                      variant="link"
                      className="text-blue-600"
                      onClick={() => setActiveTab('reviews')}
                    >
                      View all reviews <ChevronRight className="ml-1 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Reviews Tab Content */}
          <TabsContent value="reviews" className="p-6 md:p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              All Reviews
            </h2>
            <div className="space-y-4">
              {tutor?.reviews?.length ? (
                <>
                  {[...tutor?.reviews]
                    .sort(
                      (a, b) =>
                        new Date(b.createdAt).getTime() -
                        new Date(a.createdAt).getTime()
                    )
                    .map((review, index) => (
                      <ReviewCard key={index} review={review} />
                    ))}
                </>
              ) : (
                <div className="text-3xl font-semibold text-center">
                  No Reviews
                </div>
              )}
            </div>
            {/* create review option */}
            <div className="mt-4 flex justify-center items-center">
              <FeedbackModal></FeedbackModal>
            </div>
          </TabsContent>

          <TabsContent value="book" className="p-2 md:p-8 lg:p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Book a Session
            </h2>
            <BookingComponent hourlyRate={hourlyRate}></BookingComponent>
          </TabsContent>
        </Tabs>
      </Card>

      {/* Call-to-Action Footer */}
      <div className="mt-8 bg-blue-600 text-white rounded-lg p-6 text-center">
        <h2 className="text-2xl font-bold mb-2">
          Ready to improve your Physics skills?
        </h2>
        <p className="mb-6 max-w-2xl mx-auto">
          Book your first session with Karim today and get 10% off your first
          lesson!
        </p>
        <Button
          variant="secondary"
          className="text-blue-600"
          onClick={() => setActiveTab('book')}
        >
          <BookOpen className="mr-2 h-4 w-4" /> Book Now
        </Button>
      </div>
    </div>
  );
}
