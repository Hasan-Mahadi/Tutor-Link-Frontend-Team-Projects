'use server';

import { cookies } from 'next/headers';
import { FieldValues } from 'react-hook-form';

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

    return result;
  } catch (err: any) {
    return Error(err);
  }
};

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
export const getSingleStudentBookings = async (id:string) => {
  try {
    const res = await fetch(`${process.env.BACKEND_URL}/bookings/student/${id}`, {
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
export const getSingleTeacherBookings = async (id:string) => {
  try {
    const res = await fetch(`${process.env.BACKEND_URL}/bookings/teacher/${id}`, {
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

export const confirmedBookingStatus = async(bookingId:string)=>{
  const accessToken = (await cookies()).get('accessToken')?.value;
  try {
    const res = await fetch(`${process.env.BACKEND_URL}/bookings/confirm/${bookingId}`,{
      method:"PATCH",
      headers:{
        'Content-Type':'application/json',
        Authorization:`${accessToken}`
      },
    })

    const result = await res.json();
    return result;
  } catch (err:any) {
    return Error(err)
  }
}

export const cancelBookingStatus = async(bookingId:string)=>{
  const accessToken = (await cookies()).get('accessToken')?.value;
  try {
    const res = await fetch(`${process.env.BACKEND_URL}/bookings/cancel/${bookingId}`,{
      method:"PATCH",
      headers:{
        'Content-Type':'application/json',
        Authorization:`${accessToken}`
      },
    })

    const result = await res.json();
    return result;
  } catch (err:any) {
    return Error(err)
  }
}