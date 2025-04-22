import TeacherEarningsDashboard from '@/components/Earnings/Earning';
import { getAllTeacher, getCurrentUser } from '@/services/AuthService';
import { getTotalEarnings } from '@/services/Earnings';
import React from 'react';

const TotalEarning = async() => {
      const user = await getCurrentUser();
        const teachers = await getAllTeacher();
        const teacher = teachers.data?.find(teacher => teacher.user === user.userId);
        console.log('teacher', teacher);
        const total = await getTotalEarnings(teacher?._id)
        console.log(total);
    return (
        <div>
            <TeacherEarningsDashboard total={total} />
        </div>
    );
};

export default TotalEarning;