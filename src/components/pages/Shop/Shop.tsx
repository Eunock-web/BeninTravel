import NavBar from "../../Utils/NavBar"
import Panier from "./Panier"
import PanierResumCard from "./PanierResumCard"


function Shop(){
    return (
        <div className=" grid grid-cols-1   gap-7 mx-auto w-[95vw] ">
            <NavBar />
            
            <div className=" grid grid-cols-1 md:grid-cols-2 md:w-[90%]   gap-10 ">
                <div className=" flex flex-col gap-9 ">
                    <h1 className=" font-bold text-3xl "> Mon Panier </h1>
                    <Panier />
                    <Panier />
                    <Panier />
                    <Panier />
                    <Panier />
                    <Panier />
                    <Panier />
                    <Panier />
                </div>
                <div className=" ">
                    <PanierResumCard  />
                </div>
            </div>
        </div>
    )
}

export default Shop