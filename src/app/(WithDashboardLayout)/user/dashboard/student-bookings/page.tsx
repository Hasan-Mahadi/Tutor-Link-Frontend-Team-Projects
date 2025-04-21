import StudentBooking from '@/components/StudentBooking/StudentBooking';
import { getAllStudents, getCurrentUser } from '@/services/AuthService';
import { getSingleStudentBookings } from '@/services/Bookings';

const StudentBookings = async() => {
    const user = await getCurrentUser();
    const students = await getAllStudents();
    console.log('user',user);
    console.log('students', students);

    const student= students.data?.find(student => student.user === user.userId)
      const bookings = await getSingleStudentBookings(student._id);
      console.log("student bookings",bookings.data);
   

    return (
        <div>
            <StudentBooking bookings={bookings.data}/>
        </div>
    );
};

export default StudentBookings;