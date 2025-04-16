'use server';
// get all tutors
export const getAllTutors = async (query?: {
  [key: string]: string | string[] | undefined;
}) => {
  const params = new URLSearchParams();
  console.log(query, 'query');

  if (query?.subject) {
    params.append('subject', query?.subject.toString());
  }
  if (query?.hourlyRate) {
    params.append('hourlyRate', query?.hourlyRate.toString());
  }
  if (query?.rating) {
    params.append('rating', query?.rating.toString());
  }
  if (query?.searchTerm) {
    params.append('searchTerm', query?.searchTerm.toString());
  }
  if (query?.sortBy) {
    params.append('sortBy', query?.sortBy.toString());
  }
  if (query?.name) {
    params.append('name', query?.name.toString());
  }
  if (query?.grade) {
    params.append('grade', query?.grade.toString());
  }
  if (query?.availability) {
    params.append('availability', query?.availability.toString());
  }

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/teachers?${params}`,
      {
        next: {
          tags: ['TUTOR'],
        },
      },
    );
    const data = await res.json();
    return data;
  } catch (error: any) {
    return Error(error.message);
  }
};

// get single product
export const getSingleTutor = async (teacherId: string) => {
  try {
    const res = await fetch(
      `${process.env.BACKEND_URL}/teachers/${teacherId}`,
      {
        next: {
          tags: ['TUTOR'],
        },
      },
    );
    const data = await res.json();
    return data;
  } catch (error: any) {
    return Error(error.message);
  }
};
