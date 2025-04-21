import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";

//import of Layout component
import Layout from "../layouts/Layout";
import App from "../App";

//Import of page components
const Accueil = lazy(()=>import("../pages/Accueil"))
const Apropos = lazy(()=>import("../pages/Apropos"))
const Articles = lazy(()=>import("../pages/Articles"))
const Boutique = lazy(()=>import("../pages/Boutique"))
const Contact = lazy(()=>import("../pages/Contact"))
const Services = lazy(()=>import("../pages/Services"))




//all browser routes
export const router = createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        children:[
            {
                path:'/home',
                element:<Accueil/>
            },
            {
                path:'/about',
                element:<Apropos/>
            },
            {
                path:'/articles',
                element:<Articles/>
            },
            {
                path:'/store',
                element:<Boutique/>
            },
            {
                path:'/contact',
                element:<Contact/>
            },
            {
                path:'/services',
                element:<Services/>
            },
            
        ]
    },
])

