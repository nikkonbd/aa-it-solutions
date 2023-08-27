import React from 'react';
import Hero from "../assets/SEO.png"
import { Button } from '@material-tailwind/react';
import { Link } from 'react-router-dom';

const HomeHero = () => {
    return (
        <div className='md:flex md:max-w-6xl mx-auto py-4 md:py-24 justify-between items-center gap-6'>
            <div className='px-4 md:px-0'>
            <h2 className='text-3xl font-semibold text-[#03112d] md:text-6xl md:font-bold pb-4'><span className='text-[#119fc6]'>Drive Customers Through</span> Digital Channels.</h2>
            <p className='text-center md:text-left pb-4 md:pb-0'>It takes most people one to three months to learn the different digital marketing <br /> tools and techniques, and it takes six months to a year to perfect those skills through practice. Of course, this depends on several factors.</p>
            <Button
              variant="gradient"
              size="md"
              className="hidden mt-6 lg:inline-block"
            >
              <span><Link to={"/contact"}>Contact Now</Link></span>
            </Button>
            </div>
            <div>
                <img className='w-full md:h-[400px] md:w-[800px]' src={Hero} alt="" />
            </div>
        </div>
    );
};

export default HomeHero;