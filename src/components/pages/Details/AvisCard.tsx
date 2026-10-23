import { Star } from "lucide-react"

type AvisCardProps = {
    rating: number;
    reviewCount: number;
};

function AvisCard({ rating, reviewCount }: AvisCardProps){
    return (
        <div className=" border border-gray-200 rounded-xl p-3  ">
            <div className="flex flex-row items-center gap-2 py-3 ">
                <div className=" flex flex-row " aria-hidden="true">
                    {Array.from({ length: 5 }).map((_, idx) => (
                        <Star
                            key={idx}
                            size={ 20 }
                            className={ idx < Math.round(rating) ? " text-amber-500 fill-amber-500 " : " text-gray-300 " }
                        />
                    ))}
                </div>
                <p> {rating.toFixed(1)} sur 5 </p>
                <p className=" text-gray-400 text-sm "> ({reviewCount} avis) </p>
            </div>
            <p className=" text-gray-400 text-sm pb-2 ">
                Les commentaires détaillés des voyageurs seront bientôt disponibles.
            </p>
        </div>
    )
}

export default AvisCard
