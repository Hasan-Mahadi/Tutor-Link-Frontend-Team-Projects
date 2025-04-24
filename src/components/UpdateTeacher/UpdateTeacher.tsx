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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { registerTeacher, updateTeacher } from '@/services/AuthService';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';
import { TTutors } from '../AlTutors/TutorCard';

// Define form schema
const UpdateTeacherFormSchema = z.object({
  name: z.string().min(1, { message: 'Name is required' }).optional(),
  email: z.string().email({ message: 'Invalid email address' }).optional(),
  gender: z.enum(['male', 'female', 'other']).optional(),
  dateOfBirth: z
    .string()
    .min(1, { message: 'Date of birth is required' })
    .optional(),
  contactNo: z
    .string()
    .min(1, { message: 'Contact number is required' })
    .optional(),
  emergencyContactNo: z
    .string()
    .min(1, {
      message: 'Emergency contact number is required',
    })
    .optional(),
  bloodGroup: z
    .string()
    .min(1, { message: 'Blood group is required' })
    .optional(),
  designation: z
    .string()
    .min(1, { message: 'Designation is required' })
    .optional(),
  bio: z
    .string()
    .min(20, { message: 'Bio should be at least 20 characters' })
    .optional(),
  grade: z
    .array(z.string())
    .min(1, { message: 'Select at least one grade' })
    .optional(),
  subjects: z
    .array(z.string())
    .min(1, { message: 'Select at least one subject' })
    .optional(),
  district: z.string().min(1, { message: 'District is required' }).optional(),
  hourlyRate: z
    .number()
    .min(0, { message: 'Hourly rate must be positive' })
    .optional(),
  availability: z.boolean().optional(),
  presentAddress: z
    .string()
    .min(1, { message: 'Present address is required' })
    .optional(),
  permanentAddress: z
    .string()
    .min(1, { message: 'Permanent address is required' })
    .optional(),
  profileImg: z.string().url({ message: 'Invalid URL' }).optional(),
  coverImg: z.string().url({ message: 'Invalid URL' }).optional(),
  isDeleted: z.boolean().optional().optional(),
});

const grades = [
  { id: 'Preschool', label: 'Preschool' },
  { id: 'Kindergarten', label: 'Kindergarten' },
  { id: 'Elementary School', label: 'Elementary School' },
  { id: 'Middle School', label: 'Middle School' },
  { id: 'High School', label: 'High School' },
  { id: 'College', label: 'College' },
];

const subjects = [
  { id: 'Physics', label: 'Physics' },
  { id: 'Mathematics', label: 'Mathematics' },
  { id: 'Higher Mathematics', label: 'Higher Mathematics' },
  { id: 'Chemistry', label: 'Chemistry' },
  { id: 'Biology', label: 'Biology' },
  { id: 'Statistics', label: 'Statistics' },
  { id: 'Logic', label: 'Logic' },
  { id: 'Sociology', label: 'Sociology' },
  { id: 'Psychology', label: 'Psychology' },
  { id: 'Islamic History', label: 'Islamic History' },
  { id: 'Islamic Studies', label: 'Islamic Studies' },
  { id: 'Computer Science', label: 'Computer Science' },
  { id: 'Bangla 1st Paper (HSC)', label: 'Bangla 1st Paper (HSC)' },
  { id: 'Bangla 2nd Paper (HSC)', label: 'Bangla 2nd Paper (HSC)' },
  { id: 'English 1st Paper (HSC)', label: 'English 1st Paper (HSC)' },
  { id: 'English 2nd Paper (HSC)', label: 'English 2nd Paper (HSC)' },
  { id: 'Accounting (HSC)', label: 'Accounting (HSC)' },
  { id: 'Management', label: 'Management' },
  { id: 'Marketing', label: 'Marketing' },
  { id: 'Finance, Banking & Insurance', label: 'Finance, Banking & Insurance' },
];

const districts = [
  'bagerhat',
  'bandarban',
  'barisal',
  'barguna',
  'bhola',
  'bogura',
  'brahmanbaria',
  'chapai nawabganj',
  'chandpur',
  'chattogram',
  'chuadanga',
  "cox's bazar",
  'cumilla',
  'dinajpur',
  'dhaka',
  'faridpur',
  'feni',
  'gaibandha',
  'gazipur',
  'gopalganj',
  'habiganj',
  'jamalpur',
  'jashore',
  'jhenaidah',
  'jhalokathi',
  'joypurhat',
  'khagrachari',
  'khulna',
  'kishoreganj',
  'kurigram',
  'kushtia',
  'lakshmipur',
  'lalmonirhat',
  'madaripur',
  'magura',
  'manikganj',
  'meherpur',
  'moulvibazar',
  'munshiganj',
  'mymensingh',
  'naogaon',
  'narail',
  'narayanganj',
  'narsingdi',
  'natore',
  'netrokona',
  'nilphamari',
  'noakhali',
  'pabna',
  'panchagarh',
  'patuakhali',
  'pirojpur',
  'rajbari',
  'rajshahi',
  'rangamati',
  'rangpur',
  'satkhira',
  'shariatpur',
  'sherpur',
  'sirajganj',
  'sunamganj',
  'sylhet',
  'tangail',
  'thakurgaon',
];

export function UpdateTeacherForm({ teacher }: { teacher: any }) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof UpdateTeacherFormSchema>>({
    resolver: zodResolver(UpdateTeacherFormSchema),
    defaultValues: {
      name: teacher?.name,
      gender: teacher?.gender,
      dateOfBirth: teacher?.dateOfBirth,
      contactNo: teacher?.contactNo,
      emergencyContactNo: teacher?.emergencyContactNo,
      bloodGroup: teacher?.bloodGroup,
      designation: teacher?.designation,
      bio: teacher?.bio,
      grade: teacher?.grade,
      subjects: teacher?.subjects,
      district: teacher?.district,
      hourlyRate: teacher?.hourlyRate,
      availability: teacher?.availability,
      presentAddress: teacher?.presentAddress,
      permanentAddress: teacher?.permanentAddress,
      profileImg: teacher?.profileImg,
      coverImg: teacher?.coverImg,
      isDeleted: teacher?.isDeleted,
    },
  });

  async function onSubmit(values: z.infer<typeof UpdateTeacherFormSchema>) {
    setIsSubmitting(true);
    console.log('Form submitted with values:', values);
    // Here you would typically send the data to your API
    try {
      const res = await updateTeacher(teacher._id, values);
      console.log('response from register teacher', res);
      if (res.success) {
        setIsSubmitting(false);
        toast.success(res.message);
      }
    } catch (error) {
      console.log(error);
      setIsSubmitting(false);
    }
  }

  return (
    <div className="max-w-5xl mx-auto p-6 bg-white rounded-xl shadow-xl">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-semibold text-gray-800">Update Teacher</h2>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          {/* Personal Information Section */}
          <div className="space-y-6 border border-indigo-100 p-6 rounded-lg bg-indigo-50">
            <h2 className="text-xl font-semibold text-indigo-800 border-b border-indigo-200 pb-2">
              Personal Information
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Name */}
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-700">Full Name*</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Fardin Ahmed"
                        {...field}
                        className="focus:ring-indigo-500"
                      />
                    </FormControl>
                    <FormMessage className="text-xs" />
                  </FormItem>
                )}
              />

              {/* Email */}
              {/* <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-700">Email*</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="teacher@gmail.com"
                        {...field}
                        className="focus:ring-indigo-500"
                      />
                    </FormControl>
                    <FormMessage className="text-xs" />
                  </FormItem>
                )}
              /> */}

              {/* Gender */}
              <FormField
                control={form.control}
                name="gender"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-700">Gender*</FormLabel>
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
                              className="text-indigo-600 focus:ring-indigo-500"
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
                              className="text-indigo-600 focus:ring-indigo-500"
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
                              className="text-indigo-600 focus:ring-indigo-500"
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

              {/* Date of Birth */}
              <FormField
                control={form.control}
                name="dateOfBirth"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-700">
                      Date of Birth*
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="date"
                        {...field}
                        className="focus:ring-indigo-500"
                      />
                    </FormControl>
                    <FormMessage className="text-xs" />
                  </FormItem>
                )}
              />

              {/* Contact Number */}
              <FormField
                control={form.control}
                name="contactNo"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-700">
                      Contact Number*
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="01712345678"
                        {...field}
                        className="focus:ring-indigo-500"
                      />
                    </FormControl>
                    <FormMessage className="text-xs" />
                  </FormItem>
                )}
              />

              {/* Emergency Contact Number */}
              <FormField
                control={form.control}
                name="emergencyContactNo"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-700">
                      Emergency Contact Number*
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="01898765432"
                        {...field}
                        className="focus:ring-indigo-500"
                      />
                    </FormControl>
                    <FormMessage className="text-xs" />
                  </FormItem>
                )}
              />

              {/* Blood Group */}
              <FormField
                control={form.control}
                name="bloodGroup"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-700">
                      Blood Group*
                    </FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="focus:ring-indigo-500">
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

              {/* Designation */}
              <FormField
                control={form.control}
                name="designation"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-700">
                      Designation*
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Senior Lecturer"
                        {...field}
                        className="focus:ring-indigo-500"
                      />
                    </FormControl>
                    <FormMessage className="text-xs" />
                  </FormItem>
                )}
              />

              {/* District */}
              <FormField
                control={form.control}
                name="district"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-700">District*</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="focus:ring-indigo-500">
                          <SelectValue placeholder="Select your district" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {districts.map((district) => (
                          <SelectItem
                            key={district}
                            value={district.toLowerCase()}
                          >
                            {district}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage className="text-xs" />
                  </FormItem>
                )}
              />

              {/* Hourly Rate */}
              <FormField
                control={form.control}
                name="hourlyRate"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-700">
                      Hourly Rate (BDT)
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="500"
                        {...field}
                        onChange={(e) => {
                          const val = e.target.value;
                          field.onChange(val === '' ? '' : parseInt(val));
                        }}
                        value={
                          field.value === undefined || isNaN(field.value)
                            ? ''
                            : field.value
                        }
                        className="focus:ring-indigo-500"
                      />
                    </FormControl>
                    <FormMessage className="text-xs" />
                  </FormItem>
                )}
              />

              {/* Availability */}
              <FormField
                control={form.control}
                name="availability"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                        className="text-indigo-600 focus:ring-indigo-500"
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel className="text-gray-700">
                        Currently Available for Teaching
                      </FormLabel>
                    </div>
                  </FormItem>
                )}
              />
            </div>
          </div>

          {/* Teaching Information Section */}
          <div className="space-y-6 border border-indigo-100 p-6 rounded-lg bg-indigo-50">
            <h2 className="text-xl font-semibold text-indigo-800 border-b border-indigo-200 pb-2">
              Teaching Information
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Grades */}
              <FormField
                control={form.control}
                name="grade"
                render={() => (
                  <FormItem>
                    <FormLabel className="text-gray-700">
                      Grades You Teach*
                    </FormLabel>
                    <div className="grid grid-cols-1 gap-2">
                      {grades.map((grade) => (
                        <FormField
                          key={grade.id}
                          control={form.control}
                          name="grade"
                          render={({ field }) => {
                            return (
                              <FormItem
                                key={grade.id}
                                className="flex flex-row items-start space-x-3 space-y-0"
                              >
                                <FormControl>
                                  <Checkbox
                                    checked={field.value?.includes(grade.id)}
                                    onCheckedChange={(checked: boolean) => {
                                      return checked
                                        ? field.onChange([
                                            ...(field.value ?? []),
                                            grade.id,
                                          ])
                                        : field.onChange(
                                            field.value?.filter(
                                              (value) => value !== grade.id
                                            )
                                          );
                                    }}
                                    className="text-indigo-600 focus:ring-indigo-500"
                                  />
                                </FormControl>
                                <FormLabel className="font-normal text-gray-700">
                                  {grade.label}
                                </FormLabel>
                              </FormItem>
                            );
                          }}
                        />
                      ))}
                    </div>
                    <FormMessage className="text-xs" />
                  </FormItem>
                )}
              />

              {/* Subjects */}
              <FormField
                control={form.control}
                name="subjects"
                render={() => (
                  <FormItem>
                    <FormLabel className="text-gray-700">
                      Subjects You Teach*
                    </FormLabel>
                    <div className="grid grid-cols-1 gap-2">
                      {subjects.map((subject) => (
                        <FormField
                          key={subject.id}
                          control={form.control}
                          name="subjects"
                          render={({ field }) => {
                            return (
                              <FormItem
                                key={subject.id}
                                className="flex flex-row items-start space-x-3 space-y-0"
                              >
                                <FormControl>
                                  <Checkbox
                                    checked={field.value?.includes(subject.id)}
                                    onCheckedChange={(checked: boolean) => {
                                      return checked
                                        ? field.onChange([
                                            ...(field.value ?? []),
                                            subject.id,
                                          ])
                                        : field.onChange(
                                            field.value?.filter(
                                              (value) => value !== subject.id
                                            )
                                          );
                                    }}
                                    className="text-indigo-600 focus:ring-indigo-500"
                                  />
                                </FormControl>
                                <FormLabel className="font-normal text-gray-700">
                                  {subject.label}
                                </FormLabel>
                              </FormItem>
                            );
                          }}
                        />
                      ))}
                    </div>
                    <FormMessage className="text-xs" />
                  </FormItem>
                )}
              />
            </div>

            {/* Bio */}
            <FormField
              control={form.control}
              name="bio"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-700">Bio*</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Passionate physics teacher with over 10 years of experience..."
                      {...field}
                      className="focus:ring-indigo-500 min-h-[120px]"
                    />
                  </FormControl>
                  <FormMessage className="text-xs" />
                </FormItem>
              )}
            />
          </div>

          {/* Address Section */}
          <div className="space-y-6 border border-indigo-100 p-6 rounded-lg bg-indigo-50">
            <h2 className="text-xl font-semibold text-indigo-800 border-b border-indigo-200 pb-2">
              Address Information
            </h2>

            <div className="grid grid-cols-1 gap-6">
              {/* Present Address */}
              <FormField
                control={form.control}
                name="presentAddress"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-700">
                      Present Address*
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="House #10, Road #5, Dhanmondi, Dhaka"
                        {...field}
                        className="focus:ring-indigo-500 min-h-[100px]"
                      />
                    </FormControl>
                    <FormMessage className="text-xs" />
                  </FormItem>
                )}
              />

              {/* Permanent Address */}
              <FormField
                control={form.control}
                name="permanentAddress"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-700">
                      Permanent Address*
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Village: Charigram, Upazila: Singair, District: Manikganj"
                        {...field}
                        className="focus:ring-indigo-500 min-h-[100px]"
                      />
                    </FormControl>
                    <FormMessage className="text-xs" />
                  </FormItem>
                )}
              />
            </div>
          </div>

          {/* Images Section */}
          <div className="space-y-6 border border-indigo-100 p-6 rounded-lg bg-indigo-50">
            <h2 className="text-xl font-semibold text-indigo-800 border-b border-indigo-200 pb-2">
              Profile Images
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Profile Image URL */}
              <FormField
                control={form.control}
                name="profileImg"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-700">
                      Profile Image URL*
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="url"
                        placeholder="https://example.com/images/profile.jpg"
                        {...field}
                        className="focus:ring-indigo-500"
                      />
                    </FormControl>
                    <FormMessage className="text-xs" />
                  </FormItem>
                )}
              />

              {/* Cover Image URL */}
              <FormField
                control={form.control}
                name="coverImg"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-700">
                      Cover Image URL*
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="url"
                        placeholder="https://example.com/images/cover.jpg"
                        {...field}
                        className="focus:ring-indigo-500"
                      />
                    </FormControl>
                    <FormMessage className="text-xs" />
                  </FormItem>
                )}
              />
            </div>
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-6 text-lg font-semibold"
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
                Updating...
              </span>
            ) : (
              'Complete Update'
            )}
          </Button>
        </form>
      </Form>
    </div>
  );
}
