import React from 'react'
import '../../styles/cards.css'
import { FiClock } from 'react-icons/fi';
import { GoPerson } from 'react-icons/go';
import { CgSignal } from 'react-icons/cg';
import { AiFillFire } from 'react-icons/ai';

function Card({image,title,meal,servings,time,level,spice,ingredients,discription}){
    return(
        <div className="card">
            <img src={image}></img>
            <div className="top">
                <h1><b>{title}</b></h1>
                <h3 className="meal">{meal}</h3>
            </div>
            <div className="info">
                <h4><GoPerson color='rgb(192, 155, 35)'/>{servings}</h4>
                <h4><FiClock color='rgb(192, 155, 35)'/>{time}</h4>
                <h4><CgSignal color='rgb(192, 155, 35)'/>{level}</h4>
                <h4><AiFillFire color='rgb(192, 155, 35)'/>{spice}</h4>
            </div>
            <div className= "about"> 
                <p>{discription}</p>
            </div>
            <div className= "ingred"> 
                <p><b>Ingredients: </b>{ingredients}</p>
            </div>
        </div>
    );
}

export default Card