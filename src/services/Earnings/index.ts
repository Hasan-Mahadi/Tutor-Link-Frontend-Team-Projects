export const getTotalEarnings = async (teacherId:string) => {
    try {
      const res = await fetch(`${process.env.BACKEND_URL}/earnings/${teacherId}`, {
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