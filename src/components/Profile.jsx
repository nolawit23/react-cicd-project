import React, { useState } from 'react';
import "../styles/profile.css";
import userimg from '../assets/user.jpg';
import dayjs from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import { styled } from '@mui/system';
import TextField from '@mui/material/TextField';


const CustomStaticDatePicker = styled(StaticDatePicker)(({ theme }) => ({
    width: '200px', 
    '& .MuiPickersDay-root': {
        width: '40px', 
        height: '40px', 
        '&:hover': {
            backgroundColor: '#72C832', 
            color: '#fff', 
        },
        color: '#000', 
    },
    '& .MuiCalendarPicker-root': {
      
        width: '100%', 
    },
    '& .MuiDayPicker-day': {
        width: '40px', 
        height: '40px',
        color: '#000', 
    },
    '& .MuiDayPicker-header': {
        fontSize: '0.6rem', 
        color: '#000', 
    },
    '& .MuiButtonBase-root': {
        color: '#72C832', 
    },
    '& .MuiPickersDay-daySelected': {
        backgroundColor: '#72C832', 
        color: '#fff', 
    },
    '& .MuiPickersDay-daySelected:hover': {
        backgroundColor: '#72C832', 
        color: '#fff', 
    },
    '& .MuiPickersDay-root.Mui-selected': {
        backgroundColor: '#72C832',
        color: '#fff',
    },
    '& .MuiPickersDay-root:not(.Mui-selected)': {
        backgroundColor: 'transparent',
        color: '#000',}
}));

const Profile = () => {
    const [date, setDate] = useState(dayjs());

    return (
        <div className="profile-container">
            <div className="profile-header">
                <h1>Profile</h1>
            </div>

            <div className="user-profile">
                <div className="user-detail">
                    <img src={userimg} alt="user picture" className="user-image" />
                    <h6 className="username">BereketeAb Briku</h6>
                    <span className="profession">Student</span>
                </div>
                <div className="calendar-container">
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DemoContainer components={['StaticDatePicker']}>
                            <DemoItem label="Calendar">
                                <CustomStaticDatePicker
                                    value={date}
                                    onChange={(newDate) => setDate(newDate)}
                                    renderInput={(params) => <TextField {...params} />}
                                />
                            </DemoItem>
                        </DemoContainer>
                    </LocalizationProvider>
                </div>
            </div>
        </div>
    );
};

export default Profile;

