import React from 'react';
import ContentHeader from './ContentHeader';
import Card from '../components/Card';
import BarChart from '../components/BarChart'; 
import "../styles/content.css";

const Content = () => {
    return (
        <div className="content">
            <ContentHeader />
            <Card />
            <BarChart />
        </div>
    );
};

export default Content;
