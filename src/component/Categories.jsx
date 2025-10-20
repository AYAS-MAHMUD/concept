import React, { use } from 'react';
import { NavLink } from 'react-router';
const categoriesPromise = fetch('/categories.json')
.then(res=>res.json())

const Categories = () => {
    const data = use(categoriesPromise)
    console.log(data)
    return (
        <div>
            <h2 className='font-bold'>All Categories</h2>
            <div className='flex flex-col mt-5 gap-3'>
                {
                data.map(i=>
                <NavLink key={i.id} className={'btn bg-base-100 text-accent font-semibold border-0 hover:bg-base-200'} to={`/category/${i.id}`}>{i.name}</NavLink>)
            }
            </div>
        </div>
    );
};

export default Categories;