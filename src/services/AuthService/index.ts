/* eslint-disable @typescript-eslint/no-explicit-any */
'use server';
import { cookies } from 'next/headers';
import { FieldValues } from 'react-hook-form';
import { jwtDecode } from 'jwt-decode';

export const registerStudent = async (userData: FieldValues) => {
  console.log(userData);
  try {
    const res = await fetch(`${process.env.BACKEND_URL}/users/create-student`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });
    const result = await res.json();
    // if (result.success) {
    //   (await cookies()).set('accessToken', result.data.accessToken);
    // }

    return result;
  } catch (err: any) {
    return Error(err);
  }
};
export const registerTeacher = async (userData: FieldValues) => {
  try {
    const res = await fetch(`${process.env.BACKEND_URL}/users/create-teacher`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });
    const result = await res.json();
    // if (result.success) {
    //   (await cookies()).set('accessToken', result.data.accessToken);
    // }

    return result;
  } catch (err: any) {
    return Error(err);
  }
};

export const loginUser = async (userData: FieldValues) => {
  try {
    const res = await fetch(`${process.env.BACKEND_URL}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });

    const result = await res.json();
    if (result.success) {
      (await cookies()).set('accessToken', result.data.accessToken);
    }

    return result;
  } catch (err: any) {
    return Error(err);
  }
};

export const getCurrentUser = async () => {
  const accessToken = (await cookies()).get('accessToken')?.value;
  let decodedData = null;
  if (accessToken) {
    decodedData = await jwtDecode(accessToken);
    return decodedData;
  }
  return null;
};
