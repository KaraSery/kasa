import React from 'react';
import { createRoot } from 'react-dom/client';

import './index.scss'

import {
    createBrowserRouter,
    RouterProvider
} from 'react-router-dom';

import App from './App';
import Root from './routes/root'
import ErrorPage from "./routes/error-page";

const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <Root />,
            errorElement: <ErrorPage />
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
