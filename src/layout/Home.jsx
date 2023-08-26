// import React from 'react';

import AddCard from "../components/Card";
import Categories from "../components/Categories";
import HomeHero from "../components/Hero";
import Team from "../components/Team";

const Home = () => {
    return (
        <div className="bg-[#eff2f5]">
            <HomeHero></HomeHero>
            <Categories></Categories>
            <AddCard></AddCard>
            <Team></Team>
        </div>
    );
};

export default Home;