import React from 'react';
import ContentHeader from './Pages/ContentHeader';
import "../styles/content.css";
import Calendar from './Calendar';

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
