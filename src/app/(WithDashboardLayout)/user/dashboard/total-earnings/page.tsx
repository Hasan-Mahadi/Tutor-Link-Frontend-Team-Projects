import { TTutors } from '@/components/AlTutors/TutorCard';
import TeacherEarningsDashboard from '@/components/Earnings/Earnings';
import { getAllTeacher, getCurrentUser } from '@/services/AuthService';
import { getTotalEarnings } from '@/services/Earnings';
import React from 'react';

const TotalEarning = async () => {
  const user = await getCurrentUser();
  const teachers = await getAllTeacher();
  const teacher = teachers.data?.find(
    (teacher: TTutors) => teacher.user === user.userId
  );

  const { data: total } = await getTotalEarnings(teacher?._id); // ✅ Fix here

  return (
    <div>
      <TeacherEarningsDashboard total={total} />
    </div>
  );
};

export default TotalEarning;
