
import { UpdateStudentForm } from '@/components/UpdateStudent/UpdateStudent';
import { getAllStudents, getCurrentUser } from '@/services/AuthService';

const UpdateStudentProfile = async() => {
    const user = await getCurrentUser();
        const students = await getAllStudents();
        const student = students.data?.find(student => student.user === user?.userId)
    return (
        <div>
            <UpdateStudentForm student={student} />
        </div>
    );
};

export default UpdateStudentProfile;