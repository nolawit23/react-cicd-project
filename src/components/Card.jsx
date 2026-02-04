
import React from 'react';

const course = [
    {
        title: 'CGPA',
        icon: <div>[GPA Icon]</div>, 
        content: [
            <p key="cgpa-value">3.37</p>,
            <p key="total-point">Total Points</p>
        ]
    },
    {
        title: 'Clubs',
        icon: <div>[Club Icon]</div>,  
        content: [
            <p key="club-count">2</p>,
            <p key="club-names">Rotary and Art Club</p>
        ]
    },
    {
        title: 'Current Year',
        icon: <div>[Year Icon]</div>,  
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