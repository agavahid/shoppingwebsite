import React, { useState } from "react";
import './blogPage.css';
import { useEffect } from "react";
import axios from "axios";
import BlogPageItems from "../../components/blogPageItems/blogPageItems";


export default function BlogPage(){
    const[pageDatas, setPageDatas] = useState([]);

    function getAllDatas(){
        axios({
            method: 'GET',
            url: 'http://localhost:8088/azclassics/blogs'
        }).then(response => setPageDatas(response.data))
    }

    useEffect(()=>{
        getAllDatas()
    },[])

    return(
        <div className="blogPage">
            <div className="blogPageHeader">
                <h3>Read About World Classicers</h3>
            </div>
            <div className="blogPageBody">
                {
                    pageDatas.length && pageDatas.length > 0 ?  
                    pageDatas.map((item,i)=> 
                        <BlogPageItems item={item} key={i}/>
                    )
                    : null
                }

            </div>
        </div>
    )
}