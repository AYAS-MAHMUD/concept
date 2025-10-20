import React from 'react';
import Marquee from 'react-fast-marquee';
const LatestNews = () => {
    return (
        <div className='flex items-center gap-5 bg-base-200 '>
            <p className='text-base-100 bg-secondary px-3 py-2'>Latest</p>
            <marquee behavior="" direction="">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum maxime commodi animi veniam fugiat placeat natus porro vitae sapiente laudantium.</marquee>
        </div>
    );
};

export default LatestNews;