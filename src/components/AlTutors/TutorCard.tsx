import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Heart } from "lucide-react";

interface TutorCardProps {
  name: string;
  title: string;
  rating: number;
  reviews: number;
  subjects: string[];
  description: string;
  price: number;
  location: string;
  availability?: string;
  imageUrl: string;
  bgColor: string;
  isFavorite: boolean;
}

export default function TutorCard({
  name,
  title,
  rating,
  reviews,
  subjects,
  description,
  price,
  location,
  availability,
  imageUrl,
  bgColor,
  isFavorite,
}: TutorCardProps) {
  const renderStars = () => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

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
        <div className={`h-40 bg-gradient-to-r ${bgColor}`}></div>
        <div className="absolute -bottom-8 left-4">
          <Avatar className="h-16 w-16 border-4 border-white">
            <AvatarImage src={imageUrl} alt={name} />
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
                isFavorite ? "fill-red-500 text-red-500" : "text-gray-400"
              }`}
            />
          </Button>
        </div>
      </div>
      <div className="pt-10 px-4 pb-4">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-bold text-lg">{name}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">{title}</p>
          </div>
          {availability && (
            <Badge
              variant="secondary"
              className="bg-green-50 text-green-700 dark:bg-green-900 dark:text-green-200"
            >
              {availability}
            </Badge>
          )}
        </div>

        <div className="flex items-center mt-2">
          <div className="flex text-yellow-400">{renderStars()}</div>
          <span className="text-sm text-gray-600 dark:text-gray-300 ml-1">
            {rating.toFixed(1)} ({reviews} reviews)
          </span>
        </div>

        <div className="mt-3">
          <div className="flex flex-wrap gap-1">
            {subjects.map((subject, index) => (
              <Badge key={index} variant="outline" className="text-xs">
                {subject}
              </Badge>
            ))}
          </div>
        </div>

        <p className="text-sm text-gray-600 dark:text-gray-300 mt-3 line-clamp-2">
          {description}
        </p>

        <div className="flex justify-between items-center mt-4">
          <div>
            <span className="font-bold text-primary">${price}/hr</span>
            <span className="text-xs text-gray-500 dark:text-gray-400 ml-1">
              {location}
            </span>
          </div>
          <Button size="sm">View Profile</Button>
        </div>
      </div>
    </div>
  );
}
