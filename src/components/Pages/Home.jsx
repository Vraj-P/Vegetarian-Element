import React from 'react';
import '../../styles/styles.css';
import HeroSection from '../landingSection/landingSection';
import Navbar from '../navbar/navbar';
import Card from '../cards/cards';
import Oatmeal from '../../images/Oatmeal.png'

export default function Home() {
    return (
        <>  
            <Navbar/>
            <HeroSection/>
            <Card image={Oatmeal} title='Chai Oatmeal' spice='243' level='Intermediate level' time='40 mins' meal='Lunch' servings='4' discription='For an Extra thick and creamy bowl, add oat bran. It will make for a hearty helping and also add more fiber to your meal. If you love the taste of chai, you will enjoy this spiced version with coriander, cinnamon, and turmeric.' ingredients='pineapple, and cherry'/>
        </>
    );
}