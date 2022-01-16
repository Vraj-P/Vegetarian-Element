import React from 'react';
import '../../styles/styles.css';
import HeroSection from '../landingSection/landingSection';
import Navbar from '../navbar/navbar';
import Footer from '../Footer/Footer';
import Food from '../Food/Food';

export default function Home() {
    return (
        <>  
            <Navbar/>
            <HeroSection/>
            <Food/>
            <Footer/>
        </>
    );
}