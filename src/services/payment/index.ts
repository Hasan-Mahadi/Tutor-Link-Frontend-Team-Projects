
export const makePayment = async (bookingsId: string) => {
  try {
    const res = await fetch(`${process.env.BACKEND_URL}/payment/${bookingsId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const result = await res.json();

    return result;
  } catch (err: any) {
    return Error(err);
  }
};
