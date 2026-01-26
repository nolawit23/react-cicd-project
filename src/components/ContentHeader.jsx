import React from 'react';
import picImg from '../assets/pic.png'; 

const ContentHeader = () => {
    return (
        <div className='content--header'>
            <div className="header--text">
                <h3 className="header--title">Hi BereketeAB</h3>
                <p className="ppp">Welcome To Your Dashboard</p>
            </div>
            <div className="header--right">
                <img src={picImg} alt="Person Logo" className="pic" />
            </div>
            <div className="header--activity">
            </div>
        </div>
    );
};

export default ContentHeader;

