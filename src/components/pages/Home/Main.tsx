import Card from "../../Utils/Card";
import { Star } from "lucide-react";

const voyagesCulturels = [
  {
    voyageTitre: "Palais Royaux d'Abomey",
    voyageDescription: "Découvrez l'histoire fascinante du royaume du Dahomey à travers ses palais historiques classés au patrimoine mondial de l'UNESCO.",
    voyagePrix: 45000,
    voyageImage: "src/images/One Piece - manga wallpaper.jfif",
    rang: <Star size={ 20 } className=" text-blue-800 " />,
    nombreRang: 127
  },
  {
    voyageTitre: "Cité Lacustre de Ganvié",
    voyageDescription: "Explorez la Venise de l'Afrique, un village entièrement construit sur pilotis au milieu du lac Nokoué.",
    voyagePrix: 35000,
    voyageImage: "src/images/One Piece - manga wallpaper.jfif",
    rang: <Star size={ 20 } className=" text-blue-800 " />,
    nombreRang: 203
  },
  {
    voyageTitre: "Temple des Pythons à Ouidah",
    voyageDescription: "Vivez une expérience unique dans ce temple sacré abritant des dizaines de pythons royaux vénérés.",
    voyagePrix: 25000,
    voyageImage: "src/images/One Piece - manga wallpaper.jfif",
    rang: <Star size={ 20 } className=" text-blue-800 " />,
    nombreRang: 156
  }
];

function Main() {
    return (
        <div className="max-w-8xl mx-auto p-4 md:p-8 lg:grid lg:grid-cols-4 lg:gap-8 mb-30">
            
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
                    
                    {
                        voyagesCulturels.map((elts,index) =>
                            <Card voyageTitre= { elts.voyageTitre} voyageDescription={elts.voyageDescription} voyagePrix={elts.voyagePrix} voyageImage={elts.voyageImage} key={index} />                    
                        )
                    }

                </div>
            </section>
        </div>
    );
}

export default Main;