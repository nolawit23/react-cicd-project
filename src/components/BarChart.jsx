

import React from 'react';
import "../styles/content.css"; 
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const WeeklyBarChart = () => {
  const data = [
    { name: 'Mon', Hr: 6, pv: 3 },
    { name: 'Thu', Hr: 3, pv: 5 },
    { name: 'Wen', Hr: 4, pv: 1 },
    { name: 'Thr', Hr: 0, pv: 0 },
    { name: 'Fri', Hr: 6, pv: 5 },
  ];

  return (
    <div className="chart-container">
      <h4 className="chart-title">Hour Spent</h4>
      <div className="weekly-bar-card">
        <ResponsiveContainer width="100%" height={250}>
          <BarChart
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 30,
              bottom: 5,
            }}
            barSize={30}
          >
            <XAxis dataKey="name" scale="point" padding={{ left: 15, right: 10 }} />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="Hr" fill="#72C832" background={{ fill: '#eee' }} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default WeeklyBarChart;
