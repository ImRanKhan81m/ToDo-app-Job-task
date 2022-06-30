import React, { useState } from 'react';
import 'react-calendar/dist/Calendar.css';
import Calendars from 'react-calendar';
import { format } from 'date-fns';
import './Calender.css'
const Calendar = () => {
    const [value, onChange] = useState(new Date());
    return (
        <div className='mid-content'>
            <h1 className='text-5xl font-bold text-center mt-5'>React Calender</h1>
            <div className='flex justify-center mt-10'>
                <div>
                    <Calendars className="w-full p-5" onChange={onChange} value={value} />
                    <h4 className='text-xl text-center mt-10 lg:mb-28' >Selected Date: {format(value, 'PP')}</h4>
                </div>
            </div>
        </div>
    );
};

export default Calendar;