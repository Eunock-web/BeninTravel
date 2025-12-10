import Shop from "./Shop";
import { useVoyageContext } from "../../../context/VoyageContext";

function ShopModal() {
    const { isShopOpen, closeShop } = useVoyageContext();

    if (!isShopOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-xl shadow-2xl max-h-[90vh] overflow-y-auto w-full max-w-5xl relative">
                <button
                    onClick={closeShop}
                    className="absolute top-3 right-3 text-gray-600 hover:text-black"
                >
                    Fermer
                </button>
                <Shop hideNav />
            </div>
        </div>
    );
}

export default ShopModal;




