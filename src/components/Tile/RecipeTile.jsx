import React from 'react'
import '../../styles/RecipeTile.css'

export default function RecipeTile({recipe}) {
    return (
        recipe["recipe"]["image"].match(/\.(jpeg|jpg|gif|png)$/) != null && (
            <div className='recipeTile'>
                <img className="tileImage" src={ recipe["recipe"]["image"] } alt='Photograph of food'/>
                <p>{recipe["recipe"]["label"]}</p>
            </div>
        )
    );
}
