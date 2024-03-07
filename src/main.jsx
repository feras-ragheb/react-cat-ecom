import React from 'react';
import ReactDOM from 'react-dom/client';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Layout from './components/layouts/Layout';

// import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './pages/about';
import HomePage from './pages/home/home';
import ProductsList from './pages/productsList';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />     
      },
      { 
        path: "about",
        element: <About /> ,
      },
      { 
        path: "products",
        element: <ProductsList /> ,
      },
    ],
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
