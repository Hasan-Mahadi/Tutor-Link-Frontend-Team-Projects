
import { UpdateStudentForm } from '@/components/UpdateStudent/UpdateStudent';
import { getAllStudents, getCurrentUser } from '@/services/AuthService';

const UpdateProfile = async() => {
    const user = await getCurrentUser();
        const students = await getAllStudents();
        const student = students.data?.find(student => student.user === user?.userId)
    return (
        <div>
            <UpdateStudentForm userId={user?.userId} student={student} />
        </div>
    );
};

export default UpdateProfile;