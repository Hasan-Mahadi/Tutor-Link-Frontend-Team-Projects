'use client';

import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import {
  cancelBookingStatus,
  confirmedBookingStatus,
} from '@/services/Bookings';
import { toast } from 'sonner';

interface Booking {
  _id: string;
  subject: string;
  studentName: string;
  date: string;
  timeSlot: string;
  duration: string;
  price: number;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
}

const TeacherBooking = ({ bookings = [] }: { bookings: Booking[] }) => {
  const handleConfirmBooking = async (bookingId: string) => {
    const res = await confirmedBookingStatus(bookingId);
    if (res.success) {
      toast.success(res.message);
    } else {
      toast.error(res.message);
    }
  };

  const handleCancelBooking = async (bookingId: string) => {
    const res = await cancelBookingStatus(bookingId);
    console.log(res);
  };
  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Your Bookings</h1>

      {bookings.length === 0 ? (
        <p className="text-gray-500">No bookings found</p>
      ) : (
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Subject</TableHead>
                <TableHead>Student</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Time</TableHead>
                <TableHead>Duration</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-center">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {bookings.map((booking) => (
                <TableRow key={booking._id}>
                  <TableCell>{booking.subject}</TableCell>
                  <TableCell>{booking.studentName}</TableCell>
                  <TableCell>{booking.date}</TableCell>
                  <TableCell>{booking.timeSlot}</TableCell>
                  <TableCell>{booking.duration} hrs</TableCell>
                  <TableCell>${booking.price}</TableCell>
                  <TableCell
                    className={`capitalize ${
                      booking.status === 'confirmed'
                        ? 'text-green-600'
                        : booking.status === 'cancelled'
                        ? 'text-red-600'
                        : 'text-yellow-600'
                    }`}
                  >
                    {booking.status}
                  </TableCell>
                  <TableCell className="space-x-2 text-center">
                    {booking.status === 'pending' ? (
                      <>
                        <Button
                          size="sm"
                          variant="default"
                          className="cursor-pointer"
                          onClick={() => handleConfirmBooking(booking._id)}
                        >
                          Confirm
                        </Button>
                        <Button
                          size="sm"
                          variant="destructive"
                          className="cursor-pointer"
                          onClick={() => handleCancelBooking(booking._id)}
                        >
                          Cancel
                        </Button>
                      </>
                    ) : (
                      '-'
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      )}
    </div>
  );
};

export default TeacherBooking;