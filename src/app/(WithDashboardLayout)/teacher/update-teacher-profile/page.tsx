import { UpdateTeacherForm } from '@/components/UpdateTeacher/UpdateTeacher';
import { getAllTeacher, getCurrentUser } from '@/services/AuthService';

const UpdateTeacherProfile = async() => {
    const user = await getCurrentUser();
        const teachers = await getAllTeacher();
        const teacher = teachers.data?.find(teacher => teacher.user === user?.userId);
        console.log("teacher from update teacher profile",teacher);
    return (
        <div>
            <UpdateTeacherForm teacher={teacher} />
        </div>
    );
};

export default UpdateTeacherProfile;