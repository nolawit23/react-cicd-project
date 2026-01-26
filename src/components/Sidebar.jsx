import React from 'react';
import { BiHome,BiTime, BiMessage, BiCog } from 'react-icons/bi';
import logoImg from '../assets/logo.png';
import '../styles/sidebar.css';
const Sidebar = () => {
    return (
        <div className='menu'>
            <div className="logo">
            {<img src={logoImg} alt="Company Logo"/> }
            </div>

            <div className='menu--list'>
                <a href="/Dashboard" className="item">
                    <BiHome className='icon' />
                    Dashboard
                </a>
                <a href="/Schedule" className="item">
                    <BiTime className='icon'/>
                    Schedule
                </a>
                <a href="#" className="item">
                    <BiMessage className='icon'/>
                    Message
                </a>
                <a href="#" className="item">
                    <BiCog className='icon'/>
                    Settings
                </a>
            </div>
        </div>
    );
};

export default Sidebar;





