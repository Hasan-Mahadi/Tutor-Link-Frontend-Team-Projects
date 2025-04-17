'use server';

import { revalidateTag } from 'next/cache';
import { FieldValues } from 'react-hook-form';

export const createReviews = async (reviewData: FieldValues) => {
  try {
    const res = await fetch(`${process.env.BACKEND_URL}/reviews`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(reviewData),
    });
    const result = await res.json();
    revalidateTag('TUTOR');

    return result;
  } catch (err: any) {
    return Error(err);
  }
};
