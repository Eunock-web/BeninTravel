import { Link } from "react-router-dom"
import { ShoppingCart, Compass } from "lucide-react"

const LinkChemains = [
    {
        id: 1,
        link : "/",
        children : "Home"
    },

    {
        id:2,
        link : "/deals",
        children : "Deals"
    },

    {
        id:3,
        link : "/about",
        children : "About Us"
    }
    
] 

function NavBar(){
    return (
        <>
            <div className=" w-full flex flex-row  justify-between items-center p-4  ">
                <div className=" flex flex-row  items-center gap-3 ">
                    <Compass size={ 30 } className=" text-blue-800 " />  
                    <h1 className=" text-xl font-medium "> BeninTravel </h1>                  
                </div>
                <div>
                    <nav className="hidden md:flex ">
                        { LinkChemains.map((elts) => 
                            <Link to={elts.link} key={ elts.id } className=" text-sm font-medium hover:text-blue-800 "> {elts.children} </Link>
                        ) }
                    </nav>
                </div>
                <div className=" border border-gray-100 bg-gray-100 rounded-full p-2 items-center hover:cursor-pointer  ">
                    <ShoppingCart size={ 30 } className=" text-black  " />                   
                </div>
            </div>
        </>
    )
}

export default NavBar