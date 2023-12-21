import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home/Home.jsx';
import Shop from './Components/Shop/Shop.jsx';
import ProductsContext from '../ProductsContext/ProductsContext.jsx';
import SingleProduct from './Components/Product-Details/SingleProduct.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/shop",
        element: <Shop></Shop>
      },
      {
        path: "/product/:id",
        element: <SingleProduct></SingleProduct>,
        loader:({params}) => fetch(`http://localhost:3000/product/${params.id}`)
      },
      {
        path: "/shop/:name",
        element: <Shop></Shop>,
        loader:({params}) => fetch(`http://localhost:3000/shop/${params.name}`)
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <ProductsContext>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </ProductsContext>

)
