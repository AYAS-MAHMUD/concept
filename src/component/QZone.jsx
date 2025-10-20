import React from 'react';
import swim from '../assets/swimming.png';
import playground from '../assets/playground.png'
import classpng from '../assets/class.png'
const QZone = () => {
    return (
        <div className='bg-base-200 p-3'>
            <h2 className="font-bold mb-3">Q-Zone</h2>
            <div>
                <img src={swim} alt="" />
                <img src={playground} alt="" />
                <img src={classpng} alt="" />
            </div>
        </div>
    );
};

export default QZone;