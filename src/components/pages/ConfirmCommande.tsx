import { Check } from "lucide-react";
import Button from "../Utils/Button";
import { useVoyageContext } from "../../context/VoyageContext";
import ShopModal from "./Shop/ShopModal";
import { Link } from "react-router-dom"

function ConfirmCommande(){
    const { reservation } = useVoyageContext();

    return (
        <>
        <div className=" flex flex-col gap-8  rounded-xl p-10 md:justify-items-center-safe md:w-2xl min-h-screen ">
            <div className=" flex flex-col gap-3 items-center justify-center ">
                <Check size={ 80 } className=" border border-red-400 bg-red-400 text-white p-3 rounded-full  "/>
                <h1 className=" font-bold text-3xl text-sky-600  "> Réservation confirmée ! </h1>
                <p className=" text-gray-500 font-light text-lg text-center ">
                    Votre voyage pour {reservation.voyage?.Destinations ?? reservation.voyage?.Nom} est réservé.
                </p>
            </div>

            <div className=" flex flex-col justify-center items-center border border-gray-100 bg-gray-100 p-5 rounded-xl ">
                <h1 className=" font-medium text-gray-600 text-2lg "> NUMÉRO DE RÉSERVATION </h1>
                <h1 className=" font-bold text-3xl ">BN-8675309 </h1>
                <p className="text-gray-500 text-sm mt-2">
                    {reservation.departDate} → {reservation.returnDate} • {reservation.travelers} voyageur(s)
                </p>
                <p className="text-gray-700 font-semibold mt-1">
                    Total: {reservation.total.toLocaleString()} FCFA
                </p>
            </div>

            <div>
                <Link to="/">
                    <Button className=" bg-blue-500 text-white items-center w-full p-4 rounded-sm hover:cursor-pointer" > Retour à l’accueil </Button>                
                </Link>
            </div>
        </div>
        <ShopModal />
        </>
    )
}

export default ConfirmCommande