import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import NewsCard from './NewsCard';

const CategoryNews = () => {
    const {id} = useParams()
    const [categoryNews,setCategoryNews] = useState([]);

    const data = useLoaderData();

    useEffect(()=>{
        if(id=='0'){
            setCategoryNews(data)
            return;
        }else if(id=='1'){
            const filtered = data.filter(i=>i.others.is_today_pick==true);
            setCategoryNews(filtered)
        }else{
            const filtered = data.filter(i=>i.category_id==id);
        setCategoryNews(filtered)
        }
        
    },[data,id])
    return (
        <div>
            {/* <h2>All news are here {categoryNews.length}</h2> */}
            <div className='grid grid-cols-1 gap-5'>
                {
                    categoryNews.map(news=><NewsCard news={news} ></NewsCard>)
                }
            </div>
        </div>
    );
};

export default CategoryNews;