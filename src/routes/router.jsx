// eslint-disable-next-line no-unused-vars
import React from 'react';
import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from '../layout/Main';
import Home from '../layout/Home';
import Contact from '../components/contact/Contact';
import Admission from '../components/admission/Admission';

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
          path: "contact",
          element: <Contact></Contact>
        },
        {
          path: "admission",
          element: <Admission></Admission>
        }
      ]
    },
  ]);

export default router;