import React from 'react'
import '../../styles/RecipeTile.css'
import Card from '../cards/cards';

export default function RecipeTile({recipe}) {
    var cookingTime = 0;
    recipe["recipe"]["totalTime"] === 0 ? cookingTime = 30 : cookingTime = (recipe["recipe"]["totalTime"])/40

    var ingred = recipe["recipe"]["ingredientLines"].join(", ")

    return (
        recipe["recipe"]["image"].match(/\.(jpeg|jpg|gif|png)$/) != null && (
            <div className='recipeTile'>
                <Card image={recipe["recipe"]["image"]} title={recipe["recipe"]["label"]} calories={Math.round(recipe["recipe"]["calories"])} level='1-3' time={cookingTime} meal={recipe["recipe"]["cuisineType"]} servings={recipe["recipe"]["yield"]} discription={recipe["recipe"]["shareAs"]} ingredients={ingred}/>
            </div>
        )
    );
}
