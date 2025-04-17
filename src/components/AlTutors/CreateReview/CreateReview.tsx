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

export function FeedbackModal() {
  const [rating, setRating] = React.useState(0);
  const [hoverRating, setHoverRating] = React.useState(0);
  const [comment, setComment] = React.useState('');
  const [isOpen, setIsOpen] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ comment, rating });

    // Here you would typically handle form submission
    // For example, you might want to:
    // 1. Validate the form
    // 2. Send data to an API
    // 3. Only close on success

    // For now, we'll just close the modal after logging
    setIsOpen(false);

    // Reset form if needed
    setRating(0);
    setComment('');
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button>Leave Reviews</Button>
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
