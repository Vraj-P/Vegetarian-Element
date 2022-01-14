import React from 'react';
import '../../styles/styles.css';
import HeroSection from '../landingSection/landingSection';
import Navbar from '../navbar/navbar';
import Footer from '../Footer/Footer';

export default function Home() {
    return (
        <>  
            <Navbar/>
            <HeroSection/>
            <Footer/>
        </>
    );
}