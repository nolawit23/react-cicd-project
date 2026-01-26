import React from 'react';
import ContentHeader from './contentHeader';
import "../styles/content.css";
import Calendar from '../Pages/Calendar';

const Content = () => {
    return (
        
        <div className="content">
            <ContentHeader />   
            <div className="content--body">
                <Calendar />
                </div> 
        </div>
    
        
    );
};

export default Content;
