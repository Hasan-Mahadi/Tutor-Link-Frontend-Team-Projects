'use client';

import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useUser } from '@/context/UserContext';
import { getAllStudents } from '@/services/Student';
import { createBookings } from '@/services/Bookings';
import { toast } from 'sonner';

type Student = {
  _id: string;
  user: string;
  name: string;
  email: string;
  gender: string;
  // Add any other fields you expect
};

export function BookingComponent({
  hourlyRate,
  tutorId,
}: {
  hourlyRate: number;
  tutorId: string;
}) {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string>('');
  const [subject, setSubject] = useState<string>('');
  const [duration, setDuration] = useState<string>('');
  const [allStudents, setAllStudents] = useState<{
    data: Student[];
  } | null>(null);
  const { user } = useUser();
  console.log('user from user Details', user);
  console.log('allStudents', allStudents);

  const currentStudent =
    allStudents?.data?.filter((student) => student.user === user?.userId) || [];

  console.log({
    currentStudent,
    tutorId,
  });

  useEffect(() => {
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

  const timeSlots = [
    '9:00 AM',
    '11:00 AM',
    '1:00 PM',
    '3:00 PM',
    '5:00 PM',
    '7:00 PM',
  ];

  const handleBookSession = async () => {
    const bookingData = {
      teacher: tutorId,
      student: currentStudent[0]?._id,
      date: date?.toLocaleDateString(),
      timeSlot: selectedTimeSlot,
      subject,
      duration: `${duration} hour${duration === '1' ? '' : 's'}`,
      price: calculatePrice(Number(duration)),
    };

    console.log('Booking Data:', bookingData);
    // Here you would typically send this data to your API
    try {
      const res = await createBookings(bookingData);
      console.log(res);
      if (res?.success) {
        toast.success(res?.message);
        // ✅ Reset form fields
        setDate(new Date());
        setSelectedTimeSlot('');
        setSubject('');
        setDuration('');
      } else {
        toast.error(res?.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const calculatePrice = (duration: number) => {
    return duration * hourlyRate;
  };

  const formatPrice = (duration: string) => {
    if (!duration) return 'BDT 0';
    const price = calculatePrice(Number(duration));
    return `BDT ${price}`;
  };

  const getDurationLabel = (durationValue: string) => {
    const price = calculatePrice(Number(durationValue));
    switch (durationValue) {
      case '1':
        return `1 hour (BDT ${price})`;
      case '1.5':
        return `1.5 hours (BDT ${price})`;
      case '2':
        return `2 hours (BDT ${price})`;
      default:
        return `Select duration`;
    }
  };

  return (
    <Card>
      <CardContent className="p-2 md:p-6">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Calendar */}
          <div className="md:w-1/2 h-[500px] flex">
            <div className="flex-grow flex items-center justify-center">
              <div>
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  fromDate={new Date()}
                  className="rounded-md"
                />
              </div>
            </div>
          </div>

          {/* Time Slots and Booking Form */}
          <div className="md:w-1/2">
            <h3 className="font-bold text-gray-800 mb-4">
              Available Time Slots
            </h3>
            <div className="grid grid-cols-2 gap-3 mb-6">
              {timeSlots.map((slot, index) => (
                <Button
                  key={index}
                  variant={selectedTimeSlot === slot ? 'default' : 'outline'}
                  onClick={() => setSelectedTimeSlot(slot)}
                >
                  {slot}
                </Button>
              ))}
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Session Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-1">
                    Subject
                  </label>
                  <Select onValueChange={setSubject}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select subject" />
                    </SelectTrigger>
                    <SelectContent className="w-full">
                      <SelectItem value="physics">Physics</SelectItem>
                      <SelectItem value="math">Mathematics</SelectItem>
                      <SelectItem value="higher-math">
                        Higher Mathematics
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-1">
                    Duration
                  </label>
                  <Select onValueChange={setDuration}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select duration" />
                    </SelectTrigger>
                    <SelectContent className="w-full">
                      <SelectItem value="1">{getDurationLabel('1')}</SelectItem>
                      <SelectItem value="1.5">
                        {getDurationLabel('1.5')}
                      </SelectItem>
                      <SelectItem value="2">{getDurationLabel('2')}</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {user?.role === 'student' ? (
                  <Button
                    className="w-full"
                    onClick={handleBookSession}
                    disabled={
                      !date || !selectedTimeSlot || !subject || !duration
                    }
                  >
                    Confirm Booking ({formatPrice(duration)})
                  </Button>
                ) : (
                  <Button className="w-full">
                    Only Student Can Booking a Teacher
                  </Button>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
