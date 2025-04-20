"use client";

import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";

const TeacherBooking = ({ bookings = [] }) => {
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
                      booking.status === "confirmed"
                        ? "text-green-600"
                        : booking.status === "cancelled"
                        ? "text-red-600"
                        : "text-yellow-600"
                    }`}
                  >
                    {booking.status}
                  </TableCell>
                  <TableCell className="space-x-2 text-center">
                    {booking.status === "pending" ? (
                      <>
                        <Button
                          size="sm"
                          variant="success"
                          onClick={() => handleConfirmBooking(booking._id)}
                        >
                          Confirm
                        </Button>
                        <Button
                          size="sm"
                          variant="destructive"
                          onClick={() => handleCancelBooking(booking._id)}
                        >
                          Cancel
                        </Button>
                      </>
                    ) : (
                      "-"
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

const handleConfirmBooking = async (bookingId: string) => {
  // Add your logic here
  console.log("Confirm", bookingId);
};

const handleCancelBooking = async (bookingId: string) => {
  // Add your logic here
  console.log("Cancel", bookingId);
};

export default TeacherBooking;
