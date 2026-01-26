// src/App.jsx
import React from 'react';
import Sidebar from './components/Sidebar';
import Content from './components/Content';
import Profile from './components/Profile';
import './App.css';

const App = () => {
  return (
    <div className='dashboard' data-testid="app-container">
      <Sidebar />
      <div className="dashboard--content">
        <Content />
      </div>
      <div className='Profile'>
        <Profile />
      </div>
    </div>
  );
};

export default App;