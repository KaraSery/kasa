import React from 'react';
import { createRoot } from 'react-dom/client';

import './index.scss'

import {
    createBrowserRouter, json,
    RouterProvider
} from 'react-router-dom';

import Root from './routes/root'
import Error404Content from "./components/error-404-content";

import Homepage, {getData} from "./routes/homepage";
import LodgmentDetails, {getLodgmentDetail} from "./routes/lodgment-details";


const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <Root />,
            errorElement: <Error404Content />,
            children: [
                {
                    path: '',
                    element: <Homepage />,
                    loader: getData,
                },
                {
                    path: 'detail/:id',
                    element: <LodgmentDetails />,
                    loader: getLodgmentDetail,
                },
                {
                    path: 'about/',
                    element: <LodgmentDetails />,
                    loader: getData,
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
