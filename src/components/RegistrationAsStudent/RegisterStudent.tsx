'use client';

import { useEffect, useRef, useState } from 'react';
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Textarea } from '@/components/ui/textarea';
import Link from 'next/link';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';
import { registerStudent } from '@/services/AuthService';
import { useUser } from '@/context/UserContext';

// Define form schema
const formSchema = z.object({
  password: z.string().min(8, {
    message: 'Password must be at least 8 characters.',
  }),
  student: z.object({
    name: z.string().min(1, { message: 'Name is required' }),
    email: z.string().email({ message: 'Invalid email address' }),
    gender: z.enum(['male', 'female', 'other']),
    dateOfBirth: z.string().min(1, { message: 'Date of birth is required' }),
    contactNo: z.string().min(1, { message: 'Contact number is required' }),
    emergencyContactNo: z.string().min(1, {
      message: 'Emergency contact number is required',
    }),
    bloodGroup: z.string().min(1, { message: 'Blood group is required' }),
    presentAddress: z
      .string()
      .min(1, { message: 'Present address is required' }),
    permanentAddress: z
      .string()
      .min(1, { message: 'Permanent address is required' }),
    profileImg: z.string().url({ message: 'Invalid URL' }),
    coverImg: z.string().url({ message: 'Invalid URL' }),
    isDeleted: z.boolean(),
  }),
});

export function StudentRegistrationForm() {
  const { user } = useUser();
  const hasRedirected = useRef(false);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (user && !hasRedirected.current) {
      hasRedirected.current = true;
      toast.error('You Are Already Registered');
      router.push('/');
    }
  }, [user, router]);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      password: '',
      student: {
        name: '',
        email: '',
        gender: 'male',
        dateOfBirth: '',
        contactNo: '',
        emergencyContactNo: '',
        bloodGroup: '',
        presentAddress: '',
        permanentAddress: '',
        profileImg: '',
        coverImg: '',
        isDeleted: false,
      },
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);

    console.log(values);
    // Here you would typically send the data to your API
    const res = await registerStudent(values);
    console.log(res);
    if (res.success) {
      setIsSubmitting(false);
      toast.success(res?.message);
      router.push('/login-user');
    } else {
      toast.error(res?.message);
    }
  }

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold mb-8 text-center text-blue-600">
        Student Registration
      </h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          {/* Student Information Section */}
          <div className="space-y-6 border border-gray-200 p-6 rounded-lg bg-gray-50">
            <h2 className="text-xl font-semibold text-gray-800 border-b pb-2">
              Personal Information
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name */}
              <FormField
                control={form.control}
                name="student.name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-700">Full Name</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="John Doe"
                        {...field}
                        className="focus-visible:ring-blue-500"
                      />
                    </FormControl>
                    <FormMessage className="text-xs" />
                  </FormItem>
                )}
              />

              {/* Email */}
              <FormField
                control={form.control}
                name="student.email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-700">Email</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="student1@gmail.com"
                        {...field}
                        className="focus-visible:ring-blue-500"
                      />
                    </FormControl>
                    <FormMessage className="text-xs" />
                  </FormItem>
                )}
              />

              {/* Date of Birth */}
              <FormField
                control={form.control}
                name="student.dateOfBirth"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-700">
                      Date of Birth
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="date"
                        {...field}
                        className="focus-visible:ring-blue-500"
                      />
                    </FormControl>
                    <FormMessage className="text-xs" />
                  </FormItem>
                )}
              />

              {/* Gender */}
              <FormField
                control={form.control}
                name="student.gender"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-700">Gender</FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="flex space-x-4"
                      >
                        <FormItem className="flex items-center space-x-2 space-y-0">
                          <FormControl>
                            <RadioGroupItem
                              value="male"
                              className="text-blue-600 focus-visible:ring-blue-500"
                            />
                          </FormControl>
                          <FormLabel className="font-normal text-gray-700">
                            Male
                          </FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-2 space-y-0">
                          <FormControl>
                            <RadioGroupItem
                              value="female"
                              className="text-blue-600 focus-visible:ring-blue-500"
                            />
                          </FormControl>
                          <FormLabel className="font-normal text-gray-700">
                            Female
                          </FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-2 space-y-0">
                          <FormControl>
                            <RadioGroupItem
                              value="other"
                              className="text-blue-600 focus-visible:ring-blue-500"
                            />
                          </FormControl>
                          <FormLabel className="font-normal text-gray-700">
                            Other
                          </FormLabel>
                        </FormItem>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage className="text-xs" />
                  </FormItem>
                )}
              />

              {/* Contact Number */}
              <FormField
                control={form.control}
                name="student.contactNo"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-700">
                      Contact Number
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="01712345678"
                        {...field}
                        className="focus-visible:ring-blue-500"
                      />
                    </FormControl>
                    <FormMessage className="text-xs" />
                  </FormItem>
                )}
              />

              {/* Emergency Contact Number */}
              <FormField
                control={form.control}
                name="student.emergencyContactNo"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-700">
                      Emergency Contact Number
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="01812345678"
                        {...field}
                        className="focus-visible:ring-blue-500"
                      />
                    </FormControl>
                    <FormMessage className="text-xs" />
                  </FormItem>
                )}
              />

              {/* Blood Group */}
              <FormField
                control={form.control}
                name="student.bloodGroup"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-700">Blood Group</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="focus-visible:ring-blue-500">
                          <SelectValue placeholder="Select blood group" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="A+">A+</SelectItem>
                        <SelectItem value="A-">A-</SelectItem>
                        <SelectItem value="B+">B+</SelectItem>
                        <SelectItem value="B-">B-</SelectItem>
                        <SelectItem value="AB+">AB+</SelectItem>
                        <SelectItem value="AB-">AB-</SelectItem>
                        <SelectItem value="O+">O+</SelectItem>
                        <SelectItem value="O-">O-</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage className="text-xs" />
                  </FormItem>
                )}
              />
            </div>
          </div>

          {/* Address Section */}
          <div className="space-y-6 border border-gray-200 p-6 rounded-lg bg-gray-50">
            <h2 className="text-xl font-semibold text-gray-800 border-b pb-2">
              Address Information
            </h2>

            <div className="grid grid-cols-1 gap-6">
              {/* Present Address */}
              <FormField
                control={form.control}
                name="student.presentAddress"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-700">
                      Present Address
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="123 Main Street, Dhaka"
                        {...field}
                        className="focus-visible:ring-blue-500 min-h-[100px]"
                      />
                    </FormControl>
                    <FormMessage className="text-xs" />
                  </FormItem>
                )}
              />

              {/* Permanent Address */}
              <FormField
                control={form.control}
                name="student.permanentAddress"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-700">
                      Permanent Address
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="456 Village Road, Khulna"
                        {...field}
                        className="focus-visible:ring-blue-500 min-h-[100px]"
                      />
                    </FormControl>
                    <FormMessage className="text-xs" />
                  </FormItem>
                )}
              />
            </div>
          </div>

          {/* Images Section */}
          <div className="space-y-6 border border-gray-200 p-6 rounded-lg bg-gray-50">
            <h2 className="text-xl font-semibold text-gray-800 border-b pb-2">
              Image URLs
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Profile Image URL */}
              <FormField
                control={form.control}
                name="student.profileImg"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-700">
                      Profile Image URL
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="url"
                        placeholder="https://example.com/images/profile.jpg"
                        {...field}
                        className="focus-visible:ring-blue-500"
                      />
                    </FormControl>
                    <FormMessage className="text-xs" />
                  </FormItem>
                )}
              />

              {/* Cover Image URL */}
              <FormField
                control={form.control}
                name="student.coverImg"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-700">
                      Cover Image URL
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="url"
                        placeholder="https://example.com/images/cover.jpg"
                        {...field}
                        className="focus-visible:ring-blue-500"
                      />
                    </FormControl>
                    <FormMessage className="text-xs" />
                  </FormItem>
                )}
              />
            </div>
          </div>

          {/* Password (moved to the end) */}
          <div className="space-y-6 border border-gray-200 p-6 rounded-lg bg-gray-50">
            <h2 className="text-xl font-semibold text-gray-800 border-b pb-2">
              Account Security
            </h2>
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-700">Password</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="Enter your password"
                      {...field}
                      className="focus-visible:ring-blue-500"
                    />
                  </FormControl>
                  <FormMessage className="text-xs" />
                </FormItem>
              )}
            />
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-6 text-lg"
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center">
                <svg
                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
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
                Registering...
              </span>
            ) : (
              'Register'
            )}
          </Button>

          <div className="text-center text-lg text-gray-600 mt-4">
            <p>
              Sign in as a Teacher {''}
              <Link
                href="/register-teacher"
                className="font-medium text-blue-600 hover:text-blue-500"
              >
                Create account
              </Link>
            </p>
            <p>
              Already Have Account? {''}
              <Link
                href="/login-user"
                className="font-medium text-blue-600 hover:text-blue-500"
              >
                Login
              </Link>
            </p>
          </div>
        </form>
      </Form>
    </div>
  );
}
