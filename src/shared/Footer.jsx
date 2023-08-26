// import React from 'react';

import { FaDribbble, FaFacebook, FaGithub, FaTwitter } from "react-icons/fa";

import { Link } from "react-router-dom";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#03112d] text-white" style={{ backgroundImage: "url(https://i.ibb.co/K0XHbpd/35.png)" }}>
      <div className="container">
        <div className="pt-28 pb-32 ">
          <div className="flex-wrap lg:grid  md:grid-col-4 lg:grid-cols-4 justify-items-center px-8 sm:px-0 sm:ps-10 md:ps-20">
            <div className="gap-4 ">
              <div>
                
                <h2 className="text-3xl font-semibold">AA IT SOLUSION</h2>
              </div>
              <div>
                <p className="my-3">
                  Excellence decisively nay man per impression maximum
                  contrasted remarkably is perfect point. uncommonly solicitude
                  inhabiting projection
                </p>
                <span className="flex gap-2">
                  <Link
                    to=""
                    className="  shadow-lg font-normal  bg-[#197685] bg-opacity-30  flex h-10 w-10 items-center justify-center align-center rounded-lg outline-none focus:outline-none mr-2 hover:bg-white hover:text-black"
                  >
                    <FaFacebook></FaFacebook>
                  </Link>
                  <Link
                    to=""
                    className="  shadow-lg font-normal  bg-[#197685] bg-opacity-30  flex h-10 w-10 items-center justify-center align-center rounded-lg outline-none focus:outline-none mr-2 hover:bg-white hover:text-black"
                  >
                    <FaGithub></FaGithub>
                  </Link>
                  <Link
                    to=""
                    className="  shadow-lg font-normal  bg-[#197685] bg-opacity-30  flex h-10 w-10 items-center justify-center align-center rounded-lg outline-none focus:outline-none mr-2 hover:bg-white hover:text-black"
                  >
                    <FaDribbble></FaDribbble>
                  </Link>
                  <Link
                    to=""
                    className="  shadow-lg font-normal  bg-[#197685] bg-opacity-30  flex h-10 w-10 items-center justify-center align-center rounded-lg outline-none focus:outline-none mr-2 hover:bg-white hover:text-black"
                  >
                    <FaTwitter></FaTwitter>
                  </Link>
                </span>
              </div>
            </div>

            <div className="footerGrid  mt-10 md:mt-5 lg:mt-0 lg:ps-20">
              <h2>Our Services</h2>
              <Link className="mt-3" to=""> Social Media Marketing </Link>
              <Link className="mt-3" to=""> Growth Hacking</Link>
              <Link className="mt-3" to=""> Web Degain & Web Development</Link>
              <Link className="mt-3" to=""> Offline SEO</Link>
            </div>
            <div className="footerGrid mt-8 md:mt-5 lg:mt-0 lg:ps-20">
              <h3>Official Info</h3>
              <div className="mt-3">
                <h2>ADDRESS:</h2>
                <p>5919 Trussville Crossings Pkwy, Birmingham</p>
              </div>
              <div className="mt-3">
                <h2>EMAIL:</h2>
                <p>saitumi@gmail.com</p>
              </div>
              <div className="mt-3">
                <h2>PHONE:</h2>
                <p>+123 34598768</p>
              </div>
            </div>
            <div className="footerGrid mt-8 md:mt-5 lg:mt-0 lg:ps-20">
              <h2 >Newsletter</h2>
              <p className="mt-3">
                {" "}
                Join our subscribers list to get the latest news and special
                offers.
              </p>
              <div>
                <input className="mt-3" type="email" name="" id="" placeholder="Your Email" />
                <br />
                <input type="submit" value="Subscribe" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 bg-[#197685] bg-opacity-20 flex justify-between items-end">
        <div className="text-start ms-20">
          <p>Copyright &copy; 2023 - AA IT SOLUSION</p>
        </div>
        <div className="me-20">
            <div className="flex gap-4">
                <Link to="">Terms </Link>
                <Link to="">Privacy </Link>
                <Link to="">Support</Link>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
