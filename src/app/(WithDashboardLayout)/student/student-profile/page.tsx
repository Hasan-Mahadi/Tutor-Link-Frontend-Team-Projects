
import { MyProfile } from '@/components/MyProfile/MyProfile';
import { getAllStudents, getCurrentUser } from '@/services/AuthService';

import React from 'react';

const Profile = async () => {
  const user = await getCurrentUser();
  const students = await getAllStudents();
  const student = students.data?.find(
    (student : any) => student.user === user?.userId
  );
  // console.log('single student',student);
  return (
    <div>
      <MyProfile student={student} />
    </div>
  );
};

export default Profile;