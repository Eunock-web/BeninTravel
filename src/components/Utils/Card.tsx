import Button from "./Button";
import { Star } from "lucide-react";
import SafeImage from "./SafeImage";
interface CardInterface{
    voyageImage?: string;
    voyageTitre?: string;
    voyageDescription?: string;
    voyagePrix?: number;
    voyageNote?: number;
    voyageAvis?: number;
    onSelect?: () => void;
}

function Card( {voyageTitre, voyageDescription, voyageImage, voyagePrix, voyageNote = 0, voyageAvis = 0, onSelect} : CardInterface ) {
    return (
        <div className="p-3">
            <div className="bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden max-w-[800%] mx-auto transition-all duration-300 hover:shadow-xl ">
                
                <div className="relative overflow-hidden">
                    <SafeImage 
                        src={voyageImage} 
                        alt={voyageTitre ?? "Voyage"} 
                        className="w-full aspect-square object-cover transition-transform duration-500 hover:scale-105 hover:cursor-pointer" 
                    />
                </div>
                
                <div className="flex flex-col gap-5 p-4">
                    
                    <div className="flex flex-col gap-3">
                        <h1 className="text-xl font-extrabold text-gray-900 truncate"> {voyageTitre} </h1>
                        <p className="text-sm font-normal text-gray-500 line-clamp-2"> {voyageDescription} </p>
                    </div>

                    <div className="flex flex-row gap-2">
                        <div className=" flex flex-row " aria-label={`Note ${voyageNote} sur 5`}>
                            {Array.from({ length: 5 }).map((_, idx) => (
                                <Star
                                    key={idx}
                                    size={ 20 }
                                    className={ idx < Math.round(voyageNote) ? " text-amber-400 fill-amber-400 " : " text-gray-300 " }
                                />
                            ))}
                        </div>
                        <p className=" text-gray-400 "> ({voyageAvis}) </p>
                    </div>

                    <div className="flex flex-row justify-between items-center pt-2 border-t border-gray-100">
                        
                        <p className="flex items-end gap-1"> 
                            <span className="font-bold text-2xl"> {voyagePrix?.toLocaleString()} FCFA </span> 
                            <span className="text-sm text-gray-500"> /personne </span> 
                        </p>

                        <Button className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-2 px-4 rounded-lg transition-colors" onClick={onSelect}> 
                            Voir les détails 
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card