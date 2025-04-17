'use client';

import * as React from 'react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Textarea } from '@/components/ui/textarea';
import { useUser } from '@/context/UserContext';
import { getAllStudents } from '@/services/Student';
import { createReviews } from '@/services/Reviews';
import { toast } from 'sonner';

type Student = {
  _id: string;
  user: string;
  name: string;
  email: string;
  gender: string;
  // Add any other fields you expect
};

export function FeedbackModal({ tutorId }: { tutorId: string }) {
  const [rating, setRating] = React.useState(0);
  const [hoverRating, setHoverRating] = React.useState(0);
  const [comment, setComment] = React.useState('');
  const [isOpen, setIsOpen] = React.useState(false);
  const [allStudents, setAllStudents] = React.useState<{
    data: Student[];
  } | null>(null);
  const { user } = useUser();
  // console.log('user from user Details', user);
  const currentStudent =
    allStudents?.data?.filter((student) => student.user === user?.userId) || [];

  // console.log({
  //   currentStudent,
  //   tutorId,
  // });

  React.useEffect(() => {
    const fetchStudents = async () => {
      try {
        const students = await getAllStudents();
        setAllStudents(students);
        // console.log('All Students:', students);
      } catch (error) {
        console.error('Failed to fetch students:', error);
      }
    };

    fetchStudents();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const handleReviewData = {
      teacher: tutorId,
      student: currentStudent[0]?._id,
      comment,
      rating,
    };

    // console.log(handleReviewData);

    try {
      const res = await createReviews(handleReviewData);
      console.log(res);
      if (res.success) {
        // window.location.reload();
        toast.success(res?.message);
      } else {
        toast.error(res?.message);
      }
    } catch (error) {
      console.log(error);
    }

    // For now, we'll just close the modal after logging
    setIsOpen(false);

    // Reset form if needed
    setRating(0);
    setComment('');
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {user?.role === 'student' ? (
          <Button>Leave Reviews</Button>
        ) : (
          <Button disabled>Only Student Can Review</Button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="bg-indigo-600 text-white px-6 py-4 -mx-6 -mt-6 mb-6">
            Leave Your Reviews
          </DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Rating */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Your Rating
            </label>
            <div className="flex space-x-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  className="text-3xl cursor-pointer focus:outline-none"
                  onClick={() => setRating(star)}
                  onMouseEnter={() => setHoverRating(star)}
                  onMouseLeave={() => setHoverRating(0)}
                >
                  <span
                    className={
                      (hoverRating || rating) >= star
                        ? 'text-yellow-400'
                        : 'text-gray-300'
                    }
                  >
                    ★
                  </span>
                </button>
              ))}
            </div>
            <input type="hidden" name="rating" value={rating} />
          </div>

          {/* Comment Textarea */}
          <div>
            <label
              htmlFor="comment"
              className="block text-gray-700 font-medium mb-2"
            >
              Your Comment
            </label>
            <Textarea
              id="comment"
              name="comment"
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Share your experience..."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
          </div>

          {/* Submit Button */}
          <div className="pt-2">
            <Button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Submit Reviews
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
