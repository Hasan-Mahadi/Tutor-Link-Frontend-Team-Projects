import { TTutors } from '@/components/AlTutors/TutorCard';
import { TeacherProfile } from '@/components/TeacherProfile/TeacherProfile';
import { getAllTeacher, getCurrentUser } from '@/services/AuthService';

import React from 'react';

const TeacherProfiles = async () => {
  const user = await getCurrentUser();
  // const students = await getAllStudents();
  const teachers = await getAllTeacher();
  const teacher = teachers.data?.find(
    (teacher: TTutors) => teacher.user === user.userId
  );
  console.log('single teacher', teacher);
  return (
    <div>
      <TeacherProfile teacher={teacher} />
    </div>
  );
};

export default TeacherProfiles;
