import { Trash2 } from "lucide-react"

function Panier(){
    return (
        <div className="  grid grid-cols-1 md:grid-cols-2 gap-2 border border-gray-200 p-3 rounded-xl shadow-sm ">
            <div className=" flex flex-row gap-3 ">
                <img src=" src/images/One Piece - manga wallpaper.jfif " alt="" className=" w-25 h-25 rounded-xl " />
                <div className=" flex flex-col gap-1 ">
                    <h2 className=" font-medium text-lg  "> Découverte de Ganvié </h2>

                    <div className=" flex flex-row  ">
                        <p className=" text-gray-500 font-light"> 1200 * 2 = </p>
                    <span className=" font-bold text-lg "> 2400 </span> 
                    </div>

                    <p className=" text-gray-500 font-light "> 14-2-2014 - 2 Adultes </p>
                </div>
            </div>
            <div className=" relative justify-items-end">
                <Trash2 size={ 24 } className=" text-red-400  " />
            </div>
        </div>
    )
}

export default Panier