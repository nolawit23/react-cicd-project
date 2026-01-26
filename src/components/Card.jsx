import React from 'react';
import gpaImg from '../assets/gpa.png';  
import clubImg from '../assets/club.png'; 
import cyearImg from '../assets/cyear.png'; 

const course = [
    {
        title: 'CGPA',
        icon: <img src={gpaImg} alt="CGPA Icon" />,  
        content: [
            <p key="cgpa-value">3.39</p>,
            <p key="total-point">Total Points</p>
        ]
    },
    {
        title: 'Clubs',
        icon: <img src={clubImg} alt="club Icon" />,
        content: [
            <p key="club-count">2</p>,
            <p key="club-names">Rotary and Art Club</p>
        ]
    },
    {
        title: 'Current Year',
        icon: <img src={cyearImg} alt="cyear Icon" />,
        content: [
            <p key="year-info">Third year, 96 Courses Taken</p>,
            <div key="progress" className="year-progress">
                <span className="completed-year">━</span>
                <span className="completed-year">━</span>
                <span className="completed-year">━</span>
                <span className="remaining-year">━</span>
                <span className="remaining-year">━</span>
            </div>
        ]
    }
];

const Card = () => {
    return (
        <div className="Card--wrapper">
            <h4 className="main-title">Overalls</h4>
            <div className="Card--container">
                {course.map((item, index) => (
                    <div className="card" key={index}>
                        <div className="card--title">
                            {item.icon}
                            <h5 className="title">{item.title}</h5>
                        </div>
                        <div className="card--content">
                            {item.content}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Card;


