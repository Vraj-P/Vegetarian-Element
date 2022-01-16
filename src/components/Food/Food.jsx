import Axios from 'axios';
import React from 'react';
import '../../styles/Food.css';
import '../../styles/styles.css';
import { useState } from "react";
import RecipeTile from '../Tile/RecipeTile';

function Food() {
    const [query, setquery] = useState("");
    const [recipes, setrecipes] = useState([]);

    var url = `https://api.edamam.com/search?q=${query}&app_id=ddec2ff4&app_key=3d74c59f6561ef67ef4a9ce9465651c0`;
    
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
            </form>
            <div>
                {recipes.map(recipe => {
                    if(
                        recipe["recipe"]["healthLabels"].find(
                            function(label){
                                return label === "Vegetarian";
                            }
                        )
                    ){
                        return <RecipeTile recipe={recipe}/>;
                    }else{
                        return null
                    }
                })}
            </div>
        </div>
    );
}

export default Food;