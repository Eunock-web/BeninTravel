import NavBar from "../../Utils/NavBar";
import Panier from "./Panier";
import PanierResumCard from "./PanierResumCard";
import { useVoyageContext } from "../../../context/VoyageContext";

type ShopProps = {
    hideNav?: boolean;
    onClose?: () => void;
};

function Shop({ hideNav, onClose }: ShopProps){
    const { cartItems } = useVoyageContext();
    const subTotal = cartItems.reduce((acc, item) => acc + item.unitPrice * item.travelers, 0);

    return (
        <div className=" grid grid-cols-1   gap-7 mx-auto w-[95vw] ">
            {!hideNav && <NavBar />}
            
            <div className=" grid grid-cols-1 md:grid-cols-2 md:w-[90%]   gap-10 ">
                <div className=" flex flex-col gap-9 ">
                    <h1 className=" font-bold text-3xl "> Mon Panier </h1>
                    {cartItems.length === 0 && (
                        <p className="text-gray-500 text-sm">Aucun élément pour l’instant.</p>
                    )}
                    {cartItems.map((item) => (
                        <Panier
                            key={item.id}
                            title={item.title}
                            unitPrice={item.unitPrice}
                            travelers={item.travelers}
                            image={item.image}
                            departDate={item.departDate}
                            returnDate={item.returnDate}
                        />
                    ))}
                </div>
                <div className=" ">
                    <PanierResumCard
                        subTotal={subTotal}
                        taxes={Math.round(subTotal * 0.05)}
                        onClose={onClose}
                    />
                </div>
            </div>
        </div>
    )
}

export default Shop