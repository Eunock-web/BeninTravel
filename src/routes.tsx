import type { RouteObject } from "react-router-dom";
import Home from "./components/pages/Home/Home";
import Deals from "./components/pages/Details/Deals";
import About from "./components/pages/Home/About";
import Shop from "./components/pages/Shop/Shop";
import ConfirmCommande from "./components/pages/ConfirmCommande";


const AppRoutes : RouteObject[] =[

    {
        path : '/',
        element : <Home />
    },
    
    {
        path : '/deals',
        element : <Deals />
    },

    // {
    //     path : '/about',
    //     element : <About />
    // },

    {
        path : '/shop',
        element : <Shop />
    },

    {
        path : "/confirm",
        element : <ConfirmCommande />
    }

] 

export default AppRoutes