export interface IUser {
  userId: string;
  name: string;
  email: string;
  isActive?: boolean;
  role: 'student' | 'tutor';
  iat?: number;
  exp?: number;
}
