// Removed duplicate import
import { Badge } from "@/components/ui/badge";
import { Heart } from "lucide-react";
import Link from "next/link";
import { Button } from '@/components/ui/button';
import { Avatar, AvatarImage } from "@/components/ui/avatar";

export interface TTutors {
  grade: any[];
  _id: string;
  name: string;
  email: string;
  gender: string;
  dateOfBirth: string;
  user: string;
  contactNo: string;
  emergencyContactNo: string;
  bloodGroup: string;
  district: string;
  designation: string;
  bio: string;
  subjects: string[];
  presentAddress: string;
  permanentAddress: string;
  profileImg: string;
  coverImg: string;
  hourlyRate: number;
  isDeleted: boolean;
  createdAt: string;
  updatedAt: string;
  __v: number;
  availability: boolean;
  reviews: Review[];
  id: string;
  averageRating: number;
}

export interface Review {
  _id: string;
  teacher: string;
  student: string;
  comment: string;
  rating: number;
  createdAt: string;
  updatedAt: string;
  __v: number;
}
export default function TutorCard({ tutor }: { tutor: TTutors }) {
  const renderStars = () => {
    const stars = [];
    const fullStars = Math.floor(tutor.averageRating);
    const hasHalfStar = tutor.averageRating % 1 >= 0.5;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<span key={i}>★</span>);
    }

    if (hasHalfStar) {
      stars.push(<span key="half">½</span>);
    }

    const remainingStars = 5 - stars.length;
    for (let i = 0; i < remainingStars; i++) {
      stars.push(<span key={`empty-${i}`}>☆</span>);
    }

    return stars;
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
      <div className="relative">
        <div className={`h-48`}>
          <img src={tutor.coverImg} className="h-48 w-full object-cover" alt="" />
        </div>
        <div className="absolute -bottom-8 left-4">
          <Avatar className="h-16 w-16 border-4 border-white">
            <AvatarImage
              className="object-cover"
              src={tutor.profileImg}
              alt={tutor.name}
            />
          </Avatar>
        </div>
        <div className="absolute top-2 right-2">
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full bg-white shadow-md hover:bg-gray-100"
          >
            <Heart
              className={`h-4 w-4 ${
                tutor.averageRating > 4
                  ? "fill-red-500 text-red-500"
                  : "text-gray-400"
              
              }`}
            />
          </Button>
        </div>
      </div>
      <div className="pt-10 px-4 pb-4">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-bold text-lg">{tutor.name}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              {tutor.bio}
            </p>
          </div>
          {tutor.availability && (
            <Badge
              variant="secondary"
              className="bg-green-50 text-green-700 dark:bg-green-900 dark:text-green-200"
            >
              {tutor.availability}
            </Badge>
          )}
        </div>

        <div className="flex items-center mt-2">
          <div className="flex text-yellow-400">{renderStars()}</div>
          <span className="text-sm text-gray-600 dark:text-gray-300 ml-1">
            {tutor.averageRating?.toFixed(1)} ({tutor.reviews.length} reviews)
          </span>
        </div>

        <div className="mt-3">
          <div className="flex flex-wrap gap-1">
            {tutor.subjects?.map((subject, index) => (
              <Badge key={index} variant="outline" className="text-xs">
                {subject}
              </Badge>
            ))}
          </div>
        </div>

        <p className="text-sm text-gray-600 dark:text-gray-300 mt-3 line-clamp-2">
          {/* {tutor.} */}
        </p>

        <div className="flex justify-between items-center mt-4">
          <div>
            <span className="font-bold text-primary">
              BDT {tutor.hourlyRate}/hr
            </span>
            <span className="text-xs text-gray-500 dark:text-gray-400 ml-1 capitalize">
              {tutor.district}
            </span>
          </div>
          <Link href={`/browseTutor/${tutor._id}`}>
            {" "}
            <Button size="sm">View Profile</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
