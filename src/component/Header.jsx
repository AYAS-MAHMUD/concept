import React from 'react';
import { format } from 'date-fns';
import logo from '../assets/logo.png'
const Header = () => {
    return (
        <div className='flex items-center justify-center flex-col mt-5 gap-3'>
            <img src={logo} alt="" />
            <p className='text-accent'>Journalism Without Fear or Favour</p>
            <p>{format(new Date(),"EEEE,MMMM,dd,yyyy")}</p>
        </div>
    );
};

export default Header;