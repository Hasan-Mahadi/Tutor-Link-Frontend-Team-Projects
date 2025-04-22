import StudentBooking from '@/components/StudentBooking/StudentBooking';
import { getAllStudents, getCurrentUser } from '@/services/AuthService';
import { getSingleStudentBookings } from '@/services/Bookings';

const StudentBookings = async () => {
  const user = await getCurrentUser();
  const students = await getAllStudents();

  const student = students.data.find(
    (student: any) => student.user === user?.userId
  );
  //   console.log(student)
  const bookings: { data: any[] } = await getSingleStudentBookings(student._id);
    console.log('student bookings', bookings.data);
  

  return (
    <div>
      <StudentBooking bookings={bookings?.data} />
    </div>
  );
};

export default StudentBookings;