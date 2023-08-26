// import React from 'react';

import { FaDribbble, FaFacebook, FaGithub, FaTwitter } from "react-icons/fa";

import { Link } from "react-router-dom";
import React from "react";
import { Button, Input } from "@material-tailwind/react";

const Footer = () => {
  const [email, setEmail] = React.useState("");
  const onChange = ({ target }) => setEmail(target.value);
  return (
    <footer className="bg-[#03112d] text-white" style={{ backgroundImage: "url(https://i.ibb.co/K0XHbpd/35.png)" }}>
      <div className="">
        <div className="pt-28 ps-4 md:ps-0 pb-32 md:max-w-6xl lg:max-w-7xl mx-auto">
          <div className="flex-wrap lg:grid  md:grid-col-4 lg:grid-cols-4 gap-6 justify-items-center">
            <div className="">
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

            <div className="footerGrid  mt-10 md:mt-5 lg:mt-0">
              <h2>Our Services</h2>
              <Link className="" to=""> Social Media Marketing </Link>
              <Link className="" to=""> Growth Hacking</Link>
              <Link className="" to=""> Web Degain & Web Development</Link>
              <Link className="" to=""> Offline SEO</Link>
            </div>
            <div className="footerGrid mt-8 md:mt-5 lg:mt-0">
              <h3>Official Info</h3>
              <div className="">
                <h2>ADDRESS:</h2>
                <p>5919 Trussville Crossings Pkwy, Birmingham</p>
              </div>
              <div className="">
                <h2>EMAIL:</h2>
                <p>saitumi@gmail.com</p>
              </div>
              <div className="">
                <h2>PHONE:</h2>
                <p>+123 34598768</p>
              </div>
            </div>
            <div className="footerGrid mt-8 md:mt-5 lg:mt-0">
              <h2 >Newsletter</h2>
              <p className="">
                {" "}
                Join our subscribers list to get the latest news and special
                offers.
              </p>
              {/* <div className="flex">
                <input className="mt-3 py-2 px-3 text-black outline-none rounded-md" type="email" name="" id="" placeholder="Your Email" />
                <br />
                <input className="bg-white py-1 px-3 text-black cursor-pointer rounded-md font-medium" type="submit" value="Subscribe" />
              </div> */}
              <div className="relative flex w-full max-w-[24rem]">
      <Input
        type="email"
        label="Email Address"
        value={email}
        onChange={onChange}
        className="pr-20 outline text-white"
        containerProps={{
          className: "min-w-0",
        }}
      />
      <Button
        size="sm"
        color={email ? "gray" : "blue-gray"}
        disabled={!email}
        className="!absolute right-1 top-1 rounded"
      >
        Subscribe
      </Button>
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
