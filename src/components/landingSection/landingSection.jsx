import React from 'react';
import '../../styles/landingSection.css';
import '../../styles/styles.css';
import Background from '../../static/Images/Landingsection-background-2.jpg';

function HeroSection() {
    return (
        <div className="HeroContainer">
            <img src={Background} alt="Food"/>
            <h1>Vegetarian Element</h1>
            {/* <p>Quick & Easy Recipes</p> */}
            <p>➦Quick,</p>
            <p>➦Easy,</p>
            <p>➦Vegetarian,</p>
        </div>
    );
}

export default HeroSection;