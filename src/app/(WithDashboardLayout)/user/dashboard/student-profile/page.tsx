
import { StudentProfile } from '@/components/StudentProfile/StudentProfile';
import { getAllStudents, getCurrentUser } from '@/services/AuthService';


const Profile = async() => {
    const user = await getCurrentUser();
    const students = await getAllStudents();
    const student = students.data?.find(student => student.user === user.userId)
  
    return (
        <div>
            <StudentProfile student={student}/>
        </div>
    );
};

export default Profile;