import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export const NewsletterSection = () => {
  return (
    <div className="bg-indigo-700 text-white py-12 sm:py-16 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">
          Stay Updated
        </h2>
        <p className="text-sm  sm:text-xl mb-4 sm:mb-6">
          Subscribe to our newsletter for learning tips, special offers, and
          platform updates.
        </p>

        <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
          <Input
            type="email"
            placeholder="Your email address"
            className="flex-grow p-2 sm:p-3 rounded-md bg-white text-gray-800 focus-visible:ring-indigo-300 text-sm sm:text-base"
          />
          <Button className="px-4 sm:px-6 py-2 sm:py-3 bg-gray-800 hover:bg-black font-semibold text-sm sm:text-base">
            Subscribe
          </Button>
        </div>

        <p className="text-xs sm:text-sm text-indigo-200 mt-2">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </div>
    </div>
  );
};
