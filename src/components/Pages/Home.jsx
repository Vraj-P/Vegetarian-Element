import React from 'react';
import '../../styles/styles.css';
import HeroSection from '../landingSection/landingSection';
import Navbar from '../navbar/navbar';

export default function Home() {
    return (
        <>  
            <Navbar/>
            <HeroSection/>
        </>
    );
}