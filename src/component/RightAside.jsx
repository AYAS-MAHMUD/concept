import React from 'react';
import SocialLogin from '../Layout/SocialLogin/SocialLogin';
import FindUs from './FindUs';
import QZone from './QZone';

const RightAside = () => {
    return (
        <div className='space-y-8'>
            <SocialLogin/>
            <FindUs></FindUs>
            <QZone/>
        </div>
    );
};

export default RightAside;