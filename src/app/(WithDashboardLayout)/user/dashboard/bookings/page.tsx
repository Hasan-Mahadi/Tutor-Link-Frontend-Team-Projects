
import MyBookings from '@/components/StudentBooking/StudentBooking';
import { MyProfile } from '@/components/MyProfile/MyProfile';
import { getAllStudents, getCurrentUser } from '@/services/AuthService';
import { getAllBookings } from '@/services/Bookings';

import React from 'react';

const Bookings = async() => {
    
    const bookings = await getAllBookings();
    
    return (
        <div>
            <MyBookings bookings={bookings}/>
        </div>
    );
};

export default Bookings;