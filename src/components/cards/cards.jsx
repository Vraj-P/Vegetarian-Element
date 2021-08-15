import React from 'react'
import '../../styles/cards.css'
import { FiClock } from 'react-icons/fi';
import { GoPerson } from 'react-icons/go';
import { FaLevelUpAlt } from 'react-icons/fa';
import { AiFillFire } from 'react-icons/ai';


function Card({image,title,meal,servings,time,level,calories,ingredients,discription}){
    return(
        <div className="card">
            <img className="cardImage" src={image} alt="food depicted in the recipe"/>
            <div className="top">
                <h1><b>{title}</b></h1>
                <h3 className="meal">{meal}</h3>
            </div>
            <div className="info">
                <h4><GoPerson color='rgb(192, 155, 35)'/>&nbsp;{servings}</h4>
                <h4><FiClock color='rgb(192, 155, 35)'/>&nbsp;{time}</h4>
                <h4><FaLevelUpAlt color='rgb(192, 155, 35)'/>&nbsp;{level}</h4>
                <h4><AiFillFire color='rgb(192, 155, 35)'/>&nbsp;{calories}</h4>
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