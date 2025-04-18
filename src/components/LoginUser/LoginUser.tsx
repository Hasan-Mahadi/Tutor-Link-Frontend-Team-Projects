/* eslint-disable react/no-unescaped-entities */
'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { loginUser } from '@/services/AuthService';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';

// Define form schema
const formSchema = z.object({
  email: z.string().email({ message: 'Please enter a valid email address' }),
  password: z.string().min(8, {
    message: 'Password must be at least 8 characters',
  }),
});

export function LoginForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    console.log('Form submitted with values:', values);

    // API call would go here

    const res = await loginUser(values);
    if (res.success) {
      toast.success(res?.message);
      setIsSubmitting(false);
      router.push('/');
    } else {
      toast.error(res?.message);
      setIsSubmitting(false);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        {/* Header */}
        <div className="bg-white p-6 border-b border-gray-200">
          <div className="text-center">
            <h1 className="text-2xl font-semibold text-gray-800">
              Tutor Connect
            </h1>
            <p className="mt-1 text-sm text-gray-600">
              Educational Management System
            </p>
          </div>
          <h2 className="mt-4 text-lg font-medium text-gray-800 text-center">
            User Login
          </h2>
        </div>

        {/* Form */}
        <div className="p-6">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <div className="space-y-4">
                {/* Email */}
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-700 text-sm font-medium">
                        Email Address
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="teacher1@gmail.com"
                          {...field}
                          className="focus:ring-blue-500 focus:border-blue-500"
                        />
                      </FormControl>
                      <FormMessage className="text-xs text-red-600" />
                    </FormItem>
                  )}
                />

                {/* Password */}
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-700 text-sm font-medium">
                        Password
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="password"
                          placeholder="Enter your password"
                          {...field}
                          className="focus:ring-blue-500 focus:border-blue-500"
                        />
                      </FormControl>
                      <FormMessage className="text-xs text-red-600" />
                    </FormItem>
                  )}
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label
                    htmlFor="remember-me"
                    className="ml-2 block text-sm text-gray-600"
                  >
                    Remember my account
                  </label>
                </div>
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2.5 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <svg
                      className="animate-spin -ml-1 mr-3 h-4 w-4 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Authenticating...
                  </span>
                ) : (
                  'Login to Account'
                )}
              </Button>

              <div className="text-center text-sm text-gray-600 mt-4">
                <p>
                  Don't have an account?{' '}
                  <Link
                    href="/register-student"
                    className="font-medium text-blue-600 hover:text-blue-500"
                  >
                    Create account
                  </Link>
                </p>
              </div>
            </form>
          </Form>
        </div>

        {/* Footer */}
        <div className="bg-gray-50 px-6 py-4 border-t border-gray-200">
          <p className="text-xs text-gray-500 text-center">
            © {new Date().getFullYear()} Tutor Connect. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
