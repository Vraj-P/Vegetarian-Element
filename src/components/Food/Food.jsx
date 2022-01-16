import Axios from 'axios';
import React from 'react';
import '../../styles/Food.css';
import '../../styles/styles.css';
import { useState } from "react";
import RecipeTile from '../Tile/RecipeTile';

function Food() {
    const [query, setquery] = useState("");
    const [recipes, setrecipes] = useState([]);
    const [calories, setcalories] = useState("500-1000");

    var url = `https://api.edamam.com/search?q=${query}&app_id=ddec2ff4&app_key=3d74c59f6561ef67ef4a9ce9465651c0&calories=${calories}&healthLabels=Vegetarian`;
    
    async function getRecipes() {
        var result = await Axios.get(url);
        setrecipes(result.data.hits);
        console.log(result.data);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        getRecipes();
    }
    
    return (
        <div className="FoodContainer">
            <h1>Food Recipes</h1>
            <form className='app_searchForm' onSubmit={onSubmit}>
                <input className='app_input' type='text' placeholder='enter ingridient' value={query} onChange={(e) => setquery(e.target.value)}></input>
                <input className='app_submit' type='submit' value="Search"></input>
                <select className='app_calories' >
                    <option className='app_calories' onClick={() => setcalories("0-250")}>0-250</option>
                    <option className='app_calories' onClick={() => setcalories("250-500")}>250-500</option>
                    <option className='app_calories' onClick={() => setcalories("500-750")}>500-750</option>
                    <option className='app_calories' onClick={() => setcalories("750-1000")}>750-1000</option>
                </select>
            </form>
            <div>
                {recipes.map(recipe => {
                    return <RecipeTile recipe={recipe}/>;
                })}
            </div>
        </div>
    );
}

export default Food;