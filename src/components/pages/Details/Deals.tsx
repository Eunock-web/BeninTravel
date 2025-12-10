import AvisCard from "./AvisCard";
import Reservation from "./Reservation";
import { CheckCircle } from "lucide-react"; 
import { useVoyageContext } from "../../../context/VoyageContext";

function Deals() {
    const { selectedVoyage } = useVoyageContext();
    const images = selectedVoyage?.GaleriesDImages ?? [];
    const inclusions = selectedVoyage?.Inclusions?.split(",").map((i) => i.trim()) ?? [];

    return (
        <div className="max-w-[90vw] mx-auto p-4 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">

                <div className="flex flex-col gap-8 md:col-span-2 lg:col-span-3">

                    <div className="flex flex-col gap-4">
                        <h1 className="font-extrabold text-3xl md:text-4xl lg:text-5xl text-gray-900">
                            {selectedVoyage?.Nom}
                        </h1>
                        <p className="w-fit bg-red-500 text-white rounded-full px-3 py-1 text-sm font-medium"> 
                            {selectedVoyage?.travelType ?? "Découverte"}
                        </p>

                        <div className="flex flex-col gap-4">
                            <img src={images[0]} alt={selectedVoyage?.Nom} className="rounded-xl w-full object-cover aspect-video" />

                            <div className="flex flex-row justify-between gap-3 overflow-x-auto pb-2">
                                {images.map((img, index) =>
                                    <img src={img} alt={`Aperçu ${index}`} key={img} 
                                         className="w-25 h-25 rounded-lg object-cover shrink-0 hover:scale-105 transition-transform cursor-pointer" />
                                )}
                            </div>
                        </div>
                    </div>


                    <div className="flex flex-col gap-3">
                        <h2 className="font-bold text-2xl text-gray-800  pt-4">Description</h2>
                        <p className="text-gray-600 text-base font-normal leading-relaxed">
                            {selectedVoyage?.Description}
                        </p>
                    </div>

                    <div className="flex flex-col gap-4">
                        <h2 className="font-bold text-2xl text-gray-800  pt-4">Ce qui est inclus</h2>
                        <ul className="flex flex-col gap-2">
                            {inclusions.length > 0 ? (
                                inclusions.map((inclus, idx) =>
                                    <li className="flex items-center gap-3 text-gray-600" key={idx}> 
                                        <CheckCircle size={20} className="text-green-500 shrink-0" />
                                        {inclus}
                                    </li>
                                )
                            ) : (
                                <li className="text-gray-500 text-sm">Détails à confirmer</li>
                            )}
                        </ul>
                    </div>

                    <div className="flex flex-col gap-4  pt-4">
                        <h2 className="font-bold text-2xl text-gray-800">Avis des clients</h2>
                        <AvisCard />
                    </div>
                </div>
                <div className="md:col-span-1 lg:col-span-2">
                    <div className="sticky top-4 p-4 rounded-xl bg-white shadow-xl border border-gray-100">
                        <Reservation />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Deals



