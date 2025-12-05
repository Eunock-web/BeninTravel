import Card from "../../Utils/Card";
import { Star } from "lucide-react";

function Main() {
    return (
        <div className="max-w-8xl mx-auto p-4 md:p-8 lg:grid lg:grid-cols-4 lg:gap-8">
            
            <section className="mb-6 lg:mb-0 lg:col-span-1">

                <h1 className="text-2xl font-semibold mb-4">Filters</h1>
                <div className=" grid grid-cols-1 lg:grid-cols-1 gap-8 ">
                    <div className=" flex flex-col gap-2 ">
                        <label htmlFor=" price " className=" text-lg font-bold "> Price Range </label>
                        <input type="range" className="" />
                    </div>

                    <div className=" flex flex-col gap-2 ">
                        <label htmlFor=" price " className="text-lg font-bold"> Travel Type </label>
                        <div className="flex flex-col gap-3">
                            <div className=" flex flex-row gap-3">
                                <input type="checkbox" className="" />
                                <label htmlFor=""> Adventure </label>
                            </div>
                            
                            <div className=" flex flex-row gap-3">
                                <input type="checkbox" className="" />
                                <label htmlFor=""> Cultural </label>
                            </div>

                            <div className=" flex flex-row gap-3">
                                <input type="checkbox" className="" />
                                <label htmlFor=""> Beach </label>
                            </div>    
                        </div>
                    </div>

                    <div className=" flex flex-col gap-2 ">
                        <label htmlFor=" rang " className="text-lg font-bold"> Customer Rating </label>
                        <div className=" flex flex-row ">
                            <Star size={ 20 } className=" text-blue-800 " />
                            <Star size={ 20 } className=" text-blue-800 " />
                            <Star size={ 20 } className=" text-blue-800 " />
                            <Star size={ 20 } className=" text-blue-800" />
                            <Star size={ 20 } className=" text-gray-400" />
                        </div>
                    </div>
                </div>

            </section>

            <section className="lg:col-span-3"> 
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3">
                    
                    <Card voyageTitre="Ouidah History Tour" voyageDescription="Discover the poignant history of the slave route and vibriant Voodoo culture" voyagePrix={450} voyageImage="src/images/One Piece - manga wallpaper.jfif" />
                    <Card voyageTitre="Ouidah History Tour" voyageDescription="Discover the poignant history of the slave route and vibriant Voodoo culture" voyagePrix={450} voyageImage="src/images/One Piece - manga wallpaper.jfif" />
                    <Card voyageTitre="Ouidah History Tour" voyageDescription="Discover the poignant history of the slave route and vibriant Voodoo culture" voyagePrix={450} voyageImage="src/images/One Piece - manga wallpaper.jfif" />
                    <Card voyageTitre="Ouidah History Tour" voyageDescription="Discover the poignant history of the slave route and vibriant Voodoo culture" voyagePrix={450} voyageImage="src/images/One Piece - manga wallpaper.jfif" />
                    <Card voyageTitre="Ouidah History Tour" voyageDescription="Discover the poignant history of the slave route and vibriant Voodoo culture" voyagePrix={450} voyageImage="src/images/One Piece - manga wallpaper.jfif" />                    
                    <Card voyageTitre="Ouidah History Tour" voyageDescription="Discover the poignant history of the slave route and vibriant Voodoo culture" voyagePrix={450} voyageImage="src/images/One Piece - manga wallpaper.jfif" />                    
                </div>
            </section>
        </div>
    );
}

export default Main;