'use server';

import { revalidateTag } from 'next/cache';
import { cookies } from 'next/headers';
import { FieldValues } from 'react-hook-form';

// Create a new booking and trigger revalidation
export const createBookings = async (bookingsData: FieldValues) => {
  try {
    const res = await fetch(`${process.env.BACKEND_URL}/bookings`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(bookingsData),
    });
    const result = await res.json();
    revalidateTag('bookings'); // Revalidate bookings data
    return result;
  } catch (err: any) {
    return Error(err);
  }
};

// Fetch all bookings
export const getAllBookings = async () => {
  try {
    const res = await fetch(`${process.env.BACKEND_URL}/bookings`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      cache: 'no-store',
    });
    const result = await res.json();
    return result;
  } catch (err: any) {
    return Error(err);
  }
};

// Fetch bookings for a specific student
export const getSingleStudentBookings = async (id: string) => {
  try {
    const res = await fetch(
      `${process.env.BACKEND_URL}/bookings/student/${id}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        cache: 'no-store',
      }
    );
    const result = await res.json();
    return result;
  } catch (err: any) {
    return Error(err);
  }
};

// Fetch bookings for a specific teacher
export const getSingleTeacherBookings = async (id: string) => {
  try {
    const res = await fetch(
      `${process.env.BACKEND_URL}/bookings/teacher/${id}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        cache: 'no-store',
      }
    );
    const result = await res.json();
    return result;
  } catch (err: any) {
    return Error(err);
  }
};

// Confirm a booking and trigger revalidation
export const confirmedBookingStatus = async (bookingId: string) => {
  const accessToken = (await cookies()).get('accessToken')?.value;
  try {
    const res = await fetch(
      `${process.env.BACKEND_URL}/bookings/confirm/${bookingId}`,
      {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `${accessToken}`,
        },
      }
    );

    const result = await res.json();
    revalidateTag('bookings'); // Revalidate bookings data
    return result;
  } catch (err: any) {
    return Error(err);
  }
};

// Cancel a booking and trigger revalidation
export const cancelBookingStatus = async (bookingId: string) => {
  const accessToken = (await cookies()).get('accessToken')?.value;
  try {
    const res = await fetch(
      `${process.env.BACKEND_URL}/bookings/cancle/${bookingId}`,
      {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `${accessToken}`,
        },
      }
    );

    const result = await res.json();
    revalidateTag('bookings'); // Revalidate bookings data
    return result;
  } catch (err: any) {
    return Error(err);
  }
};

// Make a payment and trigger revalidation
export const makePayment = async (id: string) => {
  try {
    const res = await fetch(`${process.env.BACKEND_URL}/payment/${id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      cache: 'no-store',
    });
    const result = await res.json();
    // revalidateTag('bookings'); // Revalidate bookings data after payment
    return result;
  } catch (err: any) {
    return Error(err);
  }
};
