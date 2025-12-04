import type { RouteObject } from "react-router-dom";
import Home from "./components/pages/Home/Home";
import Deals from "./components/pages/Home/Deals";
import About from "./components/pages/Home/About";


const AppRoutes : RouteObject[] =[

    {
        path : '/',
        element : <Home />
    },
    
    {
        path : '/deals',
        element : <Deals />
    },

    {
        path : '/about',
        element : <About />
    },

] 

export default AppRoutes