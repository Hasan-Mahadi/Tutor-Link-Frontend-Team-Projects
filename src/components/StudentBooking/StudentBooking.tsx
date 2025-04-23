'use client';

import { makePayment } from '@/services/Bookings';
import React from 'react';

const StudentBooking = ({ bookings }: any) => {
  const handleMakePayment = async (id: string) => {
    try {
      const res = await makePayment(id);
      if (res.url) {
        window.location.href = res.url;
      }
    } catch (error) {
      console.error('Payment error:', error);
    }
  };

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-semibold mb-6 text-center text-gray-800">
        Your Bookings
      </h1>

      {Array.isArray(bookings) && bookings.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {bookings.map((booking: any) => (
            <div
              key={booking._id}
              className="bg-white shadow-md rounded-xl p-5 border border-gray-200 hover:shadow-lg transition"
            >
              <h2 className="text-xl font-bold text-indigo-600 mb-2">
                {booking.subject}
              </h2>
              <p className="text-gray-700 mb-1">
                <span className="font-medium">Teacher:</span>{' '}
                {booking.teacherName || 'N/A'}
              </p>
              <p className="text-gray-700 mb-1">
                <span className="font-medium">Date:</span> {booking.date}
              </p>
              <p className="text-gray-700 mb-1">
                <span className="font-medium">Time:</span> {booking.timeSlot}
              </p>
              <p className="text-gray-700 mb-1">
                <span className="font-medium">Duration:</span>{' '}
                {booking.duration}
              </p>
              <p className="text-gray-700 mb-1">
                <span className="font-medium">Price:</span> ${booking.price}
              </p>
              <p
                className={`mb-3 font-medium ${
                  booking.status === 'confirmed'
                    ? 'text-green-600'
                    : booking.status === 'pending'
                    ? 'text-yellow-600'
                    : 'text-blue-600'
                }`}
              >
                Status: {booking.status}
              </p>

              {booking.status === 'confirmed' && (
                <button
                  onClick={() => handleMakePayment(booking._id)}
                  className="mt-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md transition"
                >
                  Payment
                </button>
              )}
              {booking.status === 'pending' && (
                <button className="mt-2 bg-yellow-500 text-white px-4 py-2 rounded-md transition">
                  Pending
                </button>
              )}
              {booking.status === 'completed' && (
                <button className="mt-2 bg-green-500 text-white px-4 py-2 rounded-md transition">
                  Completed
                </button>
              )}
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">No bookings found</p>
      )}
    </div>
  );
};

export default StudentBooking;
