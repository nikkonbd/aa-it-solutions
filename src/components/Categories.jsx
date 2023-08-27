import React from "react";
import image1 from "../assets/S1.jpg";
import image2 from "../assets/S2.jpg";
import image3 from "../assets/S3.jpg";
import image4 from "../assets/S4.jpg";
import image5 from "../assets/S5.jpg";
import image6 from "../assets/S6.jpg";
import image7 from "../assets/S7.jpg";
import image8 from "../assets/S8.jpg";

const Categories = () => {
  return (
    <div className="">
      <div className="pt-20">
        <p className="text-center text-[#0dcaf0]">OUR CATEGORY</p>
        <h2 className="text-5xl text-[#03112d] md:pb-10 text-center font-bold">
          Our Category Section
        </h2>
      </div>
      <div className="grid grid-cols-1 px-4 md:px-0 sm:grid-cols-2  md:grid-cols-4 gap-4 md:max-w-6xl mx-auto py-10">
        <div className="">
          <img className="w-full shadow-md transition duration-300 ease-in-out hover:scale-90" src={image1} alt="" />
          <h2 className="text-2xl font-bold text-center pt-2 text-[#03112d]">Design</h2>
        </div>
        <div>
          <img className="w-full shadow-md transition duration-300 ease-in-out hover:scale-90" src={image2} alt="" />
          <h2 className="text-2xl font-bold text-center pt-2 text-[#03112d]">Development</h2>
        </div>
        <div>
          <img className="w-full shadow-md transition duration-300 ease-in-out hover:scale-90" src={image3} alt="" />
          <h2 className="text-2xl font-bold text-center pt-2 text-[#03112d]">Marketing</h2>
        </div>
        <div>
          <img className="w-full shadow-md transition duration-300 ease-in-out hover:scale-90" src={image4} alt="" />
          <h2 className="text-2xl font-bold text-center pt-2 text-[#03112d]">
            IT and Software
          </h2>
        </div>
        <div>
          <img className="w-full shadow-md transition duration-300 ease-in-out hover:scale-90" src={image5} alt="" />
          <h2 className="text-2xl font-bold text-center pt-2 text-[#03112d]">
            Personal Development
          </h2>
        </div>
        <div>
          <img className="w-full shadow-md transition duration-300 ease-in-out hover:scale-90" src={image6} alt="" />
          <h2 className="text-2xl font-bold text-center pt-2 text-[#03112d]">Business</h2>
        </div>
        <div>
          <img className="w-full shadow-md transition duration-300 ease-in-out hover:scale-90" src={image7} alt="" />
          <h2 className="text-2xl font-bold text-center pt-2 text-[#03112d]">Photography</h2>
        </div>
        <div>
          <img className="w-full shadow-md transition duration-300 ease-in-out hover:scale-90" src={image8} alt="" />
          <h2 className="text-2xl font-bold text-center pt-2 text-[#03112d]">Music</h2>
        </div>
      </div>
    </div>
  );
};

export default Categories;
