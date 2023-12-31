// import React from 'react';

import AddCard from "../components/Card";
import Categories from "../components/Categories";
import HomeHero from "../components/Hero";
import OurTeam from "../components/OutTeam/OurTeam";

const Home = () => {
    return (
        <div className="bg-[#eff2f5]">
            <HomeHero></HomeHero>
            <AddCard></AddCard>
            <Categories></Categories>
            <OurTeam></OurTeam>
        </div>
    );
};

export default Home;