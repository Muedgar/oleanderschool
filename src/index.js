import React from 'react';
import ReactDOM from 'react-dom/client';
import {
    createBrowserRouter,
    RouterProvider
} from 'react-router-dom';
import './index.css';
import App from './App';
import Dashboard from './dashboard/dashboard';
import Programs from './programs/programs';
import Admission from './admission/admission';
import SchoolValues from './schoolvalues/schoolvalues';
import StudentLife from './studentlife/studentlife';
import Donation from './donation/donation';

import ErrorPage from './errorPage';

const router = createBrowserRouter([
    {
        path: "*",
        element: <ErrorPage />
    },
    {
        path: "/",
        element: <App />
    },
    {
        path: "/dashboard",
        element: <Dashboard />
    },
    {
        path: "/programs",
        element: <Programs />
    },
    {
        path: "/admissionprocess",
        element: <Admission />
    },
    {
        path: "/schoolvalue",
        element: <SchoolValues />
    },
    {
        path: "/studentlife",
        element: <StudentLife />
    },
    {
        path: "/donation",
        element: <Donation />
    }
])

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <RouterProvider router={router} />
);
