import Button from "../../Utils/Button"


function Reservation(){
    return (
        <div className=" p-5  ">
            <div className=" flex flex-col gap-2 justify-center items-center ">
                <h1 className=" font-bold text-2xl "> Réserver votre aventure </h1>
                <p className=" text-gray-400 "> A partir de <span> 750 / </span> personne </p>
            </div>

            <div>
                <form className=" flex flex-col gap-3 ">

                    <div className=" flex flex-col gap-4 ">
                        <div className=" flex flex-col gap-2 ">
                            <label htmlFor="depart"> Départ </label>
                            <input type="date" className=" bg-gray-200 p-3 rounded-lg " />
                        </div>

                        <div className=" flex flex-col gap-2 ">
                            <label htmlFor="depart"> Retour </label>
                            <input type="date" className=" bg-gray-200 p-3 rounded-lg " />
                        </div>
                    </div>

                    <div className=" flex flex-col gap-2 ">
                        <label htmlFor="voyageurs"> Voyageurs </label>
                        <input type="number" className=" bg-gray-200 p-3 rounded-lg " />
                    </div>

                    <div className=" flex flex-row justify-between ">
                        <h1 className=" font-extralight "> Prix Total </h1>
                        <h1 className=" font-bold "> 1500 </h1>
                    </div>

                    <div className="">
                        <Button className= " bg-sky-800 text-white p-3 border border-blue-800 rounded-xl w-full "> Réserver </Button>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default Reservation