import { TTutors } from '@/components/AlTutors/TutorCard';
import TeacherBooking from '@/components/TeacherBooking/TeacherBooking';
import { getAllTeacher, getCurrentUser } from '@/services/AuthService';
import {
  getSingleStudentBookings,
  getSingleTeacherBookings,
} from '@/services/Bookings';

const TeacherBookings = async () => {
  const user = await getCurrentUser();
  const teachers = await getAllTeacher();

  const teacher = teachers?.data?.find(
    (teacher: TTutors) => teacher.user === user.userId
  );
  const bookings = await getSingleTeacherBookings(teacher?._id);
  console.log('teacher bookings', bookings.data);

  return (
    <div>
      <TeacherBooking bookings={bookings.data} />
    </div>
  );
};

export default TeacherBookings;
