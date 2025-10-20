import React, { use } from 'react';
import user from '../assets/user.png'
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';

const Navbar = () => {
    const {user,signOutUser} = use(AuthContext)
    const handleLogout=()=>{
        signOutUser()
        .then(()=>{

        })
        .catch(error=>{
        console.log(error)
    })
    }
    return (
        <div className='flex justify-between items-center'>
            <div className=''>{user && user.email}</div> 
            <div className='nav flex gap-5 text-accent'>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/home'>About</NavLink>
                <NavLink to='/career'>Career</NavLink>
            </div>
            <div className='nav-login flex gap-3'>
                <img src={user} alt="" />
                {
                    user? <button onClick={handleLogout} className='btn btn-primary px-10'>Log Out</button>:<Link to='/auth/login'  className='btn btn-primary px-10'>Login</Link>

                }
            </div>
        </div>
    );
};

export default Navbar;