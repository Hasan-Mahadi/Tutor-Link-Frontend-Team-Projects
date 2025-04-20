'use server';
// get all Students
export const getAllStudents = async () => {
  try {
    const res = await fetch(`${process.env.BACKEND_URL}/students`, {
      next: {
        tags: ['STUDENT'],
      },
    });
    const data = await res.json();
    return data;
  } catch (error: any) {
    return Error(error.message);
  }
};
