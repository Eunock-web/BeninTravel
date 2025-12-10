import { Trash2 } from "lucide-react";

type PanierProps = {
    title: string;
    unitPrice: number;
    travelers: number;
    image?: string;
    departDate?: string;
    returnDate?: string;
};

function Panier({ title, unitPrice, travelers, image, departDate, returnDate }: PanierProps){
    const total = unitPrice * travelers;
    return (
        <div className="  grid grid-cols-1 md:grid-cols-2 gap-2 border border-gray-200 p-3 rounded-xl shadow-sm ">
            <div className=" flex flex-row gap-3 ">
                {image ? (
                    <img src={image} alt={title} className=" w-25 h-25 rounded-xl object-cover " />
                ) : (
                    <div className="w-25 h-25 rounded-xl bg-gray-200" />
                )}
                <div className=" flex flex-col gap-1 ">
                    <h2 className=" font-medium text-lg  "> {title} </h2>

                    <div className=" flex flex-row  ">
                        <p className=" text-gray-500 font-light"> {unitPrice.toLocaleString()} x {travelers} = </p>
                    <span className=" font-bold text-lg "> {total.toLocaleString()} FCFA </span> 
                    </div>

                    <p className=" text-gray-500 font-light "> {departDate || "-"} - {returnDate || "-"} • {travelers} voyageur(s) </p>
                </div>
            </div>
            <div className=" relative justify-items-end">
                <Trash2 size={ 24 } className=" text-red-400  " />
            </div>
        </div>
    )
}

export default Panier