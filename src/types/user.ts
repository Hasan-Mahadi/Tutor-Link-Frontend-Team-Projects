export interface IUser {
  userId: string;
  name: string;
  email: string;
  isActive?: boolean;
  role: 'student' | 'teacher';
  iat?: number;
  exp?: number;
}

export type TBooking = {
  _id: string;
  teacher: { name: string }; // populate teacher if needed
  subject: string;
  date: string;
  timeSlot: string;
  duration: string;
  price: number;
  status: 'pending' | 'confirmed' | 'completed' | 'canceled';
  paymentStatus?: boolean;
};
