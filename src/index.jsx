import React from 'react';
import { createRoot } from 'react-dom/client';

import './index.scss'

import {
    createBrowserRouter,
    RouterProvider
} from 'react-router-dom';

import Layout from './pages/Layout.jsx'
import Error404 from "./pages/error-404/Error404.jsx";

import Home, {getData} from "./pages/homepage/Home.jsx";
import LodgmentDetails, {getLodgmentDetail} from "./pages/lodgment-details/LodgmentDetails.jsx";
import AboutPage from "./pages/about/About.jsx";


const router = createBrowserRouter(
    [
        {
            path: "/kasa",
            element: <Layout />,
            errorElement: <Error404 />,
            children: [
                {
                    path: '',
                    element: <Home />,
                    loader: getData,
                },
                {
                    path: 'detail/:id',
                    element: <LodgmentDetails />,
                    loader: getLodgmentDetail,
                },
                {
                    path: 'about/',
                    element: <AboutPage />
                },
            ]
        }
    ]
)

const container = document.getElementById('app');
const root = createRoot(container)
root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
)
