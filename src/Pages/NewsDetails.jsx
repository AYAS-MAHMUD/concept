import React, { useEffect, useState } from 'react';
import Header from '../component/Header';
import RightAside from '../component/RightAside';
import NewsDetailsCard from './NewsDetailsCard';
import { useLoaderData, useParams } from 'react-router';

const NewsDetails = () => {
    const {id} = useParams()
    const data = useLoaderData()
    // console.log(id,data)
    const [news,setNews] = useState({})
    useEffect(()=>{
        const newsDetails = data.find(i=>i.id==id);
        setNews(newsDetails)
    },[data,id])
    // console.log(news)
    return (
        <div>
            <header>
                <Header></Header>
            </header>
            <main className='grid grid-cols-12 gap-5 w-10/12 mx-auto'>
                <section className='col-span-9'>
                    <NewsDetailsCard news={news} />
                </section>
                <aside className='col-span-3'>
                    <RightAside></RightAside>
                </aside>
            </main>
        </div>
    );
};

export default NewsDetails;