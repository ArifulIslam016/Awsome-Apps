import React from 'react';
import Banner from '../Components/Banner/Banner';
import Hero from '../Components/Hero/Hero';
import User from '../Components/User/User';
import TreandingApps from '../Components/TreandingApps/TreandingApps';

const Home = () => {
    return (
      <div>
        <Banner></Banner>
        <Hero></Hero>
        <User></User>
        <TreandingApps></TreandingApps>
      </div>
    );
};

export default Home;