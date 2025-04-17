'use client';

import { XCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useRouter } from 'next/navigation';

export default function PaymentFailed() {
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-4">
          <div className="flex justify-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-red-100">
              <XCircle className="h-10 w-10 text-red-500" />
            </div>
          </div>
          <CardTitle className="text-center text-2xl font-bold text-gray-800">
            Payment Failed
          </CardTitle>
        </CardHeader>

        <CardContent className="space-y-6">
          <p className="text-center text-gray-600">
            We couldn't process your payment. Please check your payment details
            and try again.
          </p>

          <div className="flex flex-col gap-3">
            <Button
              onClick={() => router.push('/')}
              className="w-full bg-blue-600 py-6 text-lg hover:bg-blue-700"
            >
              Return Home
            </Button>
          </div>

          <p className="text-center text-sm text-gray-500">
            Need help?{' '}
            <a href="#" className="text-blue-600 hover:underline">
              Contact support
            </a>
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
