import React, { useState, useEffect } from "react";
import './genres.css';
import arrowIconToDown from '../../assets/icons/generalicons/white-down-arrow.png';
import axios from 'axios';
import { Link } from "react-router-dom";


export default function Genres({buttonClick}){

    const [isActive, setIsActive] = useState(false);
    const [pageItems, setPageItems] = useState([]);

    function onClickHandler(key){
        setIsActive(!isActive)
    }
    function listItemOnClickHandler(){
        setIsActive(!isActive)
        buttonClick()
    }
    function getItems(){
        axios({
            method:'GET',
            url:'http://localhost:8088/professions'
        }).then(response => setPageItems(response.data))
    }
    useEffect(()=>{
        getItems()
    }
    ,[])
    
    return(
        <div className='genresMain' onClick={()=> {onClickHandler()}}>
            <div className='genresHeader'>
                <h4>DISCOVER</h4>
            </div>
            <div className="genresArrow">
                <img src={isActive === false ? arrowIconToDown : "https://img.icons8.com/?size=1x&id=19035&format=png"} className="whiteArrowIcon"/>
            </div>
            <div className={isActive === false ? "genrescaret" : "genrescaret active"}></div>
            <div className={isActive === false ? "genresMenu" : "genresMenu active"}>
                <h3 className="genresMenuHeader">Genre Cataloge</h3>
                {
                    pageItems && pageItems.length > 0 ?
                        <ul className="genreCardList">{
                            pageItems.map((item, i) => 
                                <Link to={`/genre/${item.professionid}`} key={i} onClick={()=>listItemOnClickHandler()} className="genreCardListItem">{item.name}</Link>
                            )}
                        </ul>
                    : null
                }
            </div>
        </div>
    )
}