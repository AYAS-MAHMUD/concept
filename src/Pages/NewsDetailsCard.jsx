import React from 'react';
import { Link } from 'react-router';

const NewsDetailsCard = ({news}) => {
    const {title,image_url,details,category_id} = news
    return (
        <div >
            <h1 className="font-bold mb-3">Dragon News</h1>
            <div className='p-6 rounded shadow'>
                <img src={image_url} className='w-full rounded' alt="" />
            <h1 className='font-bold text-2xl my-3'>{title}</h1>
            <h1>{details}</h1>
            <Link to={`/category/${category_id}`} className='btn btn-secondary my-2'>All news in this category</Link>
            </div>

        </div>
    );
};

export default NewsDetailsCard;