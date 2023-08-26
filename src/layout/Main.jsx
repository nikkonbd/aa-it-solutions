import React from 'react';

import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";
import StickyNavbar from '../shared/Navbar';

const Main = () => {
    return (
        <div>
            <StickyNavbar></StickyNavbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;