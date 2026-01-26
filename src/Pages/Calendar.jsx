import React from 'react';
import '../styles/content.css';
const Calendar = () => {
    return (
        <div className="Calendar--wrapper">
        <h4 className="Calendar-header">Today Task</h4>
<div className="calendar-card"> 
    <div className="card-items">
        <div className="time">9:00 Am <hr></hr></div>
        <div className="time">10:00 Am<hr></hr></div>
        <div className="time">11:00 Am<hr></hr></div>
        <div className="time">12:00 Am<hr></hr></div>
        <div className="time">1:00 Am<hr></hr></div>   
        <div className="time">2:00 Am<hr></hr></div>
    <div className="time-date">05 Mon</div>
    <div className="time-date">06 Tue</div>
    <div className="time-date">07 Wed</div>
    <div className="time-date">08 Thu</div>
    <div className="time-date">09 Fri</div>
    </div>
    </div>
</div>
    );
};

export default Calendar;