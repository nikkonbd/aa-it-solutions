// import React from 'react';

import {
  FaAddressCard,
  FaDribbble,
  FaEnvelope,
  FaFacebook,
  FaGithub,
  FaPhone,
  FaTwitter,
} from "react-icons/fa";

import { Link } from "react-router-dom";
import React from "react";

const Footer = () => {
  return (
    <footer
      className="bg-[#03112d] text-white"
      style={{ backgroundImage: "url(https://i.ibb.co/K0XHbpd/35.png)" }}
    >
      <div className="">
        <div className="pt-28 ps-4 md:ps-0 pb-32 md:max-w-6xl mx-auto">
          <div className="flex-wrap lg:grid  md:grid-col-4 lg:grid-cols-4 gap-6 justify-items-center">
            <div className="">
              <div>
                <h2 className="text-3xl text-[#0dcaf0] font-semibold">A A IT SOLUTION</h2>
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

            <div className="footerGrid  mt-10 md:mt-5 lg:mt-0">
              <h2 className="text-2xl">Our Services</h2>
              <Link className="hover:text-[#0dcaf0]" to="">
                {" "}
                Social Media Marketing{" "}
              </Link>
              <Link className="hover:text-[#0dcaf0]" to="">
                {" "}
                Growth Hacking
              </Link>
              <Link className="hover:text-[#0dcaf0]" to="">
                {" "}
                Web Degain & Web Development
              </Link>
              <Link className="hover:text-[#0dcaf0]" to="">
                {" "}
                Offline SEO
              </Link>
            </div>
            <div className="footerGrid mt-8 md:mt-5 lg:mt-0">
              <h3 className="text-2xl">Official Info</h3>
              <div className="flex items-center justify-center gap-2">
                <FaAddressCard></FaAddressCard>
                <p>Paikgacha, Khulna, Bangladesh</p>
              </div>
              <div className="flex items-center justify-center gap-2">
                <FaEnvelope></FaEnvelope>
                <p>saitumi@gmail.com</p>
              </div>
              <div className="flex items-center justify-center gap-2">
                <FaPhone></FaPhone>
                <p>+123 34598768</p>
              </div>
            </div>
            <div className="footerGrid mt-8 md:mt-5 lg:mt-0">
              <h2 className="text-2xl">Newsletter</h2>
              <p className="">
                {" "}
                Join our subscribers list to get the latest news and special
                offers.
              </p>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-base-100">Enter your email address</span>
                </label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="username@site.com"
                    className="input input-bordered text-black w-full pr-16"
                  />
                  <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 bg-[#197685] bg-opacity-20 justify-center items-center md:flex md:justify-between md:items-end">
        <div className="md:text-start ms-10 md:ms-20">
          <p>Copyright &copy; 2023 - A A IT SOLUTION</p>
        </div>
        <div className="md:me-20">
          <div className="flex gap-4 justify-center">
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
