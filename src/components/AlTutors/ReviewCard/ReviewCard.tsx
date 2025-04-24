import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';

const ReviewCard = ({ review }: { review: any }) => {
  const { comment, createdAt, rating } = review;
  const formattedDate = new Date(createdAt).toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });

  return (
    <Card className="border rounded-2xl shadow-sm bg-white text-black">
      <CardContent className="p-4 space-y-2">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2 text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-5 w-5 ${
                  i < Math.floor(rating) ? 'fill-current' : 'fill-none'
                }`}
              />
            ))}
            <span className="text-sm text-gray-600">{rating.toFixed(1)}</span>
          </div>
          <span className="text-sm text-gray-500">{formattedDate}</span>
        </div>
        <p className="text-gray-800 text-base">{comment}</p>
      </CardContent>
    </Card>
  );
};

export default ReviewCard;
