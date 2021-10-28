import React from 'react';
import Plans from './Plans/Plans';
import Banner from './Banner/Banner';
import Services from './Services/Services';
import About from './About/About'

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Plans></Plans>
            <Services></Services>
            <About></About>
        </div>
    );
};

export default Home;